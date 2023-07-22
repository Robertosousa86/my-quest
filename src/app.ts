import express from 'express';
import userRouter from '../src/user/routes/user.routes';
import applicationRouter from '../src/application/routes/application.routes';

const app = express();

app.use(express.json());

app.use(userRouter);
app.use(applicationRouter);

export default app;
