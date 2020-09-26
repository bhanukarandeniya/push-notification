const express = require('express');
const router = express.Router();
const districtRouter = require('./distric-route');
const { testApp } = require('../controller/test-controller');


router.use('/districts', districtRouter);

//Application Server Test
router.get('/test', testApp);

module.exports = router;