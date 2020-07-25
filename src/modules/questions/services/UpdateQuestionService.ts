import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppError';

import Question from '@modules/questions/infra/typeorm/schemas/Question';
import IQuestionsRepository from '@modules/questions/repositories/IQuestionsRepository';

interface IRequest {
  id: string;
  enunciado: string;
  resolucao: string;
}
@injectable()
class UpdateQuestionService {
  constructor(
    @inject('QuestionsRepository')
    private questionsRepository: IQuestionsRepository,
  ) {}

  public async execute({
    id,
    enunciado,
    resolucao,
  }: IRequest): Promise<Question> {
    const question = await this.questionsRepository.findById(id);

    if (!question) {
      throw new AppError('Question not fould');
    }

    question.enunciado = enunciado;
    question.resolucao = resolucao;

    return this.questionsRepository.save(question);
  }
}

export default UpdateQuestionService;
