import { useCallback, useEffect, useState } from "react";
import Header from "../../components/Header";
import ItemCard from "../../components/ItemCard";
import ItemCardCSS from "../../styles/ItemCard.module.css";
import Loading from "../../components/Loading";
import Sort from "../../components/Sort";
import { loadProducts } from "../../services/api";

const Men = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);
        loadProducts("category/men's clothing")
            .then(data => setProducts(data))
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

export default Men;