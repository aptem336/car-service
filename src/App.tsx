import React from 'react';
import './App.css';
import {Create} from './components/Create'
import {Create as Read} from './components/Create'
import {Create as Update} from './components/Create'
// @ts-ignore
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
    return (
        <Router>
            <Route exact path='/create' component={Create}/>
            <Route exact path='/read' component={Read}/>
            <Route exact path='/update/:id' component={Update}/>
        </Router>
    );
}

export default App;
