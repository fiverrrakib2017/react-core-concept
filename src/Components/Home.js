import React, { useEffect, useState } from 'react';
import User from './User';
const Home = () => {
    const [users,setUsers]=useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[]);
    return(
        <div className="container ">
            <div className="row mt-3">
                {
                    users.map(user=><User user={user}/>)
                }
            </div>
        </div>
    )
}
export default Home;