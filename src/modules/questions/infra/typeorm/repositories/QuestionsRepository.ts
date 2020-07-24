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

  public async showAll(): Promise<Question[]> {
    const questions = await this.ormRepository.find({
      skip: 0,
      take: 10,
    });

    return questions;
  }

  public async filter({
    materia,
    vestibular,
    ano,
    disponivel,
  }: IFilterQuestionsDTO): Promise<Question[] | undefined> {
    const questions = await this.ormRepository.find({
      materia,
      vestibular,
      ano,
      disponivel,
    });

    return questions;
  }
}

export default QuestionsRepository;
