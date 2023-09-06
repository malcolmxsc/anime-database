import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import { useGlobalAnime } from '../../components/GlobalAnimeProvider';
import Hot from '../../components/Hot/Hot';
import AnimeItem from '../../components/AnimeItem';


export default function App() {
  const global = useGlobalAnime()
  console.log(global)
  const [user, setUser] = useState(getUser());

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
          <Routes>
              <Route path = "/" element={<Hot />} />
              <Route path = "/anime/:id" element ={<AnimeItem />} />
              
            </Routes>

          // unblock to show auth page <AuthPage setUser={setUser} />
      }
    </main>
  );
}
