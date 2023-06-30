import { useState, useEffect, useCallback } from 'react';
import Header from "../../components/Header";

const Home = () => {
    let [products, setProducts] = useState([]);

    const fetchData = useCallback(() => {
        fetch('https://fakestoreapi.com/products')
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
                <h1>Home page</h1>
            </main>
        </>
    );
}

export default Home;