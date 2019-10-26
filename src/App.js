import React, { Component } from 'react';
import ListContacts from './ListContacts';
import * as ContactsAPI from './utils/ContactsAPI';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      contacts: []
    }


    this.removeContact = contact => {
      this.setState(state => ({
        contacts: state.contacts.filter(c => c.id !== contact.id)
      }));
      ContactsAPI.remove(contact)
    }

  }

  componentDidMount() {
    ContactsAPI.getAll().then((contacts) => {
      this.setState({ contacts })
    })
  }

  render() {
    return (
      <div>
        <ListContacts onClickRemoveContact={this.removeContact} contacts={this.state.contacts} />
      </div>
    )
  }
}

export default App;