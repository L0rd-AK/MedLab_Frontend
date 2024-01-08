
const Banner = ({ setSearchJob }) => {
    const handelSearch = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const searchValue = form.get('home-input');
        fetch(`https://jobdoc.vercel.app/searched-jobs/${searchValue}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setSearchJob(data);
            })
    }
    return (
        <div className="hero h-[650px] mt-5 lg:mt-16" style={{ backgroundImage: 'url(https://mida.peerduck.com/wp-content/uploads/2023/03/i4tug4.png)', }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <img className="h-[650px] w-full" src="https://i.ibb.co/bQN7KHm/banner-bg.png" alt="" />
            <div className="flex gap-5">
                <div className="hero-content text-left text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-5xl font-bold text-black">Your Health is our<br /> Top <span className='text-[#48eaffcb]'>Priority</span></h1>
                        <p className="mb-5 text-black font-semibold">Get the answers you need for a healthier you at our <br /> medical diagnostic center.</p>
                        <p className="mb-5 text-black font-semibold">Use the Coupon code <span className="font-bold text-[#48eaffcb]">MedLab20</span> to get 20% of on any of our Services.</p>
                        <div className="">
                            <button className="btn bg-[#48eaffcb] px-5 py-2 border-none font-bold text-white hover:btn-outline mt-5 lg:mt-0">MedLab20</button>
                        </div>
                    </div>
                </div>
                <div>
                    <img className="h-[600px] w-full mt-[50px]" src="https://mida.peerduck.com/wp-content/uploads/2023/03/k4lmtg-1536x1500.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;