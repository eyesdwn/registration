import React from 'react';
import { useSelector } from 'react-redux';
import '../Registration/styles.css';

const SuccessPage = () => {
  const userData = useSelector(state => state.user);
  return (
    <main className="main">
      <div className="registration-form">
        <h1 className="form-title">Welcome {userData.user.username}!</h1>
        <span>Your registration has been completed.</span>
      </div>
    </main>
  )
}

export { SuccessPage }