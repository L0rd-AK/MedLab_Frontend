import { useState } from "react";
import TipsCard from "./TipsCard";
import Marquee from "react-fast-marquee";
const RecomendationSlide = () => {
    const [cards,setCards]=useState([]);
    // fetching health tips
    fetch("/recomemdation.json")
    .then(res=>res.json())
    .then(data=>{
        setCards(data);
    })
    return (
        <div>
            <h1 className="text-5xl text-black font-bold text-center">Health Tips from our Doctors</h1>
            <Marquee>
            {
                cards.map(i=><TipsCard key={i._id} card={i}></TipsCard>)
            }
            </Marquee>   
        </div>
    );
};

export default RecomendationSlide;