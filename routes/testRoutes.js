const express = require('express')
const { testController } = require('../controller/testController')

//route obj
const router = express.Router()

//routes
router.get('/',testController);

//export
module.exports = router;