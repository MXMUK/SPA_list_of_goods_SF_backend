'use strict';

const goodsService = require('../services/goods');

const getAll = async(req, res) => {
  const goods = await goodsService.getAll();

  res.send(goods);
};

const getOne = async(req, res) => {
  const { goodId } = req.params;

  const foundGood = await goodsService.getById(goodId);

  if (!foundGood) {
    res.sendStatus(404);

    return;
  };

  res.send(foundGood);
};

const add = async(req, res) => {
  const { name } = req.body;

  if (!name) {
    res.sendStatus(400);

    return;
  };

  const newGood = await goodsService.addOne(name);

  res.statusCode = 201;
  res.send(newGood);
};

const remove = (req, res) => {
  const { goodId } = req.params;

  goodsService.deleteOne(goodId);
  res.sendStatus(204);
};

const update = async(req, res) => {
  const { goodId } = req.params;
  const { name } = req.body;

  // eslint-disable-next-line no-console
  console.log(goodId);

  if (!goodId || !name) {
    res.sendStatus(400);

    return;
  };

  const foundGood = await goodsService.getById(goodId);

  if (!foundGood) {
    res.sendStatus(404);

    return;
  };

  const updatedGood = await goodsService.updateOne(goodId, name);

  res.send(updatedGood);
};

module.exports = {
  getAll,
  getOne,
  add,
  remove,
  update,
};
