import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ContactItem from './ContactItem/ContactItem';

export default function ContactList() {
  const { contacts, filter } = useSelector((state) => state);
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

ContactList.propTypes = {
  onFilterContacts: PropTypes.array,
};
