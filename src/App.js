import React from 'react';

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { NavBar } from "./componentes/NavBar";
import { ItemListContainer } from './componentes/ItemListContainer'
import { ItemDetailContainer } from "./componentes/ItemDetailContainer";

function App() {
    return (
        <BrowserRouter>
            <NavBar/>

            <Routes>

                <Route path="/" element={<ItemListContainer greeting={'HOME'} />} />

                <Route path="/categoria/:catId" element={<ItemListContainer greeting={'PRODUCTOS POR CATEGORIA'} />} />

                <Route path="/producto/:itemId" element={<ItemDetailContainer />} />

                <Route path="*" element={<Navigate to="/" />} />

            </Routes>

        </BrowserRouter>
    );
}

export default App;