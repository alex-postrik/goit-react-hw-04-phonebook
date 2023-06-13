import PropTypes from 'prop-types';
import styles from './filter.module.css';

function Filter({ value, onChange }) {
  return (
     <label className={styles.label} htmlFor="search" >
      Find contacts by name
      <input className={styles.input}
       name="search"
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
   )

}


Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};


export default Filter;
