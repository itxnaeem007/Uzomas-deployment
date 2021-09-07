import { combineReducers } from 'redux';
import post from './post/reducer';
import product from './product/reducer';
import setting from './setting/reducer';
import cart from './cart/reducer';
import compare from './compare/reducer';
import auth from './auth/reducer';
import wishlist from './wishlist/reducer';
import collection from './collection/reducer';
import media from './media/reducer';
import app from './app/reducer';
import vendor from './vendor/reducer';

export default combineReducers({
    auth,
    post,
    product,
    setting,
    vendor,
    cart,
    compare,
    wishlist,
    collection,
    media,
    app,
});
