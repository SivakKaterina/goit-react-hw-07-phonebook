import React, { Component } from 'react';
import { connect } from 'react-redux';
import C from './contactForm.module.css';
import shortid from 'shortid';
import { addContact, getItems } from '../../redux/contacts';
// import { getItems } from '../../redux/contacts/contacts-selector';
class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

  handleChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  handleSubmit = e => {
    const { contacts, onSubmit } = this.props;
    const { name, number } = this.state;

    e.preventDefault();
    contacts.some(contact => contact.name === name)
      ? alert(`This person ${name} is already in contacts`)
      : contacts.some(contact => contact.number === number)
      ? alert(`This number ${number} is already in contacts`)
      : onSubmit(this.state);
    // this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className={C.form} onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>Name</label>
        <input
          className={C.input}
          id={this.nameInputId}
          value={this.state.name}
          onChange={this.handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов.             Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
        <label htmlFor={this.numberInputId}>Number</label>
        <input
          className={C.input}
          id={this.numberInputId}
          value={this.state.number}
          onChange={this.handleChange}
          type="tel"
          name="number"
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d            {1,9}"
          // title="Номер телефона должен состоять цифр и может содержать пробелы, тире,             круглые скобки и может начинаться с +"
          required
        />
        <button className={C.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  contacts: getItems(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) => dispatch(addContact(name, number)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
