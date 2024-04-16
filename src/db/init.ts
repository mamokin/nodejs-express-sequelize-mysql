import PostModel from './models/post.model';

const isDev = process.env.NODE_ENV === 'development';

const dbInit = () => {
  PostModel.sync({ alter: isDev });
};
export default dbInit;
