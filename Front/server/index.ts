import next from 'next'
import express from 'express';

const GRPCClient = require('node-grpc-client');

const routes = require('./routes');
const app = next({dev: process.env.NODE_ENV !== 'production'});
const handler = routes.getRequestHandler(app);
const cookieParser = require('cookie-parser');

const PROTO_PATH = __dirname + '/proto/userService.proto';

// With express
app.prepare().then(() => {
    const myClient = new GRPCClient(PROTO_PATH, 'proto', 'UserService', 'localhost:4040');

    let server = express();
    server.use(express.json());
    server.use(cookieParser());

    server.post('/api/user/register', (req, res) => {
        let body = req.body.data;
        myClient.runService('Create', {
            email: body.email,
            password: body.password,
            active: true,
            name: body.name,
            phone: [body.phone],
        }, (e, resp) => {
            if (e) {
                return res.status(500).json({error: e.toString(), data: body})
            }
            res.cookie("token", resp.token);
            res.cookie("user", resp.user.id);
            return res.json(resp);
        });
    });
    server.post('/api/user/login', (req, res) => {
        let body = req.body.data;
        myClient.runService('Login', {
            email: body.email,
            password: body.password,
        }, (e, resp) => {
            // @ts-ignore
            if (e) {
                return res.status(500).json({error: e.toString(), data: body})
            }
            res.cookie("token", resp.token);
            res.cookie("user", resp.user.id);
            return res.json(resp);
        });
    });
    server.post('/api/user/initial', (req, res) => {
        // @ts-ignore
        if (!req.cookies.user) {
            return res.status(500).json({error: "El usuario no esta logeado"})
        }
        myClient.runService('Start', {
            // @ts-ignore
            id: req.cookies.user,
        }, (e, resp) => {
            // @ts-ignore
            if (e) {
                return res.status(500).json({error: e.toString()})
            }
            //res.setHeader('Set-Cookie', serialize('token', resp.token, { path: '/' }));
            //res.setHeader('Set-Cookie', serialize('user', resp.user.id, { path: '/' }));

            res.cookie("token", resp.token);
            res.cookie("user", resp.user.id);
            return res.json(resp);
        });
    });
    server.use(handler).listen(3000)
});

