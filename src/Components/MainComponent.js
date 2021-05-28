import React from 'react';
import Card from './Card'
import sdata from './Sdata';
const MainComponent=()=>{
    return(
        <div>
            <h1 className="heading_style">List of top 5 netflix series in 2022</h1>
            {sdata.map(function ncard(val){
                return(
                    <Card cardImg={val.cardImg} 
                    carCategory={val.carCategory} 
                    cardTitle={val.cardTitle} 
                    link={val.link}/>
                )
            })};
            
        </div>
    )
}
export default MainComponent;