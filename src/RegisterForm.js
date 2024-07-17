import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';

const RegisterForm = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    phone: '',
    email: '',
  });
  const [errors, setErrors] = useState({});
  const [isRegistered, setIsRegistered] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);


    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const validateForm = () => {
      const newErrors = {};
  
      // Validate username
      if (!formData.username) {
        newErrors.username = 'Username is required';
      }

      // Validate email
      if (!formData.email) {
        newErrors.email = 'Email is required';
      }
  
      // Validate password
      const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[a-z])(?=.*[0-9]).{8,}$/;
      if (!passwordRegex.test(formData.password)) {
        newErrors.password =
          'Password must contain at least one special symbol, one capital letter, one number and be at least 8 characters long';
      }
  
      // Validate confirm password
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
  
      // Validate phone
      if (!formData.phone) {
        newErrors.phone = 'Phone number is required';
      }
  
      setErrors(newErrors);
  
      return Object.keys(newErrors).length === 0;
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (validateForm()) {
        setIsRegistered(true);
      }
    };

  const handleCloseModal = () => {
    setIsRegistered(false);
    onLogin(); // Call the onLogin prop to switch to the login form
  };

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = (e) => {
    e.preventDefault();
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <>
      {isRegistered ? (
        <Modal
          show={isRegistered}
          message="Registration successful!"
          onClose={handleCloseModal}
        />
      ) : (
        <FormContainer>
          <h2>Register</h2>
          <form>
            <FormGroup>
              <label>Username:</label>
              <input
                type="text"
                name="username"
                placeholder="Enter name..."
                value={formData.username}
                onChange={handleChange}
                required
              />
              {errors.username && <Error>{errors.username}</Error>}
            </FormGroup>
            <FormGroup>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                placeholder="Enter email..."
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <Error>{errors.email}</Error>}
            </FormGroup>
            <FormGroup>
              <label>Phone Number:</label>
              <input
                name="phone"
                type="tel"
                placeholder="Enter number..."
                maxlength="10"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              {errors.phone && <Error>{errors.phone}</Error>}
            </FormGroup>
            <FormGroup>
              <label>Password:</label>
              <PasswordWrapper>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Enter password..."
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <ToggleButton onClick={togglePasswordVisibility}>
                  {showPassword ? 'Hide' : 'Show'}
                </ToggleButton>
              </PasswordWrapper>
              {errors.password && <Error>{errors.password}</Error>}
            </FormGroup>
            <FormGroup>
              <label>Re-enter Password:</label>
              <PasswordWrapper>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  placeholder="Confirm Password..."
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
                <ToggleButton onClick={toggleConfirmPasswordVisibility}>
                  {showConfirmPassword ? 'Hide' : 'Show'}
                </ToggleButton>
              </PasswordWrapper>
              {errors.confirmPassword && <Error>{errors.confirmPassword}</Error>}
            </FormGroup>
            <Button type="submit" onClick={handleSubmit}>Register</Button>
          </form>
        </FormContainer>
      )}
    </>

  //   <FormContainer>
  //   <h2>Register</h2>
  //   <form>
  //     <FormGroup>
  //       <label>Username:</label>
  //       <input type="text" required />
  //     </FormGroup>
  //     <FormGroup>
  //       <label>Email:</label>
  //       <input type="email" required />
  //     </FormGroup>
  //     <FormGroup>
  //       <label>Password:</label>
  //       <input type="password" required />
  //     </FormGroup>
  //     <Button type="submit" onClick={handleRegister}>Register</Button>
  //   </form>
  //   <Modal
  //       show={showModal}
  //       message="Registration successful!"
  //       onClose={handleCloseModal}
  //     />
  // </FormContainer>
  );
};

export default RegisterForm;

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

const Error = styled.div`
  color: red;
  font-size: 0.8em;
  margin-top: 5px;
`;

const PasswordWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ToggleButton = styled.button`
  margin-left: 10px;
  background: none;
  border: none;
  color: black;
  cursor: pointer;
  text-decoration: none;
`;