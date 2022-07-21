// import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import actions from 'redux/actions';
import styles from './InputForm.module.css';

function InputForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const onSubmit = (name, number) => {
    dispatch(actions.addContact(name, number));
  };
  const handleInputChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return new Error('');
    }
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    onSubmit({ name, number });
    resetForm();
  };
  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={styles['InputForm']} onSubmit={handleFormSubmit}>
      <label className={styles['InputForm__label']}>
        Name
        <input
          className={styles['InputForm__input']}
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={styles['InputForm__label']}>
        Number
        <input
          className={styles['InputForm__input']}
          type="tel"
          name="number"
          value={number}
          onChange={handleInputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button className={styles['InputForm__button']} type="submit">
        Add Contact
      </button>
    </form>
  );
}

export default InputForm;
