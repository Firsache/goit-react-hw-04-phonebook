import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useLocalStorage } from 'hooks/useLocalStorage';

import { Container, Title } from './App.styled';
import { GlobalStyles } from 'styles/GlobalStyles/globalStyles.styled';
import { colors } from 'styles/colors';
import { theme } from '../../styles/theme';
import {
  Layout,
  Contacts,
  Form,
  Filter,
  Section,
  Notification,
  ThemeSwitcher,
  Box,
} from '../index';

export function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filteredName, setFilteredName] = useState('');
  const [themeTitle, setThemeTitle] = useState('light');

  const switchTheme = () => {
    setThemeTitle(prevState => (prevState === 'light' ? 'dark' : 'light'));
  };

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
  const normalizedTheme = { ...theme, ...colors[themeTitle] };

  return (
    <Layout theme={normalizedTheme}>
      <Box as="section">
        <Box position="relative" py={4} as="div">
          <Title>Phonebook</Title>
          <ThemeSwitcher switchTheme={switchTheme} themeTitle={themeTitle} />
        </Box>
        <Container>
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
      </Box>
    </Layout>
  );
}
