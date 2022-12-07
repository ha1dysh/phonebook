import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { delContact } from '../../../redux/contactsSlice';

export default function ContactItem({ id, name, number }) {
  const dispatch = useDispatch();
  return (
    <li>
      {name}: {number}
      <button onClick={() => dispatch(delContact(id))}>Delete</button>
    </li>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
