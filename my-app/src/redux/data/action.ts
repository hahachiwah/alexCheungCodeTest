// import { ThunkDispatch, RootState } from "../../store"
// import { map } from 'lodash'
// // import { job } from "cron"
// import { count } from "console"
// import { loginFailed } from "../auth/actions";
// import { History } from "history"
// import { useHistory } from "react-router";
import { RootState, ThunkDispatch } from "../../store"
export interface Data {
    name: string|null,
    enabled: boolean|null,
    postOnly: boolean|null,
    priceIncrement: number|null,
    sizeIncrement: number|null,
    minProvideSize: number|null,
    last: number|null,
    bid: number|null,
    ask: number|null,
    price: number|null,
    type: string|null,
    baseCurrency: string|null,
    quoteCurrency: string|null,
    underlying: any|null,
    restricted: boolean|null,
    highLeverageFeeExempt: boolean|null,
    change1h: number|null,
    change24h: number|null,
    changeBod: number|null,
    quoteVolume24h: number|null,
    volumeUsd24h:number|null,
}
// 'job.id', 'title', 'company', 'joburl', 'area', 'jobcontent', 'created_at', 'posted_on'
export interface favoritedJob {
    job_id: number | null
}



export function pageADataFetch(data: any) {
    return {
        type: '@@Data/spot' as '@@Data/spot',
        data
    }
}

export function pageBDataFetch(data: any) {
    return {
        type: '@@Data/future' as '@@Data/future',
        data
    }
}



export type DataAction = ReturnType<typeof pageADataFetch | typeof pageBDataFetch >





