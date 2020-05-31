// @ts-ignore
const routes = module.exports = require('next-routes')();
routes
    .add("index", "/")
    .add("register", "/register")
    .add("login", "/login");
