import { Post, PostOutput } from '../../interfaces/post.interface';

export const postMapper = {
  toPost: (ingredient: PostOutput): Post => {
    return {
      id: ingredient.id,
      name: ingredient.name,
      slug: ingredient.slug,
      createdAt: ingredient.createdAt,
      updatedAt: ingredient.updatedAt,
      deletedAt: ingredient.deletedAt,
    };
  },
};
