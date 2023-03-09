import { useState } from 'react';

import initialState from './initialState';
import { useDispatch } from 'react-redux';
import { getAllContacts } from 'redux/contacts/contacts-selectors';
import { useSelector } from 'react-redux';
import css from './myContactForm.module.css';
import { fetchAddContacts } from 'redux/contacts/contacts-operations';

const MyContactForm = () => {
  const [state, setState] = useState({ ...initialState });
  const allContacts = useSelector(getAllContacts);
 

  const dispatch = useDispatch();

  const handleSubmint = e => {
    e.preventDefault();
    if (
      allContacts.find(({ name }) => {
        const normalizedName = state.name.toLowerCase();
        return name.toLowerCase() === normalizedName;
      })
    ) {
      reset();
      return alert(`${name} is already is contacts`);
    }

    dispatch(fetchAddContacts({ ...state }));
    reset();
  };
  const reset = () => {
    setState({ ...initialState });
  };

  const handleChenge = ({ target }) => {
    const { name, value } = target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const { name, number } = state;
  return (
    <form className={css.myForm} onSubmit={handleSubmint}>
      <label htmlFor="">Name</label>
      <input
        className={css.myFormInput}
        type="text"
        name="name"
        value={name}
        onChange={handleChenge}
        placeholder="Name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label htmlFor="">Number</label>
      <input
        className={css.myFormInput}
        type="tel"
        name="number"
        value={number}
        onChange={handleChenge}
        placeholder="Number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button className={css.myFormBtn} type="submint">
        {' '}
        Add contact
      </button>
    </form>
  );
};

export default MyContactForm;
