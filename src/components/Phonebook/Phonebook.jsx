import React, { Component } from 'react';
import { nanoid } from 'nanoid';


import Contacts from 'components/Contacts/Contacts';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

class Phonebook extends Component {
  // static defaultProps = {
  // }
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    // name: '',
    // number: '',
  };

  creatUser = user => {
    const newUser = {
      ...user,
      id: nanoid(),
    };
    //======
    const existUser = this.state.contacts.find(
          contact => contact.name === user.name
        );
      
        if (existUser) {
        return  alert("This name already exists!");
          
      }
      //========
    this.setState(prevState => ({
      contacts: [newUser, ...prevState.contacts],
     
    }));
   
  };

  deletList = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    console.log(e);
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();

    const visibleContact = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
     
    );
    return visibleContact;
    
  };

  render() {
    const { filter } = this.state;
    // const visibleContact = this.getVisibleContacts()

    return (
      <div>
        <h1>Phonebook</h1>
        <Contacts creatUser={this.creatUser} />
        <h2>Contact</h2>
        <Filter value={filter} onChange={this.changeFilter} />

        <ContactList
          contacts={this.getVisibleContacts()}
          //contacts={visibleContact}
          onDeleteList={this.deletList}
        />
      </div>
    );
  }
}
export default Phonebook;