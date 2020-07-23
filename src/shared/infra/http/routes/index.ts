import { Router } from 'express';

import questionsRouter from '@modules/questions/infra/http/routes/questions.routes';

const routes = Router();

routes.get('/', (request, response) =>
  response.json({
    message: 'Hello! API Challenge - FullStack Engineer ',
  }),
);

routes.use('/questions', questionsRouter);

export default routes;
