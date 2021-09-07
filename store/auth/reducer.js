import { actionTypes } from './action';

export const initState = {
    isLoggedIn: false,
    account: null,
};

function reducer(state = initState, action) {
    console.log(action);

    switch (action.type) {
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                ...{ isLoggedIn: true, account: action.payload },
            };
        case actionTypes.LOGOUT_SUCCESS:
            return {
                ...state,
                ...{ isLoggedIn: false, account: null },
            };
        default:
            return state;
    }
}

export default reducer;
