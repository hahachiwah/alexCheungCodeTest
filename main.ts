import express from 'express';
import bodyParser from 'body-parser';
import http from "http";
import { Server } from "socket.io";
import dotenv from 'dotenv';
import SocketIO from 'socket.io'
import cors from 'cors'
dotenv.config();

const app = express();
app.use(cors())
const server =http.createServer(app);
export const io = new SocketIO.Server(server, {
    cors: {
      origin: '*',
    },
  })

app.use(express.json() as any)
app.use(express.urlencoded({ extended: true }) as any)


import {dataService} from './service';
import {dataController} from './controller';
export const dataServices = new dataService();
export const dataControllers = new dataController(dataServices,io);

import {routes} from './routes';
const API_VERSION = process.env.API_VERSION || '/api/v1';
console.log(API_VERSION)
app.use(API_VERSION, routes);












const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    console.log(`[info] listening to Port: ${PORT}`);
});
