import next from 'next'
import express from 'express';
import * as path from "path";
import * as fs from "fs";

const multer = require('multer');
const sharp = require('sharp')

const GRPCClient = require('node-grpc-client');

const routes = require('./routes');
const app = next({dev: process.env.NODE_ENV !== 'production'});
const handler = routes.getRequestHandler(app);
const cookieParser = require('cookie-parser');

const PROTO_PATH = __dirname + '/proto/userService.proto';
const PROTO_ARTICLES_PATH = __dirname + '/proto/articleService.proto';


let storage = multer.diskStorage({
    destination: function (_, __, callback) {
        callback(null, './public/images');
    },
    filename: function (req, file, callback) {
        const ext = path.extname(file.originalname);
        const name = file.fieldname + '-' + Date.now() + ext;
        req.filename = name;
        callback(null, name);
    },
});
let upload = multer({storage: storage}).single('file');


// With express
app.prepare().then(() => {
    const myClient = new GRPCClient(PROTO_PATH, 'proto', 'UserService', 'localhost:4040');
    const myClientArticles = new GRPCClient(PROTO_ARTICLES_PATH, 'proto', 'ArticleService', 'localhost:4040');

    let server = express();
    server.use(express.json());
    server.use(cookieParser());
    server.use(express.static(path.join(__dirname, 'public')));

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

    server.get('/api/articles/all', (req, res) => {
        // @ts-ignore
        if (!req.cookies.user) {
            return res.status(500).json({error: "El usuario no esta logeado"})
        }
        myClientArticles.runService('GetAllUsers', {
            // @ts-ignore
            user: req.cookies.user,
            offset: "0",
            limit: "100",
        }, (e, resp) => {
            // @ts-ignore
            if (e) {
                return res.status(500).json({error: e.toString()})
            }
            return res.json(resp);
        });
    });

    server.post('/api/articles/create', upload, async (req, res) => {
        // @ts-ignore
        const imageName = req.filename;
        let body = req.body;
        // @ts-ignore
        const {filename: image} = req.file;
        // @ts-ignore
        await sharp(req.file.path)
            .resize(500)
            .png({quality: 50})
            .toFile(
                // @ts-ignore
                path.resolve(req.file.destination, 'resized', image)
            );
        // @ts-ignore
        fs.unlinkSync(req.file.path);
        myClientArticles.runService('Create', {
            title: body.title,
            description: body.description,
            fkUserId: Number(req.cookies.user),
            fkCategoryId: Number(body.category),
            price: Number(body.price),
            offer: Number(body.offer),
            // @ts-ignore
            fileNames: [imageName]
        }, (e, resp) => {
            // @ts-ignore
            if (e) {
                return res.status(500).json({error: e.toString()})
            }
            return res.json(resp);
        });
    });

    server.use(handler).listen(3000)
});

