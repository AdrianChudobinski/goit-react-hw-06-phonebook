import css from './Filter.module.css';
import { setFilter } from 'redux/filterSlice';
import { useDispatch } from 'react-redux';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    const filter = e.target.value;
    dispatch(setFilter(filter));
  };

  return (
    <label>
      <p className={css.search}>Find contacts by name</p>
      <input onChange={handleFilterChange} type="text" name="filter" />
    </label>
  );
};

export default Filter;
