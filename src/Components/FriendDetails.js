import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {
    const [friend,setFriend]=useState({});
    useEffect(()=>{
        const url=(`https://jsonplaceholder.typicode.com/users/${friendId}`);
        fetch(url)
        .then(res=>res.json())
        .then(data=>setFriend(data));
    },);
    let {friendId}=useParams();
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6 mx-auto ">
                    <div className="card mb-2">
                        <img src="http://surl.li/angrf"   class="card-img-top" alt="" />
                        <div className="card-body">
                            <h1 className="card-title">{friend.name}</h1>
                            <p className="card-text">Email: {friend.email}</p>
                            <p className="card-text">Email: {friend.email}</p>
                            <p className="card-text">Username: {friend.username}</p>
                            <p className="card-text">Addres: {friend.addres}</p>
                            <p className="card-text">Phone: {friend.phone}</p>
                            <p className="card-text">Website: {friend.website}</p>
                            <button className="btn btn-primary"><i class="fas fa-cloud-download-alt"></i> Download Cv</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FriendDetails;