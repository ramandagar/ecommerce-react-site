import ItemCardCSS from './ItemCard.module.css'

const ItemCard = ({product}) => {
    return (
        <div className={ItemCardCSS.card}>
            <img src={product.image} alt={product.title}/>
            <div>
                <p>{product.title}</p>
                <p>${product.price}</p>
            </div>
        </div>
    );
}

export default ItemCard;