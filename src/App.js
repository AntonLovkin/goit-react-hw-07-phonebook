import Filter from "./components/Filter";
import ContactsList from "./components/Contacts/Contacts-list";
import ContactForm from "./components/Contact-form/Contact-form";

const App = () => (
  <>
    <h1>Phonebook</h1>
    <ContactForm />

    <h2>Contacts</h2>
    <Filter />

    <ContactsList />
  </>
);

export default App;

// import { Component } from "react";
// import { v4 as uuidv4 } from "uuid";

// addContact = (name, number) => {
//   const contact = {
//     id: uuidv4(),
//     name,
//     number,
//   };

//   const contactNames = this.state.contacts.map((contact) => contact.name);
//   this.renderContacts(contactNames, contact.name, contact);
// };

// renderContacts = (contactsList, contactName, newContact) => {
//   if (contactsList.includes(contactName)) {
//     alert(`${contactName} is already in contacts`);
//   } else {
//     this.setState(({ contacts }) => ({
//       contacts: [newContact, ...contacts],
//     }));
//   }
// };

// deleteContact = (contactId) => {
//   this.setState((prevState) => ({
//     contacts: prevState.contacts.filter(
//       (contact) => contact.id !== contactId
//     ),
//   }));
// };

// changeFilter = (evt) => {
//   this.setState({ filter: evt.currentTarget.value });
// };

// reset = () => {
//   this.setState({ name: "", number: "" });
// };

//render() {
// const { filter } = this.state;
// // console.log(filter);

// const normalizedFilter = this.state.filter.toLocaleLowerCase();
// // console.log(normalizedFilter);

// const filteredContacts = this.state.contacts.filter((contact) =>
//   contact.name.toLowerCase().includes(normalizedFilter)
// );}

// componentDidMount() {
//   // console.log("componentDidMount");

//   const contacts = localStorage.getItem("contacts");
//   const parsedContacts = JSON.parse(contacts);

//   if (parsedContacts) {
//     this.setState({ contacts: parsedContacts });
//   }
// }

// componentDidUpdate(prevProps, prevState) {
//   // console.log("componentDidUpdate");

//   if (this.state.contacts !== prevState.contacts) {
//     // console.log("Refresh page");

//     localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
//   }
// }
