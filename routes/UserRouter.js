const express = require('express');

const router = express.Router();

const UserController = require('../app/Controllers/UserController');

router.get('/', UserController.Index);

module.exports = router;