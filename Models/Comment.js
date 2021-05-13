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
            type:STRING,
            allowNull:false
        },
        user_id:{
            type:INTEGER,
            references: {
                model: 'User',
                key: 'id',
              }

        },
        group_id:{
            type:INTEGER,
            references: {
                model: 'Group',
                key: 'id',
              }
        }
    }
)