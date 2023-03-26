'use strict';

const express = require('express');
const goodController = require('../controllers/goods');

const router = express.Router();

router.get('/', goodController.getAll);
router.get('/:goodId', goodController.getOne);

router.post('/', goodController.add);

router.delete('/:goodId', goodController.remove);
router.patch('/:goodId', goodController.update);

module.exports = {
  router,
};
