import { useEffect, useState, useContext } from "react";
import Header from "../components/Header";
import ItemCard from "../components/ItemCard";
import ItemCardCSS from "../styles/ItemCard.module.css";
import Loading from "../components/Loading";
import Sort from "../components/Sort";
import { loadProducts } from "../services/api";
import { AppContext } from '../context/AppContext';

const Women = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const { orderBy } = useContext(AppContext);

    useEffect(() => {
        setLoading(true);
        loadProducts("category/women's clothing")
            .then(data => setProducts(data))
            .finally(() => setLoading(false))
    }, [loadProducts]);
    
    if (loading) {
        return (
            <Loading />
        );
    }

    products.sort((a,b) => (
        orderBy === "Lowest - Highest" ? 
            a.price - b.price : 
            (orderBy === "Highest - Lowest" ? b.price - a.price : a.id - b.id)
    ));

    return (
        <>
            <Header />
            <main>
                <Sort products={products} />
                <div className={ItemCardCSS.catalog}>
                    {products.map((product) => (
                        <ItemCard 
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>
            </main>
        </>
    );
}

export default Women;