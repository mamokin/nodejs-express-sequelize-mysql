import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import routes from './api/routers';
import dbInit from './db/init';
import User from './db/models/user';

dbInit();

// set port, listen for requests
const port = process.env.PORT || 8080;
const jwtToken = process.env.JWT_TOKEN;
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

app.get(
  '/protected-test',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers['authorization']?.split(' ')[1] || '';

      console.log('token', token);
      if (!token) {
        return res.status(403).send('A token is required for authentication');
      }

      const decodedToken = verify(token, jwtToken || 'dumb_secret');

      // @ts-expect-error
      req.user = decodedToken;

      return next();
    } catch (err) {
      console.error(err);
      return res.status(401).json({ msg: 'Couldnt Authenticate' });
    }
  },
  async (req: Request, res: Response) => {
    const user = await User.findOne({
      where: {
        // @ts-expect-error
        id: req.user.id,
      },
      attributes: { exclude: ['password'] },
    });

    if (user === null) {
      return res.status(404).json({ msg: 'User not found' });
    }

    return res.status(200).json(user);
  }
);

try {
  app.listen(port, () => {
    console.log(`The application is listening on port ${port}!`);
  });
} catch (error) {
  console.error(error);
}
