import React, { useState } from 'react';
import styled from 'styled-components';

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    // Perform login logic here
    onLogin();
    // setError('');
    // try {
    //   const response = await fetch('/api/login', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ email, password }),
    //   });

    //   if (response.ok) {
    //     const data = await response.json();
    //     console.log('Login successful:', data);
    //   } else {
    //     const errorData = await response.json();
    //     setError(errorData.message || 'Login failed');
    //   }
    // } catch (error) {
    //   setError('An error occurred. Please try again later.');
    // }

  };

  return (
    <FormContainer>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <FormGroup>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email..." required />
        </FormGroup>
        <FormGroup>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password..." pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9]).{8,}"  required />
        </FormGroup>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <Button type="submit">Login</Button>
      </form>
    </FormContainer>
  );
};

export default LoginForm;

const FormContainer = styled.div`
  width: 300px;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  h2{
  margin-top: 0px;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 15px;

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }

  input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;

  &:hover {
    background-color: #218838;
  }
`;