import axios from "axios";
import { ICoord } from "./view/WeatherInfo";

const routes = {
 weatherInfo :'api.openweathermap.org/data/2.5/forecast?appid=ad27d6b2697fceb255030535b25de60c' 
}

export const getWeatherInfo = async(coord: ICoord) => {

    try {
        await axios.get(routes.weatherInfo,{
            params:{
                ...coord
            }
        })
    } catch (error) {
        
    }
 
}