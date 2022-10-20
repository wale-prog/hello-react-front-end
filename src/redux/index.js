import { configureStore } from "@reduxjs/toolkit";
import greetingReducer from "./GreetingSlice";

const store = configureStore({
  reducer: {
    greeting: greetingReducer,
  },
});

export default store;