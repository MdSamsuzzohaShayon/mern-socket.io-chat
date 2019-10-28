// https://www.youtube.com/watch?v=ZwFA3YMfkoc&t=310s
import React, {Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Join from './components/Join';
import Chat from './components/Chat';


const App =()=> (
    // https://reactjs.org/community/routing.html
    // https://github.com/ReactTraining/react-router
    // https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom
    <Router>
        <Route path="/" exact component={Join} />
        <Route path="/chat" component={Chat} />
    </Router>
);



export default App;