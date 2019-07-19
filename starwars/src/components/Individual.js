import React from "react";
import "./StarWars.css"

const Individual = props =>{
    return(
        <div>
        <div className="individual">
            <div className="individual-text">
                <h1>Name: {props.name}</h1>
                <h1>Gender: {props.gender}</h1>
            </div>
        </div>
    </div>
    )
}

export default Individual;