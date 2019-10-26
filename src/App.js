import React from 'react';
import logo from './logo.svg';
import './App.css';

class ContactList extends React.Component {
  render() {
    const people = this.props.contacts;
    return <ol>
      {people.map(person => (
        <li key={person.name}>{person.name}</li>
      ))}
    </ol>
  }
}

function App() {
  return (
    <div className="App">
      <ContactList contacts={[
        {name : 'Dhananjay'},
        {name : 'Lala'}
      ]} />
      <ContactList contacts={[
        {name : 'Piyush'},
        {name : 'Rishbh'}
      ]} />
    </div>
  );
}

export default App;
