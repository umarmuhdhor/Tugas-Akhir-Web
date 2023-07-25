import axios from "axios";
import Constant from "../Constant/Constant";

const getClient = axios.create({
    baseURL: Constant.BASE_URL
});

export default getClient;