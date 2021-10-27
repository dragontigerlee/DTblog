import React, { useState } from 'react';
import Data from '../Assets/data';
import {Link,useHistory} from 'react-router-dom';

function UserList({match}){
    let [data,setData] = useState(Data);
    let history = useHistory();
    return (
        <>
        <h1>users LIST</h1>
        {
            data.User.map((v,i)=>{
                let id = v.id;
                return(
                    <p>
                    <Link to={`${match.path}/${v.id}`}>
                        {v.name}
                    </Link>
                    </p>
                )
            })

        }
        </>
    )
}

export default UserList