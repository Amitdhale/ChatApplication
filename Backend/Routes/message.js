const express = require('express');
const { sendMessage, reciveMessage } = require('../Controllers/Message');
const LoggedInUser = require('../Middleware/LoggedInUser');


const router = express.Router();

router.post("/message",LoggedInUser,sendMessage);
router.get("/converstation/:id",LoggedInUser,reciveMessage);

module.exports = router;