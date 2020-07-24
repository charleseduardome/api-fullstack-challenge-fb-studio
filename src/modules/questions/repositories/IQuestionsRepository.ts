import ICreateQuestionDTO from '../dtos/ICreateQuestionDTO';
import Question from '../infra/typeorm/schemas/Question';

import IFilterQuestionsDTO from '../dtos/IFilterQuestions';

export default interface IQuestionsRepository {
  create(data: ICreateQuestionDTO): Promise<Question>;
  showAll(): Promise<Question[]>;
  filter(data: IFilterQuestionsDTO): Promise<Question[] | undefined>;
}
