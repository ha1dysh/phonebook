import { createSlice } from '@reduxjs/toolkit';

const initialState =
  JSON.parse(localStorage.getItem('contacts')) ?? [];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      return [...state, action.payload];
    },
    delContact: (state, action) => {
      return state.filter((contact) => contact.id !== action.payload);
    },
  },
});

export const { addContact, delContact } = contactsSlice.actions;

export default contactsSlice.reducer;
