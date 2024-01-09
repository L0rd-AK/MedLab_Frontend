import { FaArrowCircleRight } from "react-icons/fa";
const FeaturedTest = () => {
    return (
        <div className="mt-10 mb-5 p-5">
            <h1 className="text-5xl text-black font-bold text-center">Our Featured Tests</h1>
            <p className="text-black font-normal text-center mt-2">MedLab is a leading clinic in health care. Here are some test, most used by our users.</p>
            <div className="p-2">
                <div className="grid grid-cols-4 gap-5 mt-5">
                    <div className="bg-[#47ccc8] h-[410px] rounded-lg text-left p-5">
                        <h1 className="text-4xl font-bold text-center mt-5">World leader <br /> in diagnostics</h1>
                        <p className="mt-7">Etiam condimentum aliquam odio, ut consectetur enim. Nullam metus purus, pharetra quis tempus id, feugiat a augue.</p>
                        <div className="px-[10px] py-2 bg-[#2d3663] mt-10 cursor-pointer text-white font-bold rounded-3xl text-center">Choose diagnostic <FaArrowCircleRight className="inline ml-3 items-center"></FaArrowCircleRight></div>
                    </div>
                    <div className="grid col-span-3 bg-[#edf3f6] rounded-lg p-5 gap-5">
                        <div className="grid grid-cols-4 gap-5">
                            <div className="grid justify-center items-center p-5 bg-white rounded-lg cursor-pointer transition ease-in-out hover:bg-[#47ccc8] hover:duration-1000">
                                <img className="h-[100px] w-[100px] ml-6" src="https://i.ibb.co/5njfVck/Gastroenterology.png" alt="" />
                                <h3 className="text-xl font-bold text-[#2d3663] mt-2">Gastroenterology</h3>
                            </div>
                            <div className="grid justify-center items-center p-5 bg-white rounded-lg cursor-pointer transition ease-in-out hover:bg-[#47ccc8] hover:duration-1000">
                                <img className="h-[100px] w-[100px]" src="https://i.ibb.co/JHmxpHQ/cardiology.png" alt="" />
                                <h3 className="text-xl font-bold text-[#2d3663] mt-2">Cardiac Test</h3>
                            </div>
                            <div className="grid justify-center items-center p-5 bg-white rounded-lg cursor-pointer transition ease-in-out hover:bg-[#47ccc8] hover:duration-1000">
                                <img className="h-[100px] w-[100px]" src="https://i.ibb.co/dr20ccP/blood-tube.png" alt="" />
                                <h3 className="text-xl font-bold text-[#2d3663] mt-2">Blood Test</h3>
                            </div>
                            <div className="grid justify-center items-center p-5 bg-white rounded-lg cursor-pointer transition ease-in-out hover:bg-[#47ccc8] hover:duration-1000">
                                <img className="h-[100px] w-[100px]" src="https://i.ibb.co/tJsV9p4/MRI-testing.png" alt="" />
                                <h3 className="text-xl font-bold text-[#2d3663] mt-2">MRI Test</h3>
                            </div>
                        </div>
                        <div className="grid grid-cols-4 gap-5">
                            <div className="grid justify-center items-center p-5 bg-white rounded-lg cursor-pointer transition ease-in-out hover:bg-[#47ccc8] hover:duration-1000">
                                <img className="h-[100px] w-[100px] ml-3" src="https://i.ibb.co/BLFRQyG/neurology.png" alt="" />
                                <h3 className="text-xl font-bold text-[#2d3663] mt-2">Neurosurgery</h3>
                            </div>
                            <div className="grid justify-center items-center p-5 bg-white rounded-lg cursor-pointer transition ease-in-out hover:bg-[#47ccc8] hover:duration-1000">
                                <img className="h-[100px] w-[100px] ml-6" src="https://i.ibb.co/nnjr1hx/Orthopedic.png" alt="" />
                                <h3 className="text-xl font-bold text-[#2d3663] mt-2">Orthopedic Test</h3>
                            </div>
                            <div className="grid justify-center items-center p-5 bg-white rounded-lg cursor-pointer transition ease-in-out hover:bg-[#47ccc8] hover:duration-1000">
                                <img className="h-[100px] w-[100px]" src="https://i.ibb.co/r7GfhWV/urology.png" alt="" />
                                <h3 className="text-xl font-bold text-[#2d3663] mt-2">Urology Test</h3>
                            </div>
                            <div className="grid justify-center items-center p-5 bg-white rounded-lg cursor-pointer transition ease-in-out hover:bg-[#47ccc8] hover:duration-1000">
                                <img className="h-[100px] w-[100px]" src="https://i.ibb.co/x30LzG6/surgery.png" alt="" />
                                <h3 className="text-xl font-bold text-[#2d3663] mt-2">Surgery</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedTest;