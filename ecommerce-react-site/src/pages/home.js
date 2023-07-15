import Header from "../components/Header";
import heroPhoto from "../assets/clothes.jpg";
import HomeCSS from "../styles/Home.module.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const pageLinks = [
        {page: '/new', image: heroPhoto, text: 'New'},
        {page: '/men', image: heroPhoto, text: 'Men'},
        {page: '/women', image: heroPhoto, text: 'Women'},
        {page: '/other', image: heroPhoto, text: 'Other'},
    ];
    const navigate = useNavigate();

    return (
        <>
            <Header />
            <main className={HomeCSS.home}>
                <div className={HomeCSS.hero}>
                    <img src={heroPhoto} alt="clothes"/>
                    <div className={HomeCSS.modal}>
                        <h1>Summer Sale</h1>
                        <h2>Up to 60% off</h2>
                        <button onClick={() => navigate('/new')}>SHOP NOW</button>
                    </div>
                </div>
                <div className={HomeCSS.features}>
                    <div>
                        <p>Free Shipping</p>
                    </div>
                    <div>
                        <p>30 Days Return</p>
                    </div>
                    <div>
                        <p>Full Refund</p>
                    </div>
                </div>
                <div className={HomeCSS.pages}>
                    {
                        pageLinks.map((page) => (
                            <div className={HomeCSS.container} onClick={() => navigate(page.page)}>
                                <img src={page.image} alt={page.text}/>
                                <h2>{page.text}</h2>
                            </div>
                        ))
                    }
                </div>
            </main>
        </>
    );
}

export default Home;