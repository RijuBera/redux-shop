import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './componect/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
function App() {
  return (
    <div className='full'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
