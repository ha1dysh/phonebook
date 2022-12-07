import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export default function App() {
  const { contacts, filter } = useSelector((state) => state);

  const filterContacts = () => {
    if (filter === '') {
      return contacts;
    }
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <ContactForm />
      <Filter />
      <ContactList contacts={filterContacts()} />
    </div>
  );
}
