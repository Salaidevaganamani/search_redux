import {
    GET_PRODUCTS,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAILURE,
    SEARCH_PRODUCT
} from "../actionTypes/search";

export default function productReducer(
    prevState = {isLoading: true, products: [], fillterProducts: [] },
    action
) {
    switch (action.type) {
        case GET_PRODUCTS:
            return {...prevState, isLoading: true };
        case GET_PRODUCTS_SUCCESS:
            return {...prevState, isLoading: false, products: action.products };
        case GET_PRODUCTS_FAILURE:
            return {...prevState, isLoading: false, error: action.error };
        case SEARCH_PRODUCT:
            console.log("reducer: "+ action.itemName);
            return {...prevState, isLoading: false, 
                fillterProducts:
                action.itemName.length > 0
                    ? action.products
                    : action.products
                };
        default:
            return prevState;
    }
}