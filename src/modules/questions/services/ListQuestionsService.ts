import { injectable, inject } from 'tsyringe';

import Question from '@modules/questions/infra/typeorm/schemas/Question';
import IQuestionsRepository from '@modules/questions/repositories/IQuestionsRepository';

@injectable()
class ListQuestionsService {
  constructor(
    @inject('QuestionsRepository')
    private questionsRepository: IQuestionsRepository,
  ) {}

  public async execute(): Promise<Question[]> {
    const questions = await this.questionsRepository.showAll();

    return questions;
  }
}

export default ListQuestionsService;
