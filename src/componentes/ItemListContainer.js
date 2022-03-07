import ItemCount from "./ItemCount";

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
        </main>
        </>
    )
}

export default ItemListContainer;