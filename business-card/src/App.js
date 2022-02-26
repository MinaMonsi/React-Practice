import './App.css';
import Bio from "./components/Bio";
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">

    <div className='card-container'>
      <Header />
      <Bio />
      <Footer />
      </div>
    </div>
  );
}

export default App;
