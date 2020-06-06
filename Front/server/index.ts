import next from 'next'
import express from 'express';

const GRPCClient = require('node-grpc-client');


const routes = require('./routes')
const app = next({dev: process.env.NODE_ENV !== 'production'});
const handler = routes.getRequestHandler(app);

const PROTO_PATH = __dirname + '/proto/userService.proto';

// With express
app.prepare().then(() => {
    const myClient = new GRPCClient(PROTO_PATH, 'proto', 'UserService', 'localhost:4040');

    let server = express();
    server.use(express.json());

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
            return res.json(resp);
        });
    });
    server.use(handler).listen(3000)
});

