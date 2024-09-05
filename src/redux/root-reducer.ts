import { combineReducers } from "redux";
import userReducer from "./slices/user-slice";
import themeReducer from "./slices/theme-slice";
import stockReducer from "./slices/stock-slice";

const rootReducer = combineReducers({
 user: userReducer,
 theme: themeReducer,
 stock: stockReducer,
});

export default rootReducer;
