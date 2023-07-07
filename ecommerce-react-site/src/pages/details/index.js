import { useState, useCallback, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import DetailsCSS from "../../styles/Details.module.css";
import Header from "../../components/Header";
import Loading from "../../components/Loading"; 
import DetailsForm from './DetailsForm';
import { loadProducts } from '../../services/api';

const Details = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const params = useParams();

    useEffect(() => {
        setLoading(true);
        loadProducts(params.id)
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