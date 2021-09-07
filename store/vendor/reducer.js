import { actionTypes } from './action';

export const initialState = {
    Vendor: {
        path: '/vendor/become-a-vendor',
        change: 'Switch To Seller',
        cond: true,
    },
};

function reducer(state = initialState, action) {
    console.log('Vendor Reducer', state);
    switch (action.type) {
        case actionTypes.SWITCH_TO_SELLER_SUCCESS:
            return {
                ...state,
                ...{ Vendor: action.Vendor },
            };
        default:
            return state;
    }
}

export default reducer;
