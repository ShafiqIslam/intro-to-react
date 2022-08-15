import React, { useRef } from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    const searchInputEl = useRef("");
    const handleSearch = () => {
        props.setSearchTerm(searchInputEl.current.value);
    };

    const renderList = props.contacts.map((contact) => (
        <ContactCard
            key={contact.id}
            contact={contact}
            removeContactHandler={props.removeContactHandler}
        />
    ));

    return (
        <div className="main">
            <div className="ui clearing">
                <h2>Contact List
                    <Link to="/add">
                        <button className="ui button blue right floated">
                            Add Contact
                        </button>
                    </Link>
                </h2>
            </div>

            <div className="ui search" style={{ marginTop: "20px" }}>
                <div className="ui icon input" style={{ width: "100%" }}>
                    <input
                        ref={searchInputEl}
                        type="text"
                        placeholder="Search Contacts"
                        className="prompt"
                        onChange={handleSearch}
                    />
                    <i className="search icon" />
                </div>
            </div>

            <div className="ui celled list">
                {
                    renderList.length > 0
                        ? renderList
                        : "No contacts found."
                }
            </div>
        </div>
    );
};

export default ContactList;