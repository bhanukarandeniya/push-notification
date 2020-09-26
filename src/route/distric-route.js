const express = require('express');
const router = express.Router();
const { findAll, create, update } = require('../controller/distric-controller');

router.get('/', findAll);

router.post('/', create);

router.put('/', paramIdValidator, update);

module.exports = router;