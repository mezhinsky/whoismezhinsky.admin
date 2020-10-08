import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";

import history from "./utils/history";
import configureStore from "./store";
import "./interceptors";

const initialState = {};

const store = configureStore(initialState, history);

ReactDOM.render(
  <React.Fragment>
    <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
    </Provider>
  </React.Fragment>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
