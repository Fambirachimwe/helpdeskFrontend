const initState = {
    isAuth : false,
    tickets: []
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
            tickets: [action.ticket, ...state.tickets]
        }
    }

};

export default rootReducer;


