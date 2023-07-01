import { useCallback, useEffect, useState } from "react";
import Header from "../../components/Header";
import ItemCard from "../../components/ItemCard";

const Men = () => {
    let [products, setProducts] = useState([]);

    const fetchData = useCallback(() => {
        fetch("https://fakestoreapi.com/products/category/men's clothing")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        fetchData()
    }, [fetchData]);

    return (
        <>
            <Header />
            <main>
                <div className='catalog'>
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