import React, { useState } from 'react';
import Data from '../Assets/data';
import { Link,useHistory} from 'react-router-dom';
import {Button} from 'react-bootstrap';

function UserDetail(){
    let [data,setData] = useState(Data);
    let history = useHistory();

    return (
        <div >
            <h3>Detail page</h3>
            <hr/>
            <Button onClick={()=>{history.goBack();}}>뒤로가기</Button>
        </div>
    )
}

export default UserDetail
