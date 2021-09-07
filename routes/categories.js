const express = require('express');
const router = express.Router();
const UserController = require("../controllers/categories");

/* GET categories listing. */
router.get('/', UserController.getCategories);

module.exports = router;
