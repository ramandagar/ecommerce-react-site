import { useState, useCallback, useEffect } from 'react';
import { useParams, useNavigate, Link } from "react-router-dom";
import DetailsCSS from "../../styles/Details.module.css";
import Header from "../../components/Header";
import Loading from "../../components/Loading"; 
import { VscChevronDown, VscChevronUp } from 'react-icons/vsc';

const Details = ({page}) => {
    let [products, setProducts] = useState([]);
    let [loading, setLoading] = useState(false);
    let [description, setDescription] = useState(true);
    const params = useParams();
    const navigate = useNavigate();

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
                        to={products.category == "men's clothing" ? '/men' : (products.category == "women's clothing" ? "/women" : "/other")}
                        style={{color: 'black'}}
                    >
                        {products.category == "men's clothing" ? 'Men' : (products.category == "women's clothing" ? "Women" : "Other")}
                    </Link>
                    <p>/</p>
                    <p>Details</p>
                </div>
                <div className={DetailsCSS.product}>
                    <img src={products.image} alt=""/>
                    <div>
                        <h2>{products.title}</h2>
                            <h3>${products.price}</h3>
                            {/* <div>
                                <p>stars</p>
                                <p>{products.rating.rate}</p>
                            </div> */}
                        <hr/>
                        <div className={DetailsCSS.description}>
                            <div>
                                <h3>Description</h3>
                                {
                                    description ? 
                                        <VscChevronUp style={{width: '20px', height:'auto'}} onClick={() => setDescription(!description)} className={DetailsCSS.toggle}/> :
                                        <VscChevronDown style={{width: '20px', height:'auto'}} onClick={() => setDescription(!description)} className={DetailsCSS.toggle}/>
                                }
                             </div>
                            <p>{description && products.description}</p>
                        </div>
                        
                    </div>
                </div>
            </main>
        </>
    );
}

export default Details;