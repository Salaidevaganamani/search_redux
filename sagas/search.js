import { takeLatest, put, all } from "redux-saga/effects";
import { GET_PRODUCTS } from "../actionTypes/search";
import {
    getProductsSuccess,
    getProductsFailure
} from "../actionCreators/search";

function* getProducts() {
    try {
        const response = yield fetch("http://10.100.100.65:4000/products");
        const products = yield response.json();
        yield put(getProductsSuccess(products));
    } catch (err) {
        yield put(getProductsFailure(err));
    }
}

export function* productsWatcher() {
    yield all([takeLatest(GET_PRODUCTS, getProducts)]);
}