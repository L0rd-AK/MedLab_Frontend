import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import Banner from "./Banner";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <div className="text-5xl text-black">this is home</div>
            <Footer></Footer>
        </div>
    );
};

export default Home;