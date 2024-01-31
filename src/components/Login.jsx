// LoginPage.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginAsync, selectIsAuthenticated } from '../features/authslice';
import { useNavigate,useLocation } from 'react-router-dom';
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const navigate = useNavigate();
  const location = useLocation();
  console.log ("location", location )

  // const prevPath = localStorage.getItem('prevPath');
  //   localStorage.removeItem('prevPath'); 

    // const prevLocation = ((location.?state?.prevUrl));
    

  const handleLogin = () => {
    // sessionStorage.setItem('beforeLogin', location.state?.from?.pathname);
    dispatch(loginAsync({ email, password }));
    // navigate (location?.state?.prevUrl)
    console.log(location)
    console.log(location.state)
    // console.log(location.state.prevUrl)
    // if (location.state?.from.pathname) {
    //   navigate(location.state.from.pathname);
    // }
    
    
  };

  return (
    <div>
      <h2>Login Page</h2>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <br />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <br />
      <button type="button" onClick={handleLogin} disabled={isAuthenticated}>
        {isAuthenticated ? 'Logging in...' : 'Login'}
      </button>
    </div>
  );
};

export default LoginPage;
