import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import Button from '../../components/Button';
import './Register.scss';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     setShowLoading(true);
  //     setTimeout(() => {
  //       setShowLoading(false);
  //       setShowSuccess(true);
  //       setTimeout(() => {
  //         setShowSuccess(false);
  //         setShowError(true);
  //         setTimeout(() => {
  //           setShowError(false);
  //         }, 3000);
  //       }, 3000);
  //     }, 3000);
  //   };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'confirmPassword':
        setConfirmPassword(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="res-container">
      <div className="contain">
        <h1>Register</h1>
        <div className={error ? 'error' : 'success'}>
          {error}
          {success}
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <span className="input">
                <input
                  type={showPassword ? 'text' : 'password'}
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <span className="eye">
                  {showPassword ? (
                    <FiEyeOff onClick={() => setShowPassword(false)} />
                  ) : (
                    <FiEye onClick={() => setShowPassword(true)} />
                  )}
                </span>
              </span>
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <span className="input">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  value={confirmPassword}
                />
                <span className="eye">
                  {showConfirmPassword ? (
                    <FiEyeOff onClick={() => setShowConfirmPassword(false)} />
                  ) : (
                    <FiEye onClick={() => setShowConfirmPassword(true)} />
                  )}
                </span>
              </span>
            </div>
            <div className="form-group">
              <Button
                className="btn btn-primary"
                text="Register"
                type="submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
