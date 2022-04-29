import React from 'react';
import './App.css';
import {Create} from './components/Create'
import {Read} from './components/Read'
import {Update} from './components/Update'
// @ts-ignore
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
    return (
        <Router>
            <Route exact path='/create' component={Create}/>
            <Route exact path='/read' component={Read}/>
            <Route exact path='/update/:id' component={
                // @ts-ignore
                (match) => <Update id={(match?.match?.params?.id)}/>}/>
        </Router>
    );
}

export default App;
