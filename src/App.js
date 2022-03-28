import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './componentes/Header';
import Main from './componentes/Main';
import Footer from './componentes/Footer';
import {CartContextProvider} from './componentes/CartContext';

function App() {
    return (
        <>
            <CartContextProvider>
                <BrowserRouter>
                    <Header/>
                    <Main/>
                    <Footer/>
                </BrowserRouter>
            </CartContextProvider>
        </>
    );
}

export default App;