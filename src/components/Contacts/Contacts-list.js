import React from "react";
import { connect } from "react-redux";
import contactsOperations from '../../redux/contacts/contacts-operations'
// import contactsActions from "../../redux/contacts/contacts-actions";
import "./contacts-list.css";

const ContactsList = ({ filteredContacts, onDeleteContact }) => (
  <ul className="contact-list">
    {filteredContacts.map(({ name, number, id }) => (
      <li key={id} className="contact-item">
        <span className="contact-name">{name} : </span>
        <span className="contact-number"> {number}</span>
        <button
          className="button contact-item__button"
          onClick={() => onDeleteContact(id)}
        >
          Удалить
        </button>
      </li>
    ))}
  </ul>
);

const getFilteredContacts = (allContacts, filter) => {
  
  // const { filter, contacts } = this.state;

  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  filteredContacts: getFilteredContacts(items, filter),
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (id) => dispatch(contactsOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);