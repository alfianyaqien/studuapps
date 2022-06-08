const domain = process.env.DOMAIN || "<studu-vm>";
const hostname = process.env.NODE_ENV !== "production" ? "localhost" : domain;

module.exports = hostname;
