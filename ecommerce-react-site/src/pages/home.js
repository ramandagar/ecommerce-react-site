import Header from "../components/Header";
import heroPhoto from "../assets/clothes.jpg";
import HomeCSS from "../styles/Home.module.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <>
            <Header />
            <main className={HomeCSS.home}>
                <img src={heroPhoto} alt="clothes"/>
                <div>
                    <h1>Summer Sale</h1>
                    <h2>Up to 60% off</h2>
                    <button onClick={() => navigate('/new')}>SHOP NOW</button>
                </div>
            </main>
        </>
    );
}

export default Home;