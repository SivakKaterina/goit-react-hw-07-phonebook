import { createAction } from '@reduxjs/toolkit';

export const fetchContactRequest = createAction('contacts/fetchContactRequest');
export const fetchContactSuccess = createAction('contacts/fetchContactSuccess');
export const fetchContactError = createAction('contacts/fetchContactError');

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');

export const deleteContactRequest = createAction(
  'contacts/deleteContactRequest',
);
export const deleteContactSuccess = createAction(
  'contacts/deleteContactSuccess',
);
export const deleteContactError = createAction('contacts/deleteContactError');

export const changeFilter = createAction('contacts/changeFilter');
// export const changeContactRequest = createAction('contacts/changeContactRequest');
// export const changeContactSuccess = createAction('contacts/changeContactSuccess');
// export const changeContactError = createAction('contacts/changeContactError');

// const addContact = createAction("contacts/add", ({ name, number }) => {
//   return {
//     payload: {
//       id: shortid.generate(),
//       name,
//       number,
//     },
//   };
// });
//  export const deleteContact = createAction("contacts/delete");

// export default {
//   addContactRequest,
//   addContactSuccess,
//   addContactError,
//   deleteContact,
//   changeFilter
// };
