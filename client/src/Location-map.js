import React from "react";

let Mapper = function (props){

        return (
             <p className="tagline">{props.location.distance} m in {props.location.city}, {props.location.country}</p>
        );

}

export default Mapper;

