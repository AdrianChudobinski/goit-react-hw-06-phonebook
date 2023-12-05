import ContactListElement from './ContactListElement';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  return (
    <div>
      {contacts.length > 0 ? (
        <ul>
          <ContactListElement />
        </ul>
      ) : null}
    </div>
  );
};

export default ContactList;
