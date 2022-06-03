const express = require("express");
const { home, register, login, logout } = require("../controllers/users");
const { verifyToken } = require("../middleware/verifyToken");
const { refreshToken } = require("../controllers/refreshToken");

const router = express.Router();

router.get('/home', verifyToken, home);
router.post('/signup', register);
router.post('/login', login);
router.get('/token', refreshToken);
router.delete('/logout', logout);

module.exports = router;
