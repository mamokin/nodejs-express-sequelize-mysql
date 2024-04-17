import { Optional } from 'sequelize';
import { TimeStamps } from './common.interface';

export interface User extends TimeStamps {
  email: string;
  firstName: string;
  id: number;
  lastName: string;
  password: string;
  userName: string;
}

export interface UserInput extends Optional<User, 'id'> {}
export interface UserOutput extends Required<User> {}
