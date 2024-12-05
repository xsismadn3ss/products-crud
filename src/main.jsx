import { createRoot } from 'react-dom/client'
import { Route, Routes, BrowserRouter } from 'react-router'
import './index.css'
import App from './App.jsx'
import Home from './pages/home.jsx'
import NavBar from './components/nabvar.jsx'
import Products from './pages/products.jsx'
import Catalogo from './pages/catalogo.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/catalogo/products' element={<Products />} />
      <Route path='/catalogo' element={<Catalogo />} />
    </Routes>
  </BrowserRouter>
)
