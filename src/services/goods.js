'use strict';

const { Good } = require('../models/Good');

function getAll() {
  return Good.findAll();
}

function getById(GoodId) {
  return Good.findByPk(GoodId);
}

function addOne(name) {
  return Good.create({
    name,
  });
}

function deleteOne(id) {
  return Good.destroy({
    where: { id },
  });
}

function updateOne(id, name) {
  return Good.update({ name }, {
    where: { id },
  });
}

module.exports = {
  getAll,
  getById,
  addOne,
  deleteOne,
  updateOne,
};
