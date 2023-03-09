import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/filter/filter-selectors';
import { setFilter } from 'redux/filter/filter-slice';
import css from './myContactFilter.module.css';

const ContactFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const handleChenge = ({ currentTarget }) => {
    dispatch(setFilter(currentTarget.value));
  };

  return (
    <div className={css.filterBox}>
      <label>
        Find contacts by name
        <input
          className={css.myFormInput}
          type="text"
          name="filter"
          value={filter}
          onChange={handleChenge}
          placeholder="Filter contact"
        />
      </label>
    </div>
  );
};

export default ContactFilter;
