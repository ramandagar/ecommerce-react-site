const Sizing = ({products}) => {
    return (
        (products.category == "men's clothing" || products.category == "women's clothing") &&
            <div>
                <button>S</button> <button>M</button> <button>L</button>
            </div>
    );
}

export default Sizing;