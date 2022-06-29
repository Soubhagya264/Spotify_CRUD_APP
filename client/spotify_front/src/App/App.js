import './App.css';
import Navbar from  '../components/Navbar';
import Footer from '../components/footer';
import Songs from '../components/Songs';
import AddingSong from '../components/AddingSong';

function App() {
  return (
    <>
      <Navbar />
      
      <AddingSong/>
      <Footer/>
    </>
  );
}

export default App;
