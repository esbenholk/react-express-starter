import React from "react";

let Calculator = function (props){
    let last_seen;
    let last_login = props.user.last_login;

    let today = new Date().toISOString()
   
    var now = new Date(today),
    previous = new Date(last_login),
    nowInMinutes = now.getTime() / 60000,
    previousInMinutes = previous.getTime() / 60000,
    difference = Math.abs(nowInMinutes - previousInMinutes);

    if(difference/60 > 730){
        last_seen = "last seen over a month ago"
    } else if(difference/60 > 168){
        last_seen = "last seen over a week ago"
    } else {
        if(difference/60>24){
            last_seen = "last seen "+Math.round((difference/60)/24)+" days ago"
        } else if (difference>60){
            last_seen = "last seen "+Math.round((difference/60))+" hours ago"
        }  else{
            last_seen = "last seen "+Math.round(difference)+" minutes ago"
        }
    } 

   if(props.user.online_status === 1 ){
        return (
        <p className="last_seen tagline">{}</p>
        );
    } else{
        return (
             <p className=" last_seen tagline">{last_seen}</p>
        );
    }
}

export default Calculator;

