import React from 'react'
import Header from  '../header/Headr'
import Home from '../body/Home.js'
import About from '../body/About'

import {Route, Switch} from 'react-router-dom'

function RoutePath() {
    return (
        <>

            <Header/>

            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/about">
                    <About/>
                </Route>
            </Switch>
        </>
    )
}

export default RoutePath
