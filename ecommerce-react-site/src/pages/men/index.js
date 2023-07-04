import { useCallback, useEffect, useState } from "react";
import Header from "../../components/Header";
import ItemCard from "../../components/ItemCard";
import ItemCardCSS from "../../styles/ItemCard.module.css";
import Loading from "../../components/Loading";
import Sort from "../../components/Sort";

const Men = () => {
    let [products, setProducts] = useState([]);
    let [loading, setLoading] = useState(false)

    const fetchData = useCallback(() => {
        setLoading(true);
        fetch("https://fakestoreapi.com/products/category/men's clothing")
            .then(res => res.json())
            .then(data => setProducts(data))
            .finally(() => setLoading(false))
    }, []);

    useEffect(() => {
        fetchData()
    }, [fetchData]);

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