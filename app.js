const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const db = require("./utils/database");
const router = require("./routes/router");

const port = process.env.PORT || 3000;
dotenv.config();
const app = express();

app.use(cors());

app.use(cookieParser());

app.use(express.json());

app.use("/studu", router);

app.listen(port, () => console.log(`Server running at port ${port}`));
