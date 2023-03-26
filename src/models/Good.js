'use strict';

const { db } = require('../utils/db');
const { DataTypes } = require('sequelize');

const Good = db.define('Good', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  photo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'goods',
  createdAt: false,
  updatedAt: false,
});

module.exports = { Good };
