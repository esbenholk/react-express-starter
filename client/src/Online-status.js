import React from "react";
import './Online-status.css';



let Calculator = function (props){
    let last_seen;
    let last_login = props.user.last_login;
    let last_login_year = Number(last_login.substring(0, 4));
    let last_login_month = Number(last_login.substring(5, 7));
    let last_login_day = Number(last_login.substring(8, 10));
    let last_login_hour = Number(last_login.substring(11, 13));
    let last_login_minute = Number(last_login.substring(14, 16));
   

    let today = new Date();
    let this_year = today.getFullYear()
    let this_month = today.getMonth()+1
    let this_date = today.getDate()
    let this_hour = today.getHours();
    let this_minute = today.getMinutes()

  

    
        if(this_year === last_login_year){

            if(this_month === last_login_month){

                if(this_date === last_login_day){
                    
                    if(this_hour === last_login_hour){
                        last_seen = `last seen ${this_minute-last_login_minute} days ago`                    
                    } else {
                        last_seen =  `last seen ${this_hour-last_login_hour} days ago`   
                    }   
                    
                } else {
                    if(this_date-last_login_day>1){
                        
                        last_seen = `last seen ${this_date-last_login_day} days ago`;   

                    } else if(this_date-last_login_day===1){

                        if(this_hour+24-last_login_hour>24){
                            last_seen = "last seen yesterday"
                        } else {
                            last_seen =  `last seen ${this_hour+24-last_login_hour} days ago`      
                           
                        }
                    } 
                }

            } else {
            last_seen = "last seen last month";   
            }
    } else{
        last_seen = "last seen last year";
    }

   

   if(props.user.online_status === "ONLINE" ){
   
        return (
           
                <div className="status_icon online_icon">

                </div>
    
        );

    } else{

        return (
            <div>
                <div className=" status_icon offline_icon">
                </div>
                <p>{last_seen}</p>
            </div>
        );
    }
   

 

    

}

export default Calculator;

