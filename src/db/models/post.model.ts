import { DataTypes, Model } from 'sequelize';
import {
  Post as PostAttributes,
  PostInput,
} from '../../interfaces/post.interface';
import sequelizeConnection from '../config/db.config';

class Post extends Model<PostAttributes, PostInput> implements PostAttributes {
  id!: number;
  name!: string;
  slug!: string;

  // timestamps!
  readonly createdAt!: Date;
  readonly updatedAt!: Date;
  readonly deletedAt!: Date;
}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true,
  }
);

export default Post;
