import ICreateQuestionDTO from '../dtos/ICreateQuestionDTO';
import IFilterQuestionsDTO from '../dtos/IFilterQuestions';
import Question from '../infra/typeorm/schemas/Question';

export default interface IQuestionsRepository {
  create(data: ICreateQuestionDTO): Promise<Question>;
  showAll(): Promise<Question[]>;
  filter(data: IFilterQuestionsDTO): Promise<Question[] | undefined>;
  findById(id: string): Promise<Question | undefined>;
  save(question: Question): Promise<Question>;
}
