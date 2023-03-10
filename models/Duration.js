const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');
const sequelize = require('../config/connection');

class Duration extends Model {
  
}

Duration.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
        primaryKey: true,
     
      },
    workout_time: {
        type: DataTypes.FLOAT,
        allowNull: false,
        primaryKey: true,
       
      },
      workout_id: {
        type: DataTypes.INTEGER,
        references: { 
          model: 'workout',
          key: 'id',
        }
      }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'duration',
  }
);

module.exports = Duration;