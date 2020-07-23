import { getMongoRepository, MongoRepository } from 'typeorm';

import IQuestionRepository from '@modules/questions/repositories/IQuestionsRepository';
import ICreateQuestionDTO from '@modules/questions/dtos/ICreateQuestionDTO';
import Question from '@modules/questions/infra/typeorm/schemas/Question';

class QuestionsRepository implements IQuestionRepository {
  private ormRepository: MongoRepository<Question>;

  constructor() {
    this.ormRepository = getMongoRepository(Question, 'default');
  }

  public async create({
    materia,
    vestibular,
    resolucao,
    enunciado,
    numeroQuestao,
    ano,
    alternativas,
    disponivel,
  }: ICreateQuestionDTO): Promise<Question> {
    const question = this.ormRepository.create({
      materia,
      vestibular,
      resolucao,
      enunciado,
      numeroQuestao,
      ano,
      alternativas,
      disponivel,
    });

    await this.ormRepository.save(question);

    return question;
  }
}

export default QuestionsRepository;
