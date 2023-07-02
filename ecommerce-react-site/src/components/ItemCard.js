import ItemCardCSS from '../styles/ItemCard.module.css';
import { Link } from 'react-router-dom';

const ItemCard = ({product}) => {
    return (
        <Link to={`/details/${product.id}`} style={{textDecoration: "none", color:"black"}} className={ItemCardCSS.card}>
            <img src={product.image} alt={product.title}/>
            <div>
                <p>{product.title}</p>
                <p>${product.price}</p>
            </div>
        </Link>
    );
}

export default ItemCard;