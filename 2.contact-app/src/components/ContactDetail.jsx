import React from "react";
import { Link, useLocation } from "react-router-dom";
import user from "../images/user.png";

const ContactDetail = () => {
    const location = useLocation();
    const { name, email } = location.state.contact;

    return (
        <div className="main">
            <div className="ui card centered">
                <img className="image" src={user} alt="avatar" />
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="description">{email}</div>
                </div>
            </div>

            <div className="center-div" style={{ textAlign: "center" }}>
                <Link to="/">
                    <button className="ui button blue center">
                        Back to Contact List
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ContactDetail;