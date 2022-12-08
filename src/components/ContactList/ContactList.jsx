import { useContacts } from '../../redux/contactsSlice';
import { useFilter } from '../../redux/filterSlice';

import ContactItem from './ContactItem/ContactItem';

export default function ContactList() {
  const { contacts, delContact } = useContacts();
  const { filter } = useFilter();

  const filterContacts = () => {
    if (filter === '') {
      return contacts;
    }
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <>
      <h2>Contacts</h2>
      <ul>
        {filterContacts(contacts).map((e) => (
          <ContactItem
            delContact={delContact}
            key={e.id}
            id={e.id}
            number={e.number}
            name={e.name}
          />
        ))}
      </ul>
    </>
  );
}
