
import {  useState } from "react";
import Banner from "./Banner";
import FeaturedTest from "./FeaturedTest";
import RecomendationSlide from "./RecomendationSlide";

const Home = () => {
    const [bannerrCollection,setbannerrCollection]=useState([]);
    fetch(`https://backend-server-gamma.vercel.app/all-banners`)
    .then(res=>res.json())
    .then(data=>{
        setbannerrCollection(data);
        // console.log(data);
    })
    return (
        <div>
            
            <Banner bannerrCollection={bannerrCollection} setbannerrCollection={setbannerrCollection}></Banner>
            <FeaturedTest></FeaturedTest>
            <RecomendationSlide></RecomendationSlide>
            
        </div>
    );
};

export default Home;