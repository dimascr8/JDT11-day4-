import { configureStore, } from "@reduxjs/toolkit";
import tokenSlice from "./reducers/tokenSlice";

const store = configureStore({
    reducer: {
        token: tokenSlice,
    },
     middleware: (GetDefaultMiddleware) =>
        GetDefaultMiddleware ({
            serializableCheck: false,
        }),
});

export default store;