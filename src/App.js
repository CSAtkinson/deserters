import React from 'react'
import {Route, Switch} from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage'
import Diablo from './Pages/Diablo/Diablo'
import Wow from './Pages/Wow/Wow'
import Grandtheftauto from './Pages/Grandtheftauto/Grandtheftauto'

const App = (props) => (
    <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/Wow' component={Wow} />
        <Route path='/Diablo' component={Diablo} />
        <Route path='/Grandtheftauto' component={Grandtheftauto} />
    </Switch>
);

export default App