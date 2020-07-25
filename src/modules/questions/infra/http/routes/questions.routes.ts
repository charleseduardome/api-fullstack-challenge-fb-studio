import { Router } from 'express';

import QuestionsController from '@modules/questions/infra/http/controllers/QuestionController';
import FilterQuestionsController from '@modules/questions/infra/http/controllers/FilterQuestionsController';
import AvailabilityQuestionController from '@modules/questions/infra/http/controllers/AvailabilityQuestionController';

const questionsRouter = Router();
const questionsController = new QuestionsController();
const filterQuestionsController = new FilterQuestionsController();
const availabilityQuestionController = new AvailabilityQuestionController();

questionsRouter.get('/', questionsController.index);
questionsRouter.post('/', questionsController.create);
questionsRouter.put('/:id', questionsController.update);

questionsRouter.get('/filter', filterQuestionsController.index);

questionsRouter.patch(
  '/:id/availability',
  availabilityQuestionController.update,
);

export default questionsRouter;
