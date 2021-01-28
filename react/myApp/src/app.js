import React from "react";
import {render} from "react-dom";
import "./less/style.less";
import MainApp from "./components/main";
import {reducers} from "./Components/reducers";
import {Provider} from "react-redux";
import {createStore} from "redux";

const storeApp = createStore(reducers);


render(
    <Provider store={storeApp}>
        <MainApp/>
    </Provider>

    ,document.getElementById("app"));