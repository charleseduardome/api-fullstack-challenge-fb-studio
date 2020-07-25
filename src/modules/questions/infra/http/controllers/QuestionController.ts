import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateQuestionService from '@modules/questions/services/CreateQuestionService';
import ListQuestionsService from '@modules/questions/services/ListQuestionsService';
import UpdateQuestionService from '@modules/questions/services/UpdateQuestionService';

export default class QuestionController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      materia,
      vestibular,
      resolucao,
      enunciado,
      numeroQuestao,
      ano,
      alternativas,
      disponivel,
    } = request.body;

    const createQuestion = container.resolve(CreateQuestionService);

    const question = await createQuestion.execute({
      materia,
      vestibular,
      resolucao,
      enunciado,
      numeroQuestao,
      ano,
      alternativas,
      disponivel,
    });

    return response.json(question);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listQuestionsService = container.resolve(ListQuestionsService);

    const questions = await listQuestionsService.execute();

    return response.json(questions);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { enunciado, resolucao } = request.body;

    const updateQuestion = container.resolve(UpdateQuestionService);

    const question = await updateQuestion.execute({
      id,
      enunciado,
      resolucao,
    });

    return response.json(question);
  }
}
