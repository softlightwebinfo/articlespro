import next from 'next'
import express from 'express';
const routes = require('../routes')

const app = next({dev: process.env.NODE_ENV !== 'production'})
const handler = routes.getRequestHandler(app);

// With express
app.prepare().then(() => {
    express().use(handler).listen(3000)
});

