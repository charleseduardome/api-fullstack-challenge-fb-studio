import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppError';

import Question from '@modules/questions/infra/typeorm/schemas/Question';
import IQuestionsRepository from '@modules/questions/repositories/IQuestionsRepository';

interface IRequest {
  id: string;
  disponivel: boolean;
}
@injectable()
class AvailabilityQuestionService {
  constructor(
    @inject('QuestionsRepository')
    private questionsRepository: IQuestionsRepository,
  ) {}

  public async execute({ id, disponivel }: IRequest): Promise<Question> {
    const question = await this.questionsRepository.findById(id);

    if (!question) {
      throw new AppError('Question not fould');
    }

    question.disponivel = disponivel;

    return this.questionsRepository.save(question);
  }
}

export default AvailabilityQuestionService;
