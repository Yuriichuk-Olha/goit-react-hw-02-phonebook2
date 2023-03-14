import React, { Component } from 'react';
import css from 'components/Contacts/Contacts.module.css';

class Contacts extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault(); 
    //  !=================================================
    //              можна ще так якщо є тільки name, number
    //         2 sposib    this.props.creatUser(this.state)
    //   !==================================================
    //       1 sposib
    this.props.creatUser({
      name: this.state.name,
      number: this.state.number,
    });
    //==============
  


    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form className={css.container} onSubmit={this.handleSubmit}>
        <div>
          <label className={css.contactName} htmlFor="name">
            Name
          </label>
          <input
            className={css.formInput}
            name="name"
            type="text"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
            onChange={this.handleChange}
            value={this.state.name}
          />
        </div>
        <div>
          <label className={css.contactName} htmlFor="number">
            Number
          </label>
          <input
            className={css.formInput}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
            value={this.state.number}
          />
        </div>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
export default Contacts;