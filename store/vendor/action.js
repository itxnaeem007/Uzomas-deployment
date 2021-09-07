export const actionTypes = {
    SWITCH_TO_SELLER: 'SWITCH_TO_SELLER',
    SWITCH_TO_SELLER_SUCCESS: 'SWITCH_TO_SELLER_SUCCESS',
};

export function changeVendor(Vendor) {
    console.log('Vendor Action', Vendor);
    return { type: actionTypes.SWITCH_TO_SELLER, Vendor };
}

export function changeVendorSuccess(Vendor) {
    return { type: actionTypes.SWITCH_TO_SELLER_SUCCESS, Vendor };
}
