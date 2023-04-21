import PropTypes from 'prop-types';

const Filter = ({ onChange, filter }) => {
  const handleChange = event => {
    onChange(event.target.value);
  };
  return (
    <>
      <p>Find contacts by name</p>
      <input onChange={handleChange} type="text" name="filter" value={filter} />
    </>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Filter;