import React from "react";

let Mapper = function (props){
   console.log(props.location);

 

        return (
            <div>
                <p>{props.location.location.distance}m</p>
            </div>
        );
    
   

 

    

}

export default Mapper;

