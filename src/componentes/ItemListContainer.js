import ItemCount from "./ItemCount";
import ItemList from './ItemList';
import products from '../products.json';
import ItemDetailContainer from "./ItemDetailContainer";

function ItemListContainer({greetings}) {

    const n = 10;

    return (
        <>
            <main>
                <div>
                    {[...Array(n)].map((e, i) => <p key={i}>{greetings}</p>)}
                    <p>{greetings}</p>
                    <ItemCount onAdd={() => console.log('Agregado al carrito')} />
                </div>
                <div>
                    <h2>INCENTIA cuenta con amplia gama de productos organicos</h2>
                    <ItemList list={products} />
                </div>
                <div>
                    <ItemDetailContainer productList={products}/>
                </div>
            </main>
        </>
    )
}

export default ItemListContainer;