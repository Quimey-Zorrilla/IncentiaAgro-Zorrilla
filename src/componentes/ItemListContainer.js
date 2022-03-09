import ItemCount from "./ItemCount";
import ItemList from './ItemList';
import products from '../products.json';

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
            </main>
        </>
    )
}

export default ItemListContainer;