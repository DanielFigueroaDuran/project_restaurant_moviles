import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from "./components/pages/HomePage";
import './App.css'
import MenuCart from './components/pages/MenuCart';
import Navbar from './components/Navbar';
import Checkout from './components/pages/Checkout';
import Success from './components/pages/Success';

function App() {

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/menuCart' element={<MenuCart />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/success' element={<Success />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
