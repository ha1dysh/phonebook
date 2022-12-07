import PropTypes from 'prop-types';
import ContactItem from './ContactItem/ContactItem';

export default function ContactList({ contacts, delContact }) {
  return (
    <>
      <h2>Contacts</h2>
      <ul>
        {contacts.map((e) => (
          <ContactItem
            key={e.id}
            delContact={delContact}
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
  onDelContact: PropTypes.func,
};
