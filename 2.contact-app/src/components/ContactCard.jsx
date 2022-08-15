import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";

const ContactCard = ({ contact, removeContactHandler }) => {
    return (
        <div className="item">
            <Link
                to={`contact/${contact.id}`}
                state={{ "contact": contact }}
            >
                <img className="ui avatar image" src={user} alt="avatar" />
                <div className="content">
                    <div className="header">{contact.name}</div>
                    <div>{contact.email}</div>
                </div>
            </Link>

            <i
                className="trash alternate outline icon"
                style={{ color: "red", marginTop: "7px" }}
                onClick={() => removeContactHandler(contact.id)}
            ></i>
            <Link
                to="edit"
                state={{ "contact": contact }}
            >
                <i
                    className="edit alternate outline icon"
                    style={{ color: "blue", marginTop: "7px" }}
                ></i>
            </Link>
        </div>
    );
};

export default ContactCard;