import { injectable, inject } from 'tsyringe';

import Question from '@modules/questions/infra/typeorm/schemas/Question';
import IQuestionsRepository from '@modules/questions/repositories/IQuestionsRepository';

interface IRequest {
  materia: string;
  vestibular: string;
  ano: number;
  disponivel: boolean;
}

@injectable()
class FilterQuestionsService {
  constructor(
    @inject('QuestionsRepository')
    private questionsRepository: IQuestionsRepository,
  ) {}

  public async execute({
    materia,
    vestibular,
    ano,
    disponivel,
  }: IRequest): Promise<Question[] | undefined> {
    const questions = await this.questionsRepository.filter({
      materia,
      vestibular,
      ano,
      disponivel,
    });

    return questions;
  }
}

export default FilterQuestionsService;
