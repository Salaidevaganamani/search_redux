import { createStore, applyMiddleware } from "redux";
import productReducer from "../reducers/search";
import createSagaMiddleware from "redux-saga";
import { productsWatcher } from "../sagas/search";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(productReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(productsWatcher);

export default store;