import './App.css';
import {Routes, Route } from 'react-router-dom'
import LandingPage from './Pages/LandingPage';
import Login from './Pages/Login';
import VideoRecorder from './components/VideoRecorder';
import Home from './Pages/Home';
import Profile from './Pages/Profile.js'
import ContactsPage from './Pages/ContactsPage';
import Notifications from './Pages/Notifications';
import SearchPage from './components/SearchPage';
import GiveRespectSearchPage from './components/GiveRespectSearchPage';
import SuggestName from './components/SuggestName';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/video' element={<VideoRecorder/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/contacts' element={<ContactsPage/>}></Route>
      <Route path='/:id' element={<Profile/>}></Route>
      <Route path='/notifications' element={<Notifications/>}></Route>
      <Route path='/search' element={<SearchPage/>}></Route>
      <Route path='/giveResectSearch' element={<GiveRespectSearchPage/>}></Route>
      <Route path='/suggestName' element={<SuggestName/>}></Route>
    </Routes>
  );
}

export default App;
