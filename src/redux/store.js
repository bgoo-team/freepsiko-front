import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import jobsReducer from "./jobsSlice";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";

const persistConfig = {
	key: "root",
	version: 1,
	storage,
};

const rootReducer = combineReducers({
	user: userReducer,
	jobs: jobsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(store);
