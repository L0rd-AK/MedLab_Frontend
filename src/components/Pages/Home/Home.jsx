import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import Banner from "./Banner";
import FeaturedTest from "./FeaturedTest";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <FeaturedTest></FeaturedTest>
            <Footer></Footer>
        </div>
    );
};

export default Home;