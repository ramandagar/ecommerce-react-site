import { useState, useCallback, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import DetailsCSS from "../../styles/Details.module.css";
import Header from "../../components/Header";
import Loading from "../../components/Loading"; 
import DetailsForm from './DetailsForm';

const Details = () => {
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
                    <Link 
                        to={products.category === "men's clothing" ? '/men' : (products.category === "women's clothing" ? "/women" : "/other")}
                        style={{color: 'black'}}
                    >
                        {products.category === "men's clothing" ? 'Men' : (products.category === "women's clothing" ? "Women" : "Other")}
                    </Link>
                    <p>/</p>
                    <p>Details</p>
                </div>
                <div className={DetailsCSS.product}>
                    <img src={products.image} alt={products.title}/>
                    <DetailsForm products={products}/>
                </div>
            </main>
        </>
    );
}

export default Details;