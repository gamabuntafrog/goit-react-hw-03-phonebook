import PropTypes from "prop-types";

const Filter = ({ handleState }) => {
  return (
    <div className="filter">
      <h2>Find contacts by name</h2>
      <input
        className="filter__input"
        onChange={handleState}
        name="filter"
        type="text"
      ></input>
    </div>
  );
};

Filter.propTypes = {
  handleState: PropTypes.func,
};

export default Filter;
