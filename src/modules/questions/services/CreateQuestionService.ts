import { injectable, inject } from 'tsyringe';

import Question from '@modules/questions/infra/typeorm/schemas/Question';
import IQuestionsRepository from '@modules/questions/repositories/IQuestionsRepository';

interface alternativas {
  letra: string;
  correta: boolean;
  texto: string;
}

interface IRequest {
  materia: string;
  vestibular: string;
  resolucao: string;
  enunciado: string;
  numeroQuestao: number;
  ano: number;
  alternativas: alternativas[];
  disponivel: boolean;
}
@injectable()
class CreateQuestionService {
  constructor(
    @inject('QuestionsRepository')
    private questionsRepository: IQuestionsRepository,
  ) {}

  public async execute({
    materia,
    vestibular,
    resolucao,
    enunciado,
    numeroQuestao,
    ano,
    alternativas,
    disponivel,
  }: IRequest): Promise<Question> {
    const questions = await this.questionsRepository.create({
      materia,
      vestibular,
      resolucao,
      enunciado,
      numeroQuestao,
      ano,
      alternativas,
      disponivel,
    });

    return questions;
  }
}

export default CreateQuestionService;
