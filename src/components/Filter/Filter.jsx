import { useFilter } from '../../redux/filterSlice';

export default function Filter() {
  const { filter, setFilter } = useFilter();

  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        onChange={(e) => setFilter(e.target.value)}
        value={filter}
      />
    </>
  );
}
