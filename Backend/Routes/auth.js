const express = require('express');
const { signup, login, getUser, getPeople } = require('../Controllers/User');
const LoggedInUser = require('../Middleware/LoggedInUser');

const router = express.Router();

router.post("/signup",signup);
router.post("/login",login);
router.get("/user",LoggedInUser,getUser);
router.get("/people",LoggedInUser,getPeople);

module.exports = router;