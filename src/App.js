import React, { useState , useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import logo from './images/pngegg.png';
import Header from './Header';
import Tiles from './Tiles';
import FinanceTiles from './FinanceTiles';
import Attendance from './Attendance';

const App = () => {
  const [showPopup, setPopup] = useState(false);
  const [isLogin, setIsRegister] = useState(true);
  const [showForms, setShowForms] = useState(true);
  const [currentTiles, setCurrentTiles] = useState('employee');

  const toggleForm = () => {
    setIsRegister(!isLogin);
  };

  const showLoginForm = () => {
    setIsRegister(true);
  };

  const handleLogin = () => {
    setShowForms(false);
  };

  const handleLogout = () =>{
    setPopup(true);
  }

  const handleToggleTiles = (type) => {
    setCurrentTiles(type);
  };

  useEffect(() => {
    if (!showForms) {
      handleToggleTiles('employee'); // Show employee tiles by default when forms are hidden
    }
  }, [showForms]);

  const handleCancelClick = () =>{
    setPopup(false);
  }

  const handleLogoutClick = () =>{
    setPopup(false);
    setCurrentTiles('employee');
    setShowForms(true);
  }

  return (
<Router>
      <div className="app-container">
        {showForms ? (
          <div className="container">
            <div className="logo-section">
              <img src={logo} alt="Logo" className="logo" />
              <p className="paragraph">Welcome to Our Platform</p>
            </div>
            <div className="form-section">
              {isLogin ? (
                <LoginForm onLogin={handleLogin} />
              ) : (
                <RegisterForm onLogin={showLoginForm} />
              )}
              {isLogin ? ( <p> New User? Click here to<button className='toggle-link' onClick={toggleForm}>Register</button> </p> ) : (<p> Go back to<button className='toggle-link' onClick={toggleForm}>Login</button> </p>) }
            </div>
          </div>
        ) : (
          <>
            <Header onLogout={handleLogout} onToggle={handleToggleTiles} />
            <>
              {showPopup && (     
                <div className="popup">
                  <div className="popup-content">
                    <h2>Are you sure want to Logout!</h2>
                    <button onClick={handleCancelClick}>Cancel</button>
                    <button onClick={handleLogoutClick}>Logout</button>
                  </div>
                </div>
              )} 
            </>
            <Routes>
              <Route path="/user-details" element={<Attendance/>}></Route>
              <Route path="/" element={
                <>
                  {currentTiles === 'employee' && <Tiles label="Employee Tiles" />}
                  {currentTiles === 'finance' && <FinanceTiles label="Finance Tiles" />}
                </>
              }></Route>
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
};

export default App;

// const Container = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-around;
//   height: 100vh;
//   width: 100%;
//   background-image: url(${Background});
//   background-size: cover;
//   background-position: center;
//   background-repeat: no-repeat;
//   position: relative;
// `;

// const LogoSection = styled.div`
//   text-align: center;
// `;

// const Logo  = styled.img`
//   width: 100px;
//   height: 100px;
// `;

// const Paragraph = styled.p`
//   margin-top: 20px;
//   font-size: 1.2em;
//   color: white;
// `;

// const FormSection = styled.div`
//   background: #fff;
//   padding: 20px;
//   border-radius: 5px;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
// `;

// const ToggleLink = styled.button`
//   background: none;
//   font-size: 1em;
//   border: none;
//   color: blue;
//   cursor: pointer;
//   text-decoration: none;
// `;

// const Popup = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background: rgba(0, 0, 0, 0.5);
//   z-index: 9999999;
// `;

// const PopupContent = styled.div`
//   background: white;
//   padding: 20px;
//   border-radius: 5px;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//   display: flex;
//   flex-direction: column;

//   h2 {
//     margin-bottom: 20px;
//   }

//   button {
//     background-color: yellow;
//     color: black;
//     border: none;
//     padding: 10px 20px;
//     border-radius: 4px;
//     cursor: pointer;
//     font-size: 1em;
//     margin-top: 5px;

//     &:hover {
//       background-color: #yellow;
//     }
//   }
// `;
