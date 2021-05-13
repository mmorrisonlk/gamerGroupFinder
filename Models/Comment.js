const { Model, DataTypes, STRING, INTEGER } = require('sequelize');
const sequelize = require('../config/connection');
class Comment extends Model {}

Comment.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        content:{
            type: DataTypes.STRING,
            allowNull:false
        },
        user_id:{
            type: DataTypes.INTEGER,
            references: {
                model: 'User',
                key: 'id',
              }

        },
        group_id:{
            type: DataTypes.INTEGER,
            references: {
                model: 'Group',
                key: 'id',
              }
        }
    },
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
    }
)

module.exports = Comment;