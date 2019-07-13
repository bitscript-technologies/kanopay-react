import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import User from './User';
import * as serviceWorker from './serviceWorker';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';
import NavBar from './Components/NavBar';

Amplify.configure(awsconfig);

// const Routing = () => {
//     return withAuthenticator(() => {
//         return (
//             <Router>
//                     <NavBar />
//                     <Route exact path="/" component={App} />
//                     <Route path="/settings" component={Settings} />
//             </Router>
//         )
//     }
// )};

const main = (
    <Router>
            <NavBar />
            <Route exact path="/" component={App} />
            <Route path="/user" component={User} />
    </Router>
);

ReactDOM.render(main, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
