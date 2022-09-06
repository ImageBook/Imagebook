import './App.css';
import {Routes, Route } from 'react-router-dom'
import LandingPage from './Pages/LandingPage';
import Login from './Pages/Login';
import VideoRecorder from './components/VideoRecorder';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/video' element={<VideoRecorder/>}></Route>
    </Routes>
  );
}

export default App;
