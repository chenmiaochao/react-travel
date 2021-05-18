import { createStore, combineReducers } from "redux";
import languageReducer from "./language/languageReducer";
import recommendProductsReducer from "./recommendProducts/recommendProductsReducer";

//所有Reducerde集合体 约定俗成的名称
const rootReducer = combineReducers({
  language: languageReducer,
  recommendProducts: recommendProductsReducer,
});
const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;

export default store;
