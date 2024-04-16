import { Optional } from 'sequelize';

export interface Post {
  id: number;
  name: string;
  slug: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface PostInput extends Optional<Post, 'id' | 'slug'> {}
export interface PostOutput extends Required<Post> {}
