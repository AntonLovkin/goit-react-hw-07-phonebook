import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
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
import storage from "redux-persist/lib/storage";
import contactsReducer from "./contacts/contacts-reducer";
// import { createStore, combineReducers } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const persistConfig = {
  key: "contacts",
  storage,
  blacklist: ["filter"],
};

// const rootReducer = combineReducers({
//   contacts: persistReducer(persistConfig, contactsReducer)
// })

// const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: {
    contacts: persistReducer(persistConfig, contactsReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

const persistor = persistStore(store);

export default { store, persistor };

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
// });

// const store = createStore(rootReducer, composeWithDevTools());
