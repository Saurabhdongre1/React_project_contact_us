
import './App.css';
import Contact_form from './Components/Contact-form/Contact_form';
import Contact_Header from './Components/Contact_header/Contact_Header';
import Navbar from './Components/Navigation/Navbar';

function App() {
  return (
   <div>
    <Navbar/>
    <main className='main_container'>
    <Contact_Header/>
    <Contact_form/>
    </main>
    
   </div>
  );
}

export default App;
