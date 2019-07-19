import React, {useState, useEffect} from "react";
import "./StarWars.css";
import Individual from "./Individual";

const Characters = props => {
    return(
        <div className="container">
            <ul>
                {props.characters.map((props) => <Individual key={props.created} name={props.name} gender={props.gender}/>)}
            </ul>
        </div>
    )
    }

export default Characters