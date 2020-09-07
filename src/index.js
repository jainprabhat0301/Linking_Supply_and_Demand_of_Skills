import React from 'react';
//import "mdbreact/dist/css/mdb.css";

import ReactDOM from 'react-dom';
import './index.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

//import '../node_modules/bootstrap/dist/css/bootstrap-theme.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import "mdbreact/dist/css/mdb.css";

import App from "./App";
import Login from "./components/login"
import Register from "./components/register"
import Phome from "./components/phome"
import * as serviceWorker from './serviceWorker';
import Chome from "./components/chome"

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();