import { uuid } from 'uuidv4';

import Question from '@modules/questions/infra/typeorm/schemas/Question';
import IQuestionsRepository from '@modules/questions/repositories/IQuestionsRepository';
import ICreateQuestionDTO from '@modules/questions/dtos/ICreateQuestionDTO';
import IFilterQuestionsDTO from '@modules/questions/dtos/IFilterQuestions';

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

  public async showAll(): Promise<Question[]> {
    return this.questions;
  }

  public async filter({
    materia,
    vestibular,
    ano,
    disponivel,
  }: IFilterQuestionsDTO): Promise<Question[] | undefined> {
    const questions = this.questions.filter(
      question =>
        question.materia === materia &&
        question.vestibular === vestibular &&
        question.ano === ano &&
        question.disponivel === disponivel,
    );
    return questions;
  }
}

export default QuestionsRepository;
