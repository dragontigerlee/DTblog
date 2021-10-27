import React, { useState } from 'react';
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import DataList from "./components/DataList";
import Temp from './Temp';
import {Nav} from 'react-bootstrap';

function App () {
    return (
        <div>
            <Router>
            <Nav justify variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/">main</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href='/data'>data</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                    Disabled
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <Switch>
            <Route exact path="/">
                <h1>MAIN PAGE</h1>
            </Route>
            <Route path="/data" component={DataList} />
            </Switch>
            </Router>
            {/* <Temp/> */}
        </div>
    )
}

export default App