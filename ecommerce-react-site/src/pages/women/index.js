import { useCallback, useEffect, useState } from "react";
import Header from "../../components/Header";
import ItemCard from "../../components/ItemCard";
import ItemCardCSS from "../../components/ItemCard.module.css"
import Loading from "../../components/Loading";

const Women = () => {
    let [products, setProducts] = useState([]);
    let [loading, setLoading] = useState(false);

    const fetchData = useCallback(() => {
        setLoading(true);
        fetch("https://fakestoreapi.com/products/category/women's clothing")
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