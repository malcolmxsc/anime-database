import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import Hot from '../../components/Hot/Hot';
import { useGlobalAnime } from '../../components/GlobalAnimeProvider';

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
 
  return (
    
    <main>
      
      <h1>AuthPage</h1>
      <Hot/>
      <button onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'Sign Up'}</button>
      { showSignUp ?
          <SignUpForm setUser={setUser} />
          :
          <LoginForm setUser={setUser} />
      }
      
    </main>
    
  );
}