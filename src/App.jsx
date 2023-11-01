import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from "./components/pages/HomePage";
import './App.css'
import MenuCart from './components/pages/MenuCart';
import Navbar from './components/Navbar';
import Copyright from './components/Copyright';

function App() {

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/menu' element={<MenuCart />} />
            </Routes>
            <Copyright />
        </BrowserRouter>
    )
}

export default App
