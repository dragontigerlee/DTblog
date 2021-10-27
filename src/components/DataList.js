import React, { useState } from 'react';
import Data from "../Assets/data.js";
import {Route,Switch} from "react-router-dom";
import UserList from "./UserList";
import UserDetail from "./UserDetail";
import {Nav} from "react-bootstrap";

function DataList({match}){
    let v = match;
    return (
        <div> 
            <Route exact path={match.path} component={UserList} />
            <Route path={`${match.path}/:id`} component={UserDetail}/>
        </div>
    )
}

export default DataList