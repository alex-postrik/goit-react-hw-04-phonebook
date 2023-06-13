import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

function ContactList({ contacts, onDelete }) {
     return (
    <ul className={styles.list} >
      {contacts.map(({ id, name, number }) => (
        <li className={styles.item} key={id}>
          <p >
            {name}📞 {number}
          </p>
          <button className={styles.button_item} type="button" onClick={() => onDelete(id)}>
                Delete
              </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;

