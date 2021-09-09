import { Data, DataAction } from "./action";

export interface DataState {
    pageA: Data[],
    pageB: Data[]


}


const initialState: DataState = {
    pageA: [{
        "name": null,
        "enabled": null,
        "postOnly": null,
        "priceIncrement": null,
        "sizeIncrement": null,
        "minProvideSize": null,
        "last": null,
        "bid": null,
        "ask": null,
        "price": null,
        "type": null,
        "baseCurrency": null,
        "quoteCurrency": null,
        "underlying": null,
        "restricted": null,
        "highLeverageFeeExempt": null,
        "change1h": null,
        "change24h": null,
        "changeBod": null,
        "quoteVolume24h": null,
        "volumeUsd24h": null,
    }],
    pageB: [{
        "name": null,
        "enabled": null,
        "postOnly": null,
        "priceIncrement": null,
        "sizeIncrement": null,
        "minProvideSize": null,
        "last": null,
        "bid": null,
        "ask": null,
        "price": null,
        "type": null,
        "baseCurrency": null,
        "quoteCurrency": null,
        "underlying": null,
        "restricted": null,
        "highLeverageFeeExempt": null,
        "change1h": null,
        "change24h": null,
        "changeBod": null,
        "quoteVolume24h": null,
        "volumeUsd24h": null,
    }]
}


export function dataReducer(state: DataState = initialState, action: DataAction): DataState {
    switch (action.type) {
        case '@@Data/spot':
            return {
                ...state,
                pageA: action.data

            }

        case '@@Data/future':
            return {
                ...state,
                pageB: action.data

            }

      
        default:
            return state;
    }
}



