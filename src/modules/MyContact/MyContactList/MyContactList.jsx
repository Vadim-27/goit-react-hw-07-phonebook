import { useDispatch, useSelector } from 'react-redux';
import { fetchDeleteContacts } from 'redux/contacts/contacts-operations';

import { getFilteredContacts } from 'redux/contacts/contacts-selectors';

const ContactList = () => {
  const dispatch = useDispatch();

  const filterList = useSelector(getFilteredContacts);

  const contactDelete = id => {
    dispatch(fetchDeleteContacts(id));
  };
  const contact = filterList.map(({ id, name, number }) => (
    <li key={id}>
      {name}:{number}
      <button type="button" onClick={() => contactDelete(id)}>
        Delete
      </button>
    </li>
  ));

  return <ul>{contact}</ul>;
};

export default ContactList;
