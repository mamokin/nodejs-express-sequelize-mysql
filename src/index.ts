import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import routes from './api/routers';
import dbInit from './db/init';

dbInit();

const app: Application = express();

app.use(
  (req, res, next) => {
    next();
  },
  cors({
    origin: 'http://localhost:8081',
    maxAge: 84600,
  })
);

// parse request of content-type application/json
app.use(express.json());

// parse request of content-type application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/', routes);

app.get('/test', async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send('Well done! This is the test endpoint.');
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;

try {
  app.listen(PORT, () => {
    console.log(`The application is listening on port ${PORT}!`);
  });
} catch (error) {
  console.error(error);
}
