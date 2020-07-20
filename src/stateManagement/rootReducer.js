import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initState = {
    isAuth : false,
    tickets: []
}


const persistConfig = {
    key: "root",
    storage,
    whitelist: ['rootReducer']
}

const rootReducer = (state=initState, action) => {

    if(action.type === 'LOGGED_IN'){
        return {
            ...state,
            isAuth: action.isAuth
        }
    }

    if(action.type === 'GET_USER_TICKETS'){
        return {
            ...state,
            tickets: action.tickets
        }
    }

    if(action.type === 'UPDATE_STATE'){
        return {
            ...state,
            tickets: [ state.tickets || undefined ? [...state.tickets] : [[] ,action.ticket], action.ticket],
        }
    }

};

export default persistReducer(persistConfig ,rootReducer);


