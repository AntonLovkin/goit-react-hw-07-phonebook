const getFilter = state => state.contacts.filter;

const getAllContacts = state => state.contacts.items;

const getFilteredContacts = state => {
    const contacts = getAllContacts(state);
    const filter = getFilter(state);
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
}

export default { getFilter, getFilteredContacts }