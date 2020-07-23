import { uuid } from 'uuidv4';

import Question from '@modules/questions/infra/typeorm/schemas/Question';
import IQuestionsRepository from '@modules/questions/repositories/IQuestionsRepository';
import ICreateQuestionDTO from '@modules/questions/dtos/ICreateQuestionDTO';

class QuestionsRepository implements IQuestionsRepository {
  private questions: Question[] = [];

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
    const question = new Question();

    Object.assign(question, {
      id: uuid(),
      materia,
      vestibular,
      resolucao,
      enunciado,
      numeroQuestao,
      ano,
      alternativas,
      disponivel,
    });

    this.questions.push(question);

    return question;
  }
}

export default QuestionsRepository;
