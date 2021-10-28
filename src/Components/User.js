import React from "react";
import { Link } from "react-router-dom";
const User = (props) => {
    const {name,email,addres,phone,id}=props.user;
    return (
        <div className="col py-2 mr-5">
        <div class="card" style={{width:'18rem',border:'1px solid black',borderRadius:'12px'}}>
            <img src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-29742,resizemode-1,msid-85889478/magazines/panache/tollywood-drug-case-actress-rakul-preet-singh-appears-before-ed-in-hyderabad.jpg" class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">{email}</p>
                <p class="card-text">{addres}</p>
                <p class="card-text">{phone}</p>
                <button href="#" class="btn btn-primary py-2 mb-2"><i class="fas fa-location-arrow"></i> Add Friend</button>
                
                <Link to={`/friend/${id}`}> 
                <button className="btn btn-info py-2 mb-2"><i class="fas fa-arrow-right"></i> Show Details</button>
                </Link>
            </div>
        </div>
        </div>
    );
};

export default User;