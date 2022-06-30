import './App.css';
import Navbar from  '../components/Navbar';
import Footer from '../components/footer';
import Songs from '../components/Songs';
import AddingSong from '../components/AddingSong';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AddArtistModal from '../components/AddArtistModal';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Songs />} />
          <Route path="/addingSong" element={<AddingSong />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
