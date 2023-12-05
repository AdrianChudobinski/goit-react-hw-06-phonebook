import { createSlice, nanoid } from '@reduxjs/toolkit';

const savedContacts = localStorage.getItem('contact');
const parsedContacts = JSON.parse(savedContacts);

const contactsInitialState = parsedContacts ?? [];

const contactsSlice = createSlice({
  name: 'contact',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
        localStorage.setItem('contact', JSON.stringify(state));
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
      localStorage.setItem('contact', JSON.stringify(updatedContacts));
      return updatedContacts;
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
