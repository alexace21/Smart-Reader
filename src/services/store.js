import { configureStore } from "@reduxjs/toolkit";

import { articleApi } from "./article";

// Store == global state
// To reduce the wanted result to single unit we use "reducer"
export const store = configureStore({
    // Official Redux documentation "configureStore"
    // https://redux-toolkit.js.org/api/configureStore
    reducer: {
        [articleApi.reducerPath]: articleApi.reducer,
    },
    // Line 12 makes the reducer work properly!
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware)
})
