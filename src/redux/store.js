import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { reducer } from "./reducer";
import { rootSaga } from "../saga";


const sagamiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  applyMiddleware(sagamiddleware)
);
sagamiddleware.run(rootSaga)
export default store;