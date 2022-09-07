import './App.css';
import {Routes, Route } from 'react-router-dom'
import LandingPage from './Pages/LandingPage';
import Login from './Pages/Login';
import VideoRecorder from './components/VideoRecorder';
import Home from './Pages/Home';
import Notifications from './Pages/Notifications';
import SearchPage from './components/SearchPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/video' element={<VideoRecorder/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/notifications' element={<Notifications/>}></Route>
      <Route path='/search' element={<SearchPage/>}></Route>
    </Routes>
  );
}

export default App;
