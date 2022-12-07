import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';

export default function Filter({ filterValue, setFilterValue }) {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        onChange={(e) => dispatch(setFilter(e.target.value))}
        value={filter}
      />
    </>
  );
}

Filter.propTypes = {
  filterValue: PropTypes.string,
  setFilterValue: PropTypes.func,
};
