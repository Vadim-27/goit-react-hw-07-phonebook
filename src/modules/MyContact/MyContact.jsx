import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { getFilteredContacts } from 'redux/contacts/contacts-selectors';
import { fetchAllContacts } from 'redux/contacts/contacts-operations';

import ContactList from './MyContactList/MyContactList';
import ContactFilter from './MyContactFilter/MyContactFilter';
import MyContactForm from './MyContactForm/MyContactForm';
import css from './myContact.module.css';

const MyContact = () => {
  const FilteredContacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllContacts())
  }, [dispatch])

  const isContacts = Boolean(FilteredContacts.length);

  return (
    <div>
      <h2 className={css.title}>Phonebook</h2>
      <MyContactForm />
      <div>
        <h3 className={css.title}>Contact</h3>
        <ContactFilter />

        {isContacts ? (
          <ContactList />
        ) : (
          <p className={css.message}>No saved contacts</p>
        )}
      </div>
    </div>
  );
};

export default MyContact;
