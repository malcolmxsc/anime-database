import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components'; // Import styled from styled-components
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

// Define a styled component for the main container
const AuthPageContainer = styled.main`
  text-align: center;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 0 auto;
`;

const AuthPageHeading = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const AuthPageButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin: 10px;
`;

const AuthPageLink = styled(Link)`
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
`;

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  const navigate = useNavigate();

  const goToSignUp = () => {
    navigate('/signup');
  };

  return (
    <AuthPageContainer>
      <AuthPageHeading>AuthPage</AuthPageHeading>
      <AuthPageButton onClick={() => setShowSignUp(!showSignUp)}>
        {showSignUp ? 'Log In' : 'Sign Up'}
      </AuthPageButton>
      {showSignUp ? <SignUpForm setUser={setUser} /> : <LoginForm setUser={setUser} />}
      {!showSignUp && (
        <p>
          Don't have an account?{' '}
          <AuthPageLink to="/signup" onClick={goToSignUp}>
            Sign Up
          </AuthPageLink>
        </p>
      )}
    </AuthPageContainer>
  );
}