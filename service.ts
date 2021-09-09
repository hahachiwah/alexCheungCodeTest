// import { Client } from "pg";
// import Knex from "knex";
// import { IMemo } from "./models";

export class dataService {
    private arrayOfContracts = ['BTC', 'ETH']
    constructor(
    ) { }

    filterDataPageA = async (data: any) => {
        try {
            let SPOT = data.result.filter((xx: any) => xx.type === 'spot' && this.arrayOfContracts.includes(xx.underlying));
            
            SPOT = SPOT.map((xx: any) => {

                xx.underlying = xx.underlying + 'USDT'
                return xx
            });
            
            return SPOT
        } catch (e) {
            console.log(e)

        }
    }

    filterDataPageB = async (data: any) => {
        try {
            let future = data.result.filter((xx: any) => xx.type === 'future' && this.arrayOfContracts.includes(xx.underlying));

            future = future.map((xx: any) => {

                xx.underlying = xx.underlying + '-PERP'
                return xx
            });
            return future
        } catch (e) {
            console.log(e)

        }
    }
}
