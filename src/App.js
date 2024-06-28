
import './App.css';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div>
      <nav className='bg-slate-900'>
        <Navbar/>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
