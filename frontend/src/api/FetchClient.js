import ky from "ky";
import apiConfig from "./ApiComfig.js"

const getImage = await ky.get(apiConfig.baseUrl, );
