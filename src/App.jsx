// import { Component } from 'react';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from './components/Container/Container';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import { nanoid } from 'nanoid'


import styles from './App.module.css';

const App = () => {
  const [contacts, setContacts] = useState(()=>JSON.parse(localStorage.getItem('contacts')) ?? [ ]);
  const [filter, setFilter] = useState('');


useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
     return toast(`${name} is already in contacts`);

    }
    if (contacts.find(contact => contact.number === number)) {
      return toast(`${number} is already in contacts`);

    }
    setContacts(prevState => [newContact, ...prevState].sort((first, second) => first.name.localeCompare(second.name)));
    return true;
  };


  const handleFilter = evn => {
      setFilter(evn.currentTarget.value)
  }

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

    const visibleContacts = contacts.filter(element =>
      element.name.toUpperCase().includes(filter.toUpperCase())
    );

       return (
      <Container>
        <h1 className={styles.title}>Phonebook</h1>
         <ToastContainer autoClose={3000} />
        <ContactForm onSubmit={addContact} />
        <h2 className={styles.title}>Contacts</h2>
        <Filter value={filter} onChange={handleFilter}/>
      <ContactList
            contacts={visibleContacts}
            onDelete={deleteContact}
          />
      </Container>
  )
}

export default App;

