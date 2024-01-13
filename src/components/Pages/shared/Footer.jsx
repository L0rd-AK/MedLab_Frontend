const Footer = () => {
    return (
        <>
            <footer className="footer p-10 bg-base-200 text-base-content mt-10">
                <div>
                    <img className="h-10" src="https://i.ibb.co/Q9r1j6Q/logo.png" alt="" />
                    <p className="text-left"> <span className="font-bold">MedLab Ltd.</span> <br />Providing reliable Health service since 1992</p>
                </div>
                <nav>
                    <header className="footer-title">Emergency Call</header>
                    <a className="link link-hover">+07 5554 3332 322</a>
                    <a className="link link-hover">+07 5554 3332 456</a>
                </nav>
                <nav>
                    <header className="footer-title">Ambulance - 24/7</header>
                    <a className="link link-hover">+07 5554 3332 245</a>
                    <a className="link link-hover">+07 5554 3332 792</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <form>
                    <header className="footer-title">Health Tips</header>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="join">
                            <input type="text" placeholder="username@site.com" className="input input-bordered join-item" />
                            <button className="btn btn-primary join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </footer>
        </>
    );
};

export default Footer;