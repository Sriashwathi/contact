import React from "react";
import user from "../Images/user.png";
const ContactCard =(props) =>{
    const{id,name,email}=props.contact;
    return (
        <div className="item">
                <div className="content">
                    <div className="header">{name}</div>
                    <div>{email}</div>
                    <img className="ui avatar image" src={user} alt="user"/>
                    
                </div>
                <i className="trash alternate outline icon"></i>
            </div>
    );


};
export default ContactCard;
