const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const http = require("http");
const router = require("./routes/router");
const hostname = require("./utils/host");

const port = process.env.PORT !== "production" ? 3000 : 8080;
dotenv.config();
const app = express();

app.use(cors());

app.use(cookieParser());

app.use(express.json());

app.use("/studu", router);

const httpServer = http.createServer(app);
httpServer.listen(port, () => console.log(`Server running in ${hostname} on port ${port}`));
