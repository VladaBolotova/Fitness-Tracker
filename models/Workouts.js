const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Workout extends Model {
  
}

Workout.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    workout_time: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    reps: {
        type: DataTypes.INTEGER,
   
      
      },
      weight: {
        type: DataTypes.INTEGER,

     
      },
      sets: {
        type: DataTypes.INTEGER,
       
      
      },
      calories: {
        type: DataTypes.INTEGER,
      
      
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: { 
          model: 'user',
          key: 'id',
        }
      }
      
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'workout',
  }
);

module.exports = Workout;