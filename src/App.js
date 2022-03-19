import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './componentes/Header';
import Main from './componentes/Main';
import Footer from './componentes/Footer';

function App() {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <Main/>
                <Footer/>
            </BrowserRouter>
        </>
    );
}

export default App;