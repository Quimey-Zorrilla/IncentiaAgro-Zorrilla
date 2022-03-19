import { Navigate, Route, Routes } from "react-router-dom";
import Carrito from "../pages/Carrito";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";

function Main() {
    return(
        <main>
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                
                <Route path="/categoria/:catId" element={<ItemListContainer greeting={'Productos por categoria'} />} />
                
                <Route path="/producto/:itemId" element={<ItemDetailContainer />} />
                
                <Route path="/carrito" element={<Carrito />} />
                
                <Route path="*" element={<Navigate to="/"/>} />
            </Routes>
        </main>
    );
}

export default Main;