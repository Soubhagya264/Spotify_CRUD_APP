import './App.css';
import Navbar from  '../components/Navbar';
import Footer from '../components/footer';
import Songs from '../pages/Songs';
import AddingSong from '../components/AddingSong';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AddArtistModal from '../components/AddArtistModal';
import Add_Artist from '../components/Add_Artist';
import Login from '../pages/login';
import SignUp from '../pages/signup';
import Artist from '../pages/Artist';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Songs />} />
          <Route path="/login" element={<Login/> } />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/addingSong" element={<AddingSong />} />
          <Route path="/addArtistModal" element={<AddArtistModal />} />
          <Route path="/addArtist" element={<Add_Artist />} />
          <Route path="/artist" element={<Artist />} />
          
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
