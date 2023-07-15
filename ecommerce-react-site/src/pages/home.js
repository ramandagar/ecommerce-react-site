import Header from "../components/Header";
import heroPhoto from "../assets/clothes.jpg";
import mensClothing from "../assets/mens_clothing.png";
import womensClothing from "../assets/womens_clothing.png";
import electronics from "../assets/electronics.avif";
import allClothing from "../assets/all_clothing_2.webp";
import HomeCSS from "../styles/Home.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Home = () => {
    const [pageLinks, setPageLinks] = useState([
        {page: '/new', image: allClothing, text: 'New', brightness: 'brightness(85%)'},
        {page: '/men', image: mensClothing, text: 'Men', brightness: 'brightness(85%)'},
        {page: '/women', image: womensClothing, text: 'Women', brightness: 'brightness(85%)'},
        {page: '/other', image: electronics, text: 'Other', brightness: 'brightness(85%)'},
    ]);
    const navigate = useNavigate();

    const handleBrightness = (id, brightness) => {
        let result = [...pageLinks];
        result = result.map((x) => {
            if (x.page === id) 
                x.brightness = brightness;
                return x;
        });
        setPageLinks(result);
    };

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
                            <div 
                                key={page.page} 
                                className={HomeCSS.container} 
                                onClick={() => navigate(page.page)} 
                                onMouseEnter={() => handleBrightness(page.page, 'brightness(90%)')}
                                onMouseLeave={() => handleBrightness(page.page, 'brightness(85%)')}
                            >
                                <img src={page.image} alt={page.text} style={{filter: page.brightness}}/>
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