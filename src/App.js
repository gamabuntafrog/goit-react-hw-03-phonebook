import "./App.css";
import React, { Component } from "react";
import Form from "./Components/Form";
import Contacts from "./Components/Contacts";
import Filter from "./Components/Filter";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  OnDeleteItem = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((e) => e.id !== id),
    }));
    localStorage.setItem('a', '1')
  };

  addContact = (data) => {
    if (this.state.contacts.some((e) => e.name === data.name)) {
      alert("Такой контакт уже сущетсвует");
    } else {
      this.setState({
        contacts: this.state.contacts.concat(data),
      });
    }
  };

  handleState = (e) => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  visibleContacts = () => {
    return this.state.contacts.filter((el) => {
      return el.name.includes(this.state.filter);
    });
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'))
    console.log(contacts);

    if (contacts) {
      this.setState({contacts: contacts})
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      console.log('contacts did update');
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  render() {
    console.log(this.visibleContacts());
    return (
      <div className="App">
        <Form title={"Phonebook"} addContact={this.addContact} />
        <h1>Contacts</h1>
        <Filter handleState={this.handleState} />
        <Contacts
          contacts={this.visibleContacts()}
          handleState={this.handleState}
          OnDeleteItem={this.OnDeleteItem}
        />
      </div>
    );
  }
}

export default App;









// [
//       { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//       { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//       { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//       { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
//     ] 