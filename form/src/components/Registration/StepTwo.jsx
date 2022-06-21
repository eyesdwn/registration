import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { ActionCreators } from '../../actions/user';
import './styles.css'

const RegisterPageStepTwo = () => {
  const userData = useSelector(state => state.user);

  const [user, setUser] = useState({
    password: '',
    confirmationPassword: '',
  });
  const [errors, setErrors] = useState({
    password: 'Enter password',
    confirmationPassword: 'Confirm the password',
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
      case 'password':
        setErrors({
          ...errors,
          password: value.length < 6 ? 'Password should be at least 6 characters' : '',
        })
        break;
      case 'confirmationPassword':
        setErrors({
          ...errors,
          confirmationPassword: user.password === value ? '' : 'Passwords are not matching',
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
    if (validateForm(errors) && user.password && user.confirmationPassword) {
      dispatch(ActionCreators.registerUser({ ...user, ...userData.user }));
      history.push('/success')
    }
  }

  return (
    <main className="main">
      <div className="registration-form">
        <h2 className="form-title">Create a new account</h2>
        <div className="field-wrapper">
          <label className="form-label">Password</label>
          <input type="password" value={user.password} name="password" onChange={(e) => {handleChange(e)} } className="text-input" placeholder="Password" />
        </div>
        {submitted && errors.password.length > 0 &&  <span className='error'>{errors.password}</span>}
        <div className="field-wrapper">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="password" value={user.confirmationPassword} name="confirmationPassword" onChange={(e) => {handleChange(e)} } className="text-input" id="confirmationPassword" placeholder="Confirm entered password" />
        </div>
        { submitted && errors.confirmationPassword.length > 0 &&  <span className='error'>{errors.confirmationPassword}</span>}
        <div className="button-wrapper">
        <button type="button" className="button" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </main>
  )
}

export { RegisterPageStepTwo };