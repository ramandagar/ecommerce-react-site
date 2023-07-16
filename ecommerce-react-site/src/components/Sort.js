import ItemCardCSS from '../styles/ItemCard.module.css';

const Sort = ({products, orderBy, setOrderBy}) => {
    return (
        <div className={ItemCardCSS.sort}>
            <p>{products.length} Items</p>
            <div>
                <label htmlFor="sort">Sort:</label>
                <select id="sort" value={orderBy} onChange={(event) => setOrderBy(event.target.value)}>
                    <option value="Best Selling">Best Selling</option>
                    <option value="Highest - Lowest">Highest - Lowest</option>
                    <option value="Lowest - Highest">Lowest - Highest</option>
                </select>
            </div>
        </div>
    );
}

export default Sort;