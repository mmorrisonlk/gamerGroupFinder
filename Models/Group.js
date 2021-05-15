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
            type: DataTypes.STRING,
            allowNull: false,
        },
        content:{
            allowNull: false,
            type: DataTypes.STRING,
        },
        gamerTag:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        user_id:{
            type: DataTypes.INTEGER,
            references: {
                model: 'User',
                key: 'id',
              }
        },
        timeFrom:{
            type: DataTypes.STRING,
            allowNull:true

        },
        timeTo:{
            type: DataTypes.STRING,
            allowNull:true
        }

    },
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'User',
    }
)


module.exports = Group;