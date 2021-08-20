import { configureStore } from "@reduxjs/toolkit";

import contactsReducer from "./contacts/contactsSlices";

const store = configureStore({
  reducer: contactsReducer,
  devTools: process.env.NODE_ENV === "development",
});

export { store };
