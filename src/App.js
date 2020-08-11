import React from 'react';
import routes from "./utils/routes";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "./redux/reducers";
import thunk from 'redux-thunk';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

const store = createStore(reducers, applyMiddleware(thunk));

const getRoutes = () => {
    return routes.map((route, index) => {
        return <Route
            exact
            key={index}
            path={route.path}>
            {route.main}
        </Route>
    })
};


function App() {
    return <Provider store={store}>
        <Router>
            <Switch>
                {getRoutes()}
            </Switch>
        </Router>
    </Provider>
}

export default App;