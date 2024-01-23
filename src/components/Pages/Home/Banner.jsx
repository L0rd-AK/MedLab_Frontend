import { Link } from "react-router-dom";

const Banner = ({ bannerrCollection,setbannerrCollection }) => {

    const bnr=bannerrCollection?.find(i=>i.isActive===true);
    const handelSearch = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const searchValue = form.get('home-input');
        fetch(`http://localhost:5173/searched-jobs/${searchValue}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setbannerrCollection(data);
            })
    }
    return (
        <div className="hero h-[650px] mt-5 rounded-lg" style={{ backgroundImage: 'url(https://mida.peerduck.com/wp-content/uploads/2023/03/i4tug4.png)', }}>
            <div className="hero-overlay bg-opacity-30 rounded-lg"></div>
            <img className="h-[650px] w-full" src="https://i.ibb.co/bQN7KHm/banner-bg.png" alt="" />
            <div className="flex gap-5">
                <div className="hero-content text-left text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-5xl font-bold text-black">{bnr?.title}</h1>
                        <p className="mb-5 text-black font-semibold">{bnr?.description}</p>
                        <p className="mb-5 text-black font-semibold">Use the Coupon code <span className="font-bold text-[#48eaffcb]">{bnr?.couponCode}</span> to get {bnr?.couponRate}% of on any of our Services.</p>
                        <div className="">
                            <button className="btn bg-[#48eaffcb] px-5 py-2 border-none font-bold text-white hover:btn-outline mt-5 lg:mt-0">Use Coupon {bnr?.couponCode}</button>
                            <Link to='/all-tests'>
                            <button className="ml-5 btn bg-[#13e3ff96] px-5 py-2 border-none font-bold text-white hover:btn-outline mt-5 lg:mt-0">All Test</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div>
                    <img className="h-[600px] w-full mt-[50px]" src={bnr?.image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;