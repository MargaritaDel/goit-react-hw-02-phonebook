import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Contact from '../Data/Contact.json'
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactsList/ContactList';
import { Container } from './App.styled';


export class App extends Component {
  state = {

    contacts: Contact,
    filter: '',
  };

  addContact = (name, number) => {
    !this.state.contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    )
      ? this.setState(prevState => ({
          contacts: [
            ...prevState.contacts,
            { id: nanoid(), name: name, number: number },
          ],
        }))
      : alert(`${name} is already in contacts`);
  };

  handleChange = value => {
    this.setState({ filter: value });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        contact => contact.id !== contactId.id
      ),
    }));
  };

  getFilterContacts = () =>
    this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

  render() {
    const contacts = this.getFilterContacts();
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter onChange={this.handleChange} />
        <ContactList contacts={contacts} onDelete={this.deleteContact} />
      </Container>
    );
  }
}