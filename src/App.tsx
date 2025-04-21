
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DeletarCategoria from './components/Categoria/DeletarCategoria';
import Home from './pages/Home';
import FormularioCategoria from './components/Categoria/Formulario';
import CardCategoria from './components/Categoria/CardCategoria';

// import FormularioCategoria from './components/Categoria/FormularioCategoria';

function App() {
    return (
        <>
        <BrowserRouter>
        <Navbar />    
        <div className="min-h-[80vh]">
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} /> 
            <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
            <Route path="/FormularioCategoria" element={<FormularioCategoria />} />
           {/* <Route path="/categorias" element={<ListaCategorias />} /> */}
            <Route path="/cadastrarCategoria" element={<FormularioCategoria />} />
            <Route path="/CardCategoria" element={<CardCategoria tema={undefined} />} />
            
            
            </Routes>
        </div>  
        <Footer />
        </BrowserRouter>
        </>
    );
}

export default App
