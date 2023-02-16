import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';

import { Container, Title } from './App.styled';
import { GlobalStyles } from 'styles/globalStyles.styled';
import { Contacts, Form, Filter, Section, Notification } from '../index';

export function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filteredName, setFilteredName] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    if (contacts.some(c => c.name === name)) {
      alert(`Contact ${name} already exists!`);
      return;
    }
    if (contacts.some(c => c.number === number)) {
      alert(`Contact ${number} already exists!`);
      return;
    }
    setContacts(prevState => [{ id: nanoid(4), name, number }, ...prevState]);
  };

  const deleteContact = contactId => {
    const newContacts = contacts.filter(c => c.id !== contactId);
    setContacts(newContacts);
  };

  const handleFilter = event => {
    setFilteredName(event.target.value);
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filteredName.toLowerCase())
    );
  };

  return (
    <Container>
      <Title>Phonebook</Title>
      <Form addContact={addContact} />
      <Section title="Contacts">
        {contacts.length > 0 ? (
          <Contacts
            contacts={getFilteredContacts()}
            deleteContact={deleteContact}
          >
            {contacts.length > 1 ? (
              <Filter value={filteredName} filterChange={handleFilter} />
            ) : (
              ''
            )}
          </Contacts>
        ) : (
          <Notification message="There are no contacts in the phonebook yet..." />
        )}
      </Section>
      <GlobalStyles />
    </Container>
  );
}