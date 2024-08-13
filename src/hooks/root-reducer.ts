import { combineReducers } from "redux";
import userReducer from "./reducer/user-slice";
import themeReducer from "./reducer/theme-slice";
import stockReducer from "./reducer/stock-slice";

const rootReducer = combineReducers({
 user: userReducer,
 theme: themeReducer,
 stock: stockReducer,
});

export default rootReducer;
