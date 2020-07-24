import { Router } from 'express';

import QuestionsController from '@modules/questions/infra/http/controllers/QuestionController';
import FilterQuestionsController from '@modules/questions/infra/http/controllers/FilterQuestionsController';

const questionsRouter = Router();
const questionsController = new QuestionsController();
const filterQuestionsController = new FilterQuestionsController();

questionsRouter.get('/', questionsController.index);

questionsRouter.post('/', questionsController.create);

questionsRouter.get('/filter', filterQuestionsController.index);

export default questionsRouter;
