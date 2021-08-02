import React from 'react';
import C from './contactList.module.css';
import { connect } from 'react-redux';
import { deleteContact, getVisibleContacts } from '../../redux/contacts';
// import { getVisibleContacts } from '../../redux/contacts/contacts-selector';

const ContactList = ({ contacts, onDeleteList }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        <span>{name}</span>
        <span>{number}</span>
        <button className={C.button} onClick={() => onDeleteList(id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

const mapStateToProps = state => ({
  contacts: getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteList: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
