import HomePage from '../src/pages/Home/index';
import LoginPage from '../src/pages/LoginPage/index';
import LevelPage from '../src/pages/LevelPage/index';
import NewUser from '../src/pages/NewUser/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Validation from './components/validation';
import Menu from './pages/Menu';
import Profile from './pages/Profile/editProfile';

export default function AppRouter() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/usuario/novo' element={<NewUser />} />
          <Route path='/' element={<Validation />} >
            <Route path='/' element={<Menu />} >
              <Route path='/home' element={<HomePage />} />
              <Route path='/alunos' element={<HomePage />} />
              <Route path='/professor' element={<HomePage />} />
              <Route path='/instrumentos' element={<HomePage />} />
              <Route path='/videos' element={<HomePage />} />
              <Route path='/perfil' element={<Profile />} />
              <Route path='/nivel' element={<LevelPage />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </main>
  );
}