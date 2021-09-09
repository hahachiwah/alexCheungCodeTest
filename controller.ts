import SocketIO from "socket.io";
import { dataService } from "./service";

import fetch from 'node-fetch'


export class dataController {
    private data: any;
    constructor(private dataServices: dataService,
        private io: SocketIO.Server

    ) {
        this.data = this.fetchData();

        io.on('connection', (socket) => {
            console.log('connected')
            this.data.then((xx: any) => {
                socket.emit(
                    'ftx', xx
                )
            })
        })

        this.onData(this.data)

    }

    firstGetData = () => {
        console.log('fetched', this.data)
        let data = this.data
        let xx = data
        return xx

    }
    fetchData = async () => {
        let data;

        try {
            data = await fetch(`https://ftx.com/api/markets`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },

            })
            data = await data.json()
            let pageA = await this.dataServices.filterDataPageA(data)
            let pageB = await this.dataServices.filterDataPageB(data)
            return { pageA, pageB }
        } catch (e) {
            console.error(e);
        }
    };


    onData = (data: any) => {
        this.io.emit('ftx', data)
        setTimeout(async () => {
            data = await this.fetchData()
            this.onData(data)
        }, 10 * 1000)
    }


}