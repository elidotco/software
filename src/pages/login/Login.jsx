import { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import Button from '../../components/Button';
import './login.scss';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    console.log(email);
    e.preventDefault();
    setData({ email, password });
    console.log(data);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="res-container">
      <div className="contain">
        <h1>Login</h1>
        <div className={error ? 'error' : 'success'}>
          {error}
          {success}
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="form-group">
                <label htmlFor="role">Please Select your role</label>
                <select name="role" id="roles">
                  <option value="dis">..</option>
                  <option value="Admin">Admin</option>
                  <option value="manager">Manager</option>
                  <option value="supervisor">Supervisor</option>
                  <option value="employee">Employee</option>
                </select>
              </div>
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
              <Button className="btn btn-primary" text="Login" type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
