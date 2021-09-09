import { combineReducers, createStore, compose, applyMiddleware } from "redux";
// import { connectRouter, routerMiddleware, RouterState, RouterAction } from "connected-react-router"
// import { createBrowserHistory } from "history";
import thunk, { ThunkDispatch as OldThunkDispatch } from 'redux-thunk';
import { DataAction } from "./redux/data/action";
import { dataReducer, DataState } from "./redux/data/reducer";
// import { AuthState, authReducer } from "./redux/auth/reducer";
// import { AuthActions } from "./redux/auth/actions";
// import { dataReducer, DataState } from "./redux/data/reducer";
// import { DataActions } from "./redux/data/action";
// import { UserState, userReducer } from "./redux/User/reducer";
// import { UserActions } from "./redux/User/action";





// export const history = createBrowserHistory();

export interface RootState {
    // auth: AuthState,
    // user: UserState,
    // router: RouterState,
    data:DataState,
} 

export type RootActions = DataAction ;
// | UserActions

const reducers = combineReducers<RootState>({
    // auth: authReducer,
    // user: userReducer,
    data:dataReducer,
    // router: connectRouter(history)
})

declare global {
    /* tslint:disable:interface-name */
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any
    }
}

export type ThunkDispatch = OldThunkDispatch<RootState, null, RootActions>

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
export const store = createStore<RootState, RootActions, {}, {}>(
    reducers, composeEnhancers(
        applyMiddleware(thunk),
        // applyMiddleware(routerMiddleware(history))
    )
)


declare global{
    //    tslint:disable:interface-name 
        interface Window{
           __REDUX_DEVTOOLS_EXTENSION__:any
        }
     }
    
// export default createStore(
//     reducers,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//       );

