import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import Banner from "./Banner";
import FeaturedTest from "./FeaturedTest";
import RecomendationSlide from "./RecomendationSlide";

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <FeaturedTest></FeaturedTest>
            <RecomendationSlide></RecomendationSlide>
            
        </div>
    );
};

export default Home;