import { configureStore } from "@reduxjs/toolkit";
import loadersReducer from "./loaderSlice";
import usersReducer from "./userSlice";

const store = configureStore({
	reducer: {
		loader: loadersReducer,
		users: usersReducer,
	},
});

export default store;
