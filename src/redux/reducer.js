import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

const items = createReducer(
  [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  {
    'contacts/addContact': (state, action) => [...state, action.payload],
    'contacts/deleteContact': (state, { payload }) =>
      state.filter(({ id }) => id !== payload),
    // 'contacts/filteredContacts': (state,{payload})=> state.filter(contact => {
    //   contact.name.toLowerCase().includes(payload);
    // })
  }
);
const filter = createReducer('', {
  'contacts/changeFilter': (_, { payload }) => payload,
});

export default combineReducers({ items, filter });
