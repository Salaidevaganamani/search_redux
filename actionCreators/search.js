import {
    GET_PRODUCTS,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAILURE,
    SEARCH_PRODUCT
} from "../actionTypes/search";

export function getProducts() {
    return {
        type: GET_PRODUCTS
    };
}

export function getProductsSuccess(products) {
    return {
        type: GET_PRODUCTS_SUCCESS,
        products
    };
}

export function getProductsFailure(error) {
    return {
        type: GET_PRODUCTS_FAILURE,
        error
    };
}

export function getSearchProduct(products, itemName) {
    return {
        type: SEARCH_PRODUCT,
        products,
        itemName
    };
}