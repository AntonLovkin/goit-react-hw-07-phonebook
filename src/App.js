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