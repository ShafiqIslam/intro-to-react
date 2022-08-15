import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { v4 as uuid } from "uuid";
import AddContact from './AddContact';
import './App.css';
import ContactDetail from './ContactDetail';
import ContactList from './ContactList';
import Header from './Header';
import api from "../api/contacts";
import EditContact from './EditContact';

function App() {
  const retrirveContacts = async () => {
    const res = await api.get("/contacts");
    return res.data;
  };

  const [contacts, setContacts] = useState([]);
  const [searchedContacts, setSearchedContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const addContactHandler = async (contact) => {
    const req = { id: uuid(), ...contact };
    const res = await api.post("/contacts", req);
    setContacts([...contacts, res.data]);
  };

  const updateContactHandler = async (updatedData) => {
    await api.put(`/contacts/${updatedData.id}`, updatedData);
    const newContactList = contacts.map((contact) => {
      return contact.id === updatedData.id ? updatedData : contact;
    });

    setContacts(newContactList);
  };

  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  useEffect(() => {
    (async () => {
      const contactList = await retrirveContacts();
      setContacts(contactList);
    })();
  }, []);

  useEffect(() => {
    const matchedContacts = contacts.filter((contact) => {
      if (searchTerm === "") return true;

      return contact.name.toLowerCase().includes(searchTerm.toLowerCase())
        || contact.email.toLowerCase().includes(searchTerm.toLowerCase());
    });

    setSearchedContacts(matchedContacts);
  }, [searchTerm, contacts]);

  return (
    <div className='ui container'>
      <Router>
        <Header />
        <Routes>
          <Route
            path='/'
            element={
              <ContactList
                contacts={searchTerm.length > 0 ? searchedContacts : contacts}
                removeContactHandler={removeContactHandler}
                setSearchTerm={setSearchTerm}
              />
            }
          ></Route>
          <Route
            path='/add'
            element={
              <AddContact
                addContactHandler={addContactHandler}
              />
            }
          ></Route>
          <Route
            path='/edit'
            element={
              <EditContact
                updateContactHandler={updateContactHandler}
              />
            }
          ></Route>
          <Route
            path='contact/:id'
            element={
              <ContactDetail />
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
