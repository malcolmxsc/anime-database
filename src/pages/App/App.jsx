import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import { useGlobalAnime } from '../../components/GlobalAnimeProvider';
import Hot from '../../components/Hot/Hot';
import AnimeItem from '../../components/AnimeItem';
import SignUpForm from '../../components/SignUpForm/SignUpForm';


export default function App() {
  const global = useGlobalAnime()
  console.log(global)
  const [user, setUser] = useState(getUser());
  const navigate = useNavigate();

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              <Route path = "/" element={<Hot />} />
              <Route path = "/anime/:id" element ={<AnimeItem />} />
              
            </Routes>
          </>
          :
          
          <AuthPage setUser={setUser} />

          // unblock to show auth page <AuthPage setUser={setUser} />
      }
    </main>
  );
}
