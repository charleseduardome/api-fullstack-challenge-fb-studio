import { Request, Response } from 'express';
import { container } from 'tsyringe';

import FilterQuestionsService from '@modules/questions/services/FilterQuestionsService';

export default class FilterQuestionsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { materia, vestibular, ano, disponivel } = request.body;

    const filterQuestionsService = container.resolve(FilterQuestionsService);

    const questions = await filterQuestionsService.execute({
      materia,
      vestibular,
      ano,
      disponivel,
    });

    return response.json(questions);
  }
}
