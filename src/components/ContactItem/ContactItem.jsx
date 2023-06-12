import PropTypes from 'prop-types';
import styles from './ContactItem.module.css';

const ContactItem = ({ contact, onDeleteContact }) => {
  return (
    <li className={styles.item}>
      <span className={styles.name}>{contact.name}: </span>
      <a href={`tel:${contact.number}`} className={styles.number}>
        {contact.number}
      </a>
      <button
        className={styles.button_item}
        type="button"
        onClick={() => onDeleteContact(contact.id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
