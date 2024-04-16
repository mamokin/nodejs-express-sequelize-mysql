import { kebabCase } from 'lodash';
import { PostDal } from '../../db/dal/post.dal';
import { Filters } from '../interfaces/filters.interface';
import { PostInput, PostOutput } from '../interfaces/post.interface';

const dal = new PostDal();

export class PostService {
  async create(payload: PostInput): Promise<PostOutput> {
    let slug = kebabCase(payload.name);
    const slugExists = await dal.checkSlugExists(slug);

    payload.slug = slugExists
      ? `${slug}-${Math.floor(Math.random() * 1000)}`
      : slug;

    return dal.create(payload);
  }

  async update(id: number, payload: Partial<PostInput>) {
    if (payload.name) {
      let slug = kebabCase(payload.name);
      const slugExists = await dal.checkSlugExists(slug);

      payload.slug = slugExists
        ? `${slug}-${Math.floor(Math.random() * 1000)}`
        : slug;
    }

    return dal.update(id, payload);
  }

  async getById(id: number): Promise<PostOutput> {
    return dal.getById(id);
  }

  async deleteById(id: number): Promise<boolean> {
    return dal.deleteById(id);
  }

  async getAll(filters: Filters): Promise<PostOutput[]> {
    return dal.getAll(filters);
  }
}
