const { Model, DataTypes, STRING, INTEGER } = require('sequelize');
const sequelize = require('../config/connection');
class Group extends Model {}

Group.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
        title:{
            type: STRING,
            allowNull: false,
        },
        content:{
            allowNull: false,
            type:STRING,
        },
        gamerTag:{
            type: STRING,
            allowNull: true,
        },
        user_id:{
            type: INTEGER,
            references: {
                model: 'user',
                key: 'id',
              }
        },
        timeFrom:{
            type:STRING,
            allowNull:true

        },
        timeTo:{
            type:STRING,
            allowNull:true
        }

    }
)


module.exports = Group;