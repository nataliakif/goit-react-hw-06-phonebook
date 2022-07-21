import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/addContact', ({ name, number }) => ({
  payload: {
    id: nanoid(),
    name,
    number,
  },
}));
const deleteContact = createAction('contacts/deleteContact');

const changeFilter = createAction('contacts/changeFilter');

export default { addContact, deleteContact, changeFilter };
