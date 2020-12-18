import { applyMiddleware, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import thunk from "redux-thunk";
import loggerMiddleware from "./middleware/logger";
import rootReducer from "./reducers/index.js";

export default function configureStore(preloadedState) {
  const middlewares = [loggerMiddleware, thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(thunk);

  const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
      : compose;

  const enhancers = composeEnhancers(middlewareEnhancer);

  const store = createStore(rootReducer, preloadedState, enhancers);

  return store;
}
