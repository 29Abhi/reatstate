
import './App.css';
import Home from './Components/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import Property from './Components/Property'
import Register from './Components/Register'

function App() {
  return (
   <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path = "/" element={<Home/>} />
        <Route path = "/property" element={<Property/>} />
        <Route path = "/register" element={<Register/>} />
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
