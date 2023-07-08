import { useState, useEffect } from "react";
import Header from "../components/Header";
import ItemCard from "../components/ItemCard";
import Loading from "../components/Loading";
import Sort from "../components/Sort";
import { loadProducts } from "../services/api";
import ItemCardCSS from "../styles/ItemCard.module.css";

const Other = () => {
    const [jewelery, setJewelery] = useState([]);
    const [electronics, setElectronics] = useState([]);
    const [loading, setLoading] = useState(false);
    const products = [...jewelery, ...electronics];

    useEffect(() => {
        setLoading(true);
        loadProducts("category/jewelery")
            .then(data => setJewelery(data))
            
        loadProducts("category/electronics")
            .then(data => setElectronics(data))
            .finally(() => setLoading(false))

    }, [loadProducts]);

    if (loading) {
        return (
            <Loading />
        );
    }

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

export default Other;