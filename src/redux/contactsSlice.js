import { createSlice } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: (state, action) => [...state, action.payload],

    delContact: (state, action) =>
      state.filter((contact) => contact.id !== action.payload),
  },
});

export const { addContact, delContact } = contactsSlice.actions;

export default contactsSlice.reducer;

export const getContacts = (state) => state.contacts;

export const useContacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const handleAddContact = (value) => dispatch(addContact(value));
  const handleDelContact = (id) => dispatch(delContact(id));

  return {
    contacts,
    addContact: handleAddContact,
    delContact: handleDelContact,
  };
};
