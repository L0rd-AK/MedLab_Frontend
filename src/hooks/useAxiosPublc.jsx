import axios from "axios";

const axiosPublic=axios.create({
    baseURL:"https://backend-server-gamma.vercel.app"
})
const useAxiosPublc = () => {
    return axiosPublic;
};

export default useAxiosPublc;