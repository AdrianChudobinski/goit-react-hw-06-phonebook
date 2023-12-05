import { createSlice, nanoid } from '@reduxjs/toolkit';

const savedContacts = localStorage.getItem('contacts');
const parsedContacts = JSON.parse(savedContacts);

const contactsInitialState = parsedContacts ?? [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
        localStorage.setItem('contacts', JSON.stringify(state));
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name: name,
            number: number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const contactIdToDelete = action.payload;
      const updatedContacts = state.filter(
        contact => contact.id !== contactIdToDelete
      );
      localStorage.setItem('contacts', JSON.stringify(updatedContacts));
      return updatedContacts;
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
