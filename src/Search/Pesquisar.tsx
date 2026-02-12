import {MapPin} from "lucide-react"
import {useRef, useState } from "react"
import axios from "axios";
import {ShoWeather} from "../ShowWeather/ShoWeather";
import { ShowWeather5days } from "../ShowWeather5days/ShowWeather5days";


interface WeatherResponse {
  name: string; // nome da cidade
  weather5daysprop: string; 
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  weather: {
    icon: string;
    description: string;
  }[];
  wind: {
    speed: number;
    deg: number;
  };
}










export function Pesquisar() {

  const[Weather, Setweather] = useState<WeatherResponse | null>(null);
  const[Weather5days, Setweather5days] = useState(null);

  const inputRef = useRef<HTMLInputElement>(null);

  const seacrhCity = async () => {
   
    const city = inputRef.current?.value;
    const key = "ef30d3e19495a22504597735b956ea48";
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=pt`;
    const url5days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=metric&lang=pt`;
  

    const apiInfo = await axios.get(url);
    const apiInfo5days = await axios.get(url5days);
    
    Setweather(apiInfo.data); // pegar somente os dados
    Setweather5days(apiInfo5days.data);

  };
  

  return (
        <>
            <main className="w-full flex flex-col justify-center items-center mb-8">
                <label htmlFor="search" className=" flex text-2xl pb-2 text-[var(--text-color)] font-bold">EA-Weather</label>
              
                <div className="w-full xl:w-[50%] flex justify-between items-center gap-2 px-4  bg-[var(--bg-color)] text-[var(--text-color)] rounded-2xl ">
                    <span><MapPin className="text-[var(--text-color)]" /></span>
                    <input ref={inputRef} type="text" id="search" placeholder="Degite a cidade" autoComplete="off" className="h-[4rem] w-full text-sm focus:outline-none" />
                    <button onClick={seacrhCity} className="bg-[var(--bt-color)] text-white px-3 py-2  rounded-2xl text-sm xl:text-center">Pesquisar</button>
                </div>
            </main>

             <main className="w-full flex flex-col justify-center items-center mb-8">
             {Weather ? (
                <ShoWeather
                    city={Weather.name}
                    temp={Weather.main.temp}
                    feels_like={Weather.main.feels_like}
                    humidity={Weather.main.humidity}
                    wind_speed={Weather.wind.speed}
                    description={Weather.weather[0].description}
                    icon={Weather.weather[0].icon}
                  />
              ) : null}


             </main>


             <main className="w-full flex flex-col justify-center items-center mb-8">
              {Weather5days ? (
                <ShowWeather5days
                  weather5daysprop={Weather5days} // objeto da API
                />
              ) : null}
            </main>

        </>
  )
}
  