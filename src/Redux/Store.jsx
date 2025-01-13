import { combineReducers, createStore } from "@reduxjs/toolkit";
import LivreReducer from "./LivreReducer";
import PanierReducer from "./PanierReducer";

const rootReducer =  combineReducers({
    livre: LivreReducer,
    panier: PanierReducer
}
) 


const store = createStore(rootReducer);
export default store;