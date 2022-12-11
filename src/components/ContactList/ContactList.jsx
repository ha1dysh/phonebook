import { useFilter } from '../../redux/filterSlice';

import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from '../../redux/contactsSlice';

export default function ContactList() {
  const { data: contacts = [] } = useGetContactsQuery();
  const [delContact] = useDeleteContactMutation();

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
        {contacts &&
          filterContacts(contacts).map((e) => (
            <li key={e.id}>
              {e.name}: {e.number}
              <button onClick={() => delContact(e.id)}>Delete</button>
            </li>
          ))}
      </ul>
    </>
  );
}
