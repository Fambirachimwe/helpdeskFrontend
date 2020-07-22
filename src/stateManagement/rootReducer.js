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
        console.log(state.tickets)
        if(state.tickets === undefined){
            return {
                ...state,
                tickets: [action.ticket]
            }
        }
        else {
            return {
                ...state,
                tickets: [...state.tickets, action.ticket]
            }
        }
    }

};

export default persistReducer(persistConfig ,rootReducer);


