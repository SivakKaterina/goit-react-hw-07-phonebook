import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import Section from './components/Section';
import { fetchContact } from './redux/contacts/contacts-operations';
// import { getLoading } from './redux/contacts/contacts-selector';
// import contacts from './data/contacts.json'

class App extends Component {
  componentDidMount() {
    this.props.fetchContact();
  }

  render() {
    return (
      <div className="container">
        <Section title={'Phonebook'}>
          <ContactForm onSubmit={this.formSubmitHandler} />
        </Section>

        <Section title={'Contacts'}>
          <Filter />
          <ContactList />
        </Section>
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   isLoadingContacts: getLoading(state),
// });

const mapDispachToProps = dispatch => ({
  fetchContact: () => dispatch(fetchContact()),
});
export default connect(null, mapDispachToProps)(App);
