import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DeletarCategoria from './components/Categoria/DeletarCategoria';
import Home from './pages/Home';
import FormularioCategoria from './components/Categoria/Formulario';
import ListaCategoria from './components/Categoria/ListaCategoria';
// import ListaCategoria from './components/Categoria/ListaCategoria';


export function App() {
    return (
        <BrowserRouter>
            <Navbar />    
            <div className="min-h-[80vh]">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} /> 
                    <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
                    <Route path="/formularioCategoria" element={<FormularioCategoria />} />            
                    <Route path="/listaprodutos" element={<ListaCategoria />} />
                    <Route path="/cadastrarcategoria" element={<FormularioCategoria />} /> 
                </Routes>
            </div>  
            <Footer />
        </BrowserRouter>
    );
}