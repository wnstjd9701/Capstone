const express = require('express');
const router = express.Router();

router.use('/api/user', require('../src/app/user/userRoute'));
// router.use('/api/product', require('./product'));

module.exports = router;
