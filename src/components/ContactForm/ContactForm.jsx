import { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from "nanoid";

import styles from './ContactForm.module.css';

class ContactForm extends Component {
  // static propTypes = {
  //   onSubmit: PropTypes.func.isRequired,
  // };

  state = {
    id: '',
    name: '',
    number: '',
  };

  hanldeChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  hanldeSubmit = event => {
    event.preventDefault();

    const contact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };
    this.props.onSubmit(contact);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      id: '',
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form className={styles.form} onSubmit={this.hanldeSubmit}>
        <label className={styles.label}>
          Name
          <input
            type="text"
            name="name"
            className={styles.input}
            value={this.state.name}
            onChange={this.hanldeChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
          />
        </label>
        <label className={styles.label}>
          Number
          <input
            type="tel"
            name="number"
            className={styles.input}
            value={this.state.number}
            onChange={this.hanldeChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
          />
        </label>
        <div className={styles.button__wrapper}>
          <button type="submit" className={styles.button}>
            Add contact
          </button>
        </div>
      </form>
    );
  }
}
ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
