import ItemCardCSS from './ItemCard.module.css'

const ItemCard = ({product}) => {
    return (
        <div className={ItemCardCSS.card}>
            <img src={product.image} alt={product.title}/>
            <p>{product.title}</p>
            <p>${product.price}</p>
            <p>{product.rating.rate}</p>
        </div>
    );
}

export default ItemCard;