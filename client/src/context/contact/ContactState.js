import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types';

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Brutus Jeffcoat',
        email: 'brutus@gmail.com',
        phone: '111-111-1111',
        type: 'professional',
      },
      {
        id: 2,
        name: 'Rocky Jeffcoat',
        email: 'Rocky@gmail.com',
        phone: '222-222-2222',
        type: 'personal',
      },
      {
        id: 3,
        name: 'Charley Jeffcoat',
        email: 'charley@gmail.com',
        phone: '333-333-3333',
        type: 'professional',
      },
      {
        id: 4,
        name: 'Lily Jeffcoat',
        email: 'lily@gmail.com',
        phone: '444-444-4444',
        type: 'personal',
      },
    ],
  };
  const [state, dispatch] = useReducer(contactReducer, initialState);
  //Add Contact

  //Delete Contact

  // Set Current Contact

  //Clear Current Contact

  //Update Contact

  //Filter Contact

  //Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
      }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
