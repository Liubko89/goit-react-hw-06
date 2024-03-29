// import { useEffect, useState } from "react";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
// import { nanoid } from "nanoid";

function App() {
  // const [contactList, setContactList] = useState(
  //   []
  // () => {
  // const savedContacts = JSON.parse(localStorage.getItem("contacts"));
  // return savedContacts ? savedContacts : initialList;
  // }
  // );

  // const [filter, setFilter] = useState("");

  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contactList));
  // }, [contactList]);

  // const visibleContacts = contactList.filter((contact) =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

  // const onAddContact = (newContact) => {
  //   const newFullContact = { id: nanoid(), ...newContact };
  //   return dispatch(addContact(newFullContact));
  // };

  // const onDeleteContact = (contactId) => {
  //   return setContactList((prevContacts) => {
  //     return prevContacts.filter((contact) => contact["id"] !== contactId);
  //   });
  // };

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
