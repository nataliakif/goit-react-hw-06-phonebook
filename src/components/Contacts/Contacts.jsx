import PropTypes from 'prop-types';
import React from 'react';
import styles from './Contacts.module.css';
import { connect } from 'react-redux';
import actions from 'redux/actions';

const Contacts = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={styles['Contacts__list']}>
      {contacts.map(({ name, number, id }) => (
        <li className={styles['Contacts__item']} key={id}>
          <p className={styles['Contacts__name']}>{name}</p>
          <p className={styles['Contacts__number']}>{number}</p>
          <button
            className={styles['Contacts__button']}
            type="button"
            onClick={() => {
              onDeleteContact(id);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

Contacts.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func,
};
const filteredContacts = (contacts, filter) => {
  const lowerCase = filter.toLowerCase();
  return contacts.filter(contact => {
    return contact.name.toLowerCase().includes(lowerCase);
  });
};
const mapStateProps = state => ({
  contacts: filteredContacts(state.contacts.items, state.contacts.filter),
});
const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(actions.deleteContact(id)),
});
export default connect(mapStateProps, mapDispatchToProps)(Contacts);
