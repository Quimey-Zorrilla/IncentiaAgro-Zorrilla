const Item = ({name, price}) => {

    return (
        <li>
            <button>
            <p>{name}</p>
            <h4>
                <span>${price}</span>
            </h4>
            </button>
        </li>
    )
}

export default Item;