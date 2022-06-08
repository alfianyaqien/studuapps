const express = require("express");
const { home, register, login, logout, getUserById, updateUser } = require("../controllers/users");
const { createCalculation, getLogCalculations, deleteLogCalculations } = require("../controllers/calculation");
const { getArticles, getArticleById } = require("../controllers/articles");
const { verifyToken } = require("../middleware/verifyToken");
const { refreshToken } = require("../controllers/refreshToken");

const router = express.Router();

router.get("/home", verifyToken, home);
router.post("/signup", register);
router.post("/login", login);
router.get("/profile/:id", getUserById);
router.get("/token", refreshToken);
router.put("/profile/:id", updateUser);
router.post("/calculations", createCalculation);
router.get("/calculations", getLogCalculations);
router.delete("/calculations/:id", deleteLogCalculations);
router.get("/articles", getArticles);
router.get("/articles/:id", getArticleById);
router.delete("/logout", logout);

module.exports = router;
