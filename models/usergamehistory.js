'use strict';
const { UserGame } = require('../models/usergame');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserGameHistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.UserGame);
    }
  }
  UserGameHistory.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey:true
    },
    user_game_id:{
      type: DataTypes.INTEGER,
      references: {
        model: UserGame, 
        key: 'id'
      }
    },
    is_login: DataTypes.BOOLEAN,
    activity_description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'UserGameHistory',
  });
  return UserGameHistory;
};
