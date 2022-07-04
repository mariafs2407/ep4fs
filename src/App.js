//import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './common/Footer';
import Mainbar from './common/Mainbar';
import Destino from './components/Destino';
import Inicio from './home/Inicio';
import Guia from './components/Guia';
import Tienda from './components/Tienda';
import Categorias from './administracion/Categorias';

function App() {
  return (
    <BrowserRouter>      
      <Mainbar/>
      <main id='main-content'/>
      <Routes>
          <Route path='/' element={<Inicio/>} />  
          <Route path='/destino' element={<Destino/>} />    
          <Route path='/guia' element={<Guia/>} />
          <Route path='/tienda' element={<Tienda/>} />
          <Route path='/categoria' element={<Categorias/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
