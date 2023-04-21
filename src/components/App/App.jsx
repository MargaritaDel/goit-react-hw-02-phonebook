import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactsList/ContactList';
import { Container } from './App.styled';


export class App extends Component {
  state = {

    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
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


    componentDidMount() {
      const savedContacts = localStorage.getItem('contacts');
      if (savedContacts !== null) {
        const parsedContacts = JSON.parse(savedContacts);
        this.setState({ contacts: parsedContacts });
      } else {
        this.setState({ contacts: this.contacts });
      }
    }
  
    componentDidUpdate(_, prevState) {
      if (prevState.contacts !== this.state.contacts) {
        localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
      }
    }

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