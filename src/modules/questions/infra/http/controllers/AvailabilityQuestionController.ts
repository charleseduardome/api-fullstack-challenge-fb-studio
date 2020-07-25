import { Request, Response } from 'express';
import { container } from 'tsyringe';

import AvailabilityQuestionService from '@modules/questions/services/AvailabilityQuestionService';

export default class AvailabilityQuestionController {
  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { disponivel } = request.body;

    const updateQuestion = container.resolve(AvailabilityQuestionService);

    const question = await updateQuestion.execute({
      id,
      disponivel,
    });

    return response.json(question);
  }
}
