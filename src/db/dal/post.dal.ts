import { isEmpty } from 'lodash';
import { Model, Op, WhereOptions } from 'sequelize';
import { Filters } from '../../interfaces/filters.interface';
import { PostInput, PostOutput } from '../../interfaces/post.interface';
import PostModel from '../models/post.model';

export class PostDal {
  private getAllOptions = <
    T extends Model & { deletedAt?: Date },
    F extends Filters
  >(
    filters?: F
  ): WhereOptions<T> => {
    if (filters?.isDeleted) {
      return {
        deletedAt: { [Op.not]: undefined },
      };
    }

    return {};
  };

  async create(payload: PostInput): Promise<PostOutput> {
    return await PostModel.create(payload);
  }

  async update(id: number, payload: Partial<PostInput>): Promise<PostOutput> {
    const post = await PostModel.findByPk(id);

    if (!post) {
      throw new Error('not found');
    }

    return await (payload as PostModel).update(payload);
  }

  async getById(id: number): Promise<PostOutput> {
    const post = await PostModel.findByPk(id);

    if (!post) {
      throw new Error('not found');
    }

    return post;
  }

  async deleteById(id: number): Promise<boolean> {
    const deletedPostCount = await PostModel.destroy({
      where: { id },
    });

    return !!deletedPostCount;
  }

  async getAll(filters?: Filters): Promise<PostOutput[]> {
    return PostModel.findAll({
      where: {
        ...this.getAllOptions(filters),
      },
      ...((filters?.isDeleted || filters?.includeDeleted) && {
        paranoid: true,
      }),
    });
  }

  async checkSlugExists(slug: string): Promise<boolean> {
    const ingredientWithSlug = await PostModel.findOne({
      where: {
        slug,
      },
    });

    return !isEmpty(ingredientWithSlug);
  }
}
