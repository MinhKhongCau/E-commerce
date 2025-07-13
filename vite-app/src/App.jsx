import './App.css'
import './index.css';
import './assets/style.css'
import { Routes, Route } from "react-router-dom"
import DefaultLayout from "./layout/DefaultLayout.jsx";
import Favorite from './pages/Favorite.jsx';
import Home from './pages/Home.jsx'
import { useState, useEffect } from 'react'
import { fetchAllProducts } from './service/GetData.js';

function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const loadProducts = async () => {
            const data = await fetchAllProducts();
            setProducts(data);
        };
        loadProducts();
    }, []);

    return (
        <Routes>
            <Route element={<DefaultLayout/>}>
                <Route path="/" element={<Home products={products} setProducts={setProducts}/>} />
                <Route path="/favorite" element={<Favorite products={products} setProducts={setProducts}/>} />
            </Route>
        </Routes>
    )
}

export default App
