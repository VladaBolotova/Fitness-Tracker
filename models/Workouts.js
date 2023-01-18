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
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reps: {
        type: DataTypes.INTEGER,
        allowNull: true,
   
      
      },
      weight: {
        type: DataTypes.INTEGER,
        allowNull: true,

     
      },
      sets: {
        type: DataTypes.INTEGER,
        allowNull: true,
       
      
      },
      calories: {
        type: DataTypes.INTEGER,
        allowNull: false,
      
      
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