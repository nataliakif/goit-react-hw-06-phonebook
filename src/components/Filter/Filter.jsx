import PropTypes from 'prop-types';
import styles from './Filter.module.css';
import { connect } from 'react-redux';
import actions from 'redux/actions';

const Filter = ({ filter, onChange }) => {
  return (
    <label className={styles['InputForm__label']} htmlFor={filter}>
      Find contacts by name
      <input
        className={styles['InputForm__input']}
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
      />
    </label>
  );
};
Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

const mapStateProps = state => ({ value: state.contacts.filter });
const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(actions.changeFilter(e.target.value)),
});

export default connect(mapStateProps, mapDispatchToProps)(Filter);
