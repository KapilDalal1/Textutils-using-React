import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';


function App() {
  return (
    <>
    <Navbar Title= "My-App"/>
    <div className="container my-3" >
    <TextForm heading = "Ananlyze the words below"/>
    <About/>
    </div>
    
    </>
  );
}

export default App;
