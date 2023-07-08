import DetailsCSS from '../../styles/Details.module.css';

const Sizing = ({products}) => {
    const sizes = ['S','M','L'];

    return (
        (products.category === "men's clothing" || products.category === "women's clothing") &&
            <div>
                {sizes.map(size => <input type='button' value={size} id={DetailsCSS.button} />)}
            </div>
    );
}

export default Sizing;