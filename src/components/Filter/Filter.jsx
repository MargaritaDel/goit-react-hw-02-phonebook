import PropTypes from 'prop-types';
import { useState } from 'react';

const Filter = ({ onChange, filter }) => {
  const [inputValue, setInputValue] = useState(filter);

  const handleChange = event => {
    const value = event.target.value;
    setInputValue(value);
    onChange(value);
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