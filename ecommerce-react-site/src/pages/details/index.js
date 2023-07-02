import { useState, useCallback, useEffect } from 'react';
import { useParams } from "react-router-dom";
import DetailsCSS from "../../styles/Details.module.css";
import Header from "../../components/Header";
import Loading from "../../components/Loading";

const Details = ({page}) => {
    let [products, setProducts] = useState([]);
    let [loading, setLoading] = useState(false);
    const params = useParams();

    const fetchData = useCallback(() => {
        setLoading(true);
        fetch(`https://fakestoreapi.com/products/${params.id}`)
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
                <div className={DetailsCSS.nav}>
                    <button>{page}</button>
                    <p>/</p>
                    <p>Details</p>
                </div>
                <div className={DetailsCSS.product}>
                    <img src={products.image} alt=""/>
                    <div className={DetailsCSS.description}>
                        <p>{products.title}</p>
                        <p>${products.price}</p>
                        <p></p>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Details;