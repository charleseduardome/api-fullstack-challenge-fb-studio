import { getMongoRepository, MongoRepository } from 'typeorm';

import IQuestionRepository from '@modules/questions/repositories/IQuestionsRepository';
import ICreateQuestionDTO from '@modules/questions/dtos/ICreateQuestionDTO';
import Question from '@modules/questions/infra/typeorm/schemas/Question';
import IFilterQuestionsDTO from '@modules/questions/dtos/IFilterQuestions';

class QuestionsRepository implements IQuestionRepository {
  private ormRepository: MongoRepository<Question>;

  constructor() {
    this.ormRepository = getMongoRepository(Question, 'default');
  }

  public async create(dataQuestion: ICreateQuestionDTO): Promise<Question> {
    const question = this.ormRepository.create(dataQuestion);

    await this.ormRepository.save(question);

    return question;
  }

  public async showAll(): Promise<Question[]> {
    const questions = await this.ormRepository.find({
      skip: 0,
      take: 10,
    });

    return questions;
  }

  public async filter(
    dataQuestion: IFilterQuestionsDTO,
  ): Promise<Question[] | undefined> {
    const questions = await this.ormRepository.find(dataQuestion);

    return questions;
  }
}

export default QuestionsRepository;
