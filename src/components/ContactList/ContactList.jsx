import { useContacts } from '../../redux/contactsSlice';
import { useFilter } from '../../redux/filterSlice';

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
          <li key={e.id}>
            {e.name}: {e.number}
            <button onClick={() => delContact(e.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}
