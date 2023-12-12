const express = require('express')
const router = express.Router()

const userController = require('../controllers/dummy_controller')

router.get('/', userController.get)

module.exports = router