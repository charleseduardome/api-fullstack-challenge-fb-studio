import { Router } from 'express';

import QuestionsController from '@modules/questions/infra/http/controllers/QuestionController';

const questionsRouter = Router();
const questionsController = new QuestionsController();

questionsRouter.get('/', questionsController.index);
questionsRouter.post('/', questionsController.create);

export default questionsRouter;
