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
    const [orderBy, setOrderBy] = useState("Best Selling");

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

    products.sort((a,b) => (
        orderBy === "Lowest - Highest" ? 
            a.price - b.price : 
            (orderBy === "Highest - Lowest" ? b.price - a.price : a.id - b.id)
    ));

    return (
        <>
            <Header />
            <main>
                <Sort 
                    products={products} 
                    orderBy={orderBy}
                    setOrderBy={setOrderBy}
                />
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