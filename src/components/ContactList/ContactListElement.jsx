import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';
import { getFilter } from 'redux/selectors';

const ContactListElement = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const handleDelete = id => dispatch(deleteContact(id));
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ul className={css.list}>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button onClick={() => handleDelete(id)} id={id} type="button">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactListElement;
