import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { isValidEmail } from '../../utils';
import { ActionCreators } from '../../actions/user';
import './styles.css'

const RegisterPage = () => {
  const [user, setUser] = useState({
      username: '',
      email: '',
  });
  const [errors, setErrors] = useState({
    username: 'Enter username',
    email: 'Email is not valid!',
  })
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(user => ({ ...user, [name]: value }));
    validationErrorMessage(e)
  }

  const validationErrorMessage = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case 'username':
        setErrors({
          ...errors,
          username: value.length < 3 ? 'The username should be at least 4 symbols' : '',
        })
        break;
      case 'email':
        setErrors({
          ...errors,
          email: isValidEmail(value) ? '' : 'Email is not valid!',
        })
        break;
      default:
        break;
    }
  }

  const validateForm = (errors) => {
    let valid = true;
    Object.entries(errors).forEach(item => {
      item && item[1].length > 0 && (valid = false)
    })
    return valid;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);
    if (validateForm(errors) && user.username && user.email) {
      dispatch(ActionCreators.registerUser(user));
      history.push('/register-second-step')
    }
  }

  return (
    <main className="main">
      <div className="registration-form">
        <h2 className="form-title">Create a new account</h2>
        <div className="field-wrapper">
          <label className="form-label">Username</label>
          <input className="text-input" type="text" value={user.username} name="username" onChange={(e) => {handleChange(e)} } placeholder="username" />
        </div>
        {submitted && errors.username.length > 0 &&  <span className='error'>{errors.username}</span>}
        <div className="field-wrapper">
          <label htmlFor="email" className="form-label">Email</label>
          <input className="text-input" type="email" value={user.email} name="email" onChange={(e) => {handleChange(e)} } id="email" placeholder="test@mail.com" />
        </div>
        { submitted && errors.email.length > 0 &&  <span className='error'>{errors.email}</span>}
        <div className="button-wrapper">
          <button type="button" className="button" onClick={handleSubmit}>Next</button>
        </div>
      </div>
    </main>
  )
}

export { RegisterPage };