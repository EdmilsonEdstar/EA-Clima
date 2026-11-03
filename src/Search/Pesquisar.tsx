
import { MapPin, Search, CloudSun } from "lucide-react";
import { useRef, useState } from "react";
import axios from "axios";
import { ShoWeather } from "../ShowWeather/ShoWeather";
import { ShowWeather5days } from "../ShowWeather5days/ShowWeather5days";

interface WeatherResponse {
  name: string;
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

  const [Weather, Setweather] = useState<WeatherResponse | null>(null);
  const [Weather5days, Setweather5days] = useState(null);
  const [error, setError] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  const seacrhCity = async () => {

    const city = inputRef.current?.value;
    const key = "ef30d3e19495a22504597735b956ea48";

    if (!city?.trim()) {
      setError("Por favor, escreve o nome de uma cidade.");
      return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=pt`;
    const url5days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=metric&lang=pt`;

    setError("");

    try {

      const apiInfo = await axios.get(url);
      const apiInfo5days = await axios.get(url5days);

      Setweather(apiInfo.data);
      Setweather5days(apiInfo5days.data);

    } catch (error) {

      if (axios.isAxiosError(error) && error.response?.status === 404) {
        setError("Cidade não encontrada. Verifica o nome e tenta novamente.");
      } else {
        setError("Ocorreu um erro ao pesquisar. Tenta novamente.");
      }

    }

  };

  return (
    <>
      {/* CABEÇALHO */}
      <main className="w-full flex flex-col justify-center items-center mb-10 px-4 pt-10">

        <div className="flex items-center justify-center gap-3 mb-3">

          <div className="p-3 rounded-2xl bg-blue-500/10">
            <CloudSun size={34} className="text-blue-500" />
          </div>

          <label
            htmlFor="search"
            className="text-3xl md:text-4xl text-[var(--text-color)] font-extrabold tracking-tight"
          >
            EA-Weather
          </label>

        </div>

        <p className="text-sm md:text-base opacity-60 text-[var(--text-color)] text-center mb-8">
          Acompanhe o clima e a previsão do tempo em qualquer lugar.
        </p>

        {/* BARRA DE PESQUISA */}
        <div className="
          w-full xl:w-[50%]
          flex justify-between items-center gap-3
          px-4 py-2
          bg-[var(--bg-color)]
          text-[var(--text-color)]
          rounded-2xl
          border border-blue-500/20
          shadow-xl shadow-blue-500/10
          transition-all duration-300
          focus-within:ring-2
          focus-within:ring-blue-500/50
          focus-within:shadow-blue-500/20
        ">

          <span className="shrink-0">
            <MapPin size={23} className="text-blue-500" />
          </span>

          <input
            ref={inputRef}
            type="text"
            id="search"
            placeholder="Digite a cidade..."
            autoComplete="off"
            className="
              h-[3.5rem]
              w-full
              text-sm md:text-base
              bg-transparent
              text-[var(--text-color)]
              placeholder:opacity-50
              focus:outline-none
            "
          />

          <button
            onClick={seacrhCity}
            className="
              flex items-center justify-center gap-2
              bg-gradient-to-r from-blue-600 to-cyan-500
              text-white
              px-5 py-3
              rounded-xl
              text-sm font-semibold
              shadow-lg shadow-blue-500/20
              hover:scale-105
              hover:shadow-blue-500/40
              active:scale-95
              transition-all duration-300
              whitespace-nowrap
              cursor-pointer
            "
          >
            <Search size={18} />
            Pesquisar
          </button>

        </div>

        {/* MENSAGEM DE ERRO */}
        {error && (
          <p className="
            mt-4
            text-sm
            text-red-500
            font-medium
            text-center
            animate-fade-in
          ">
            {error}
          </p>
        )}

      </main>

      {/* CLIMA ATUAL */}
      <main className="w-full flex flex-col justify-center items-center mb-10 px-4">

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

      {/* PREVISÃO DOS PRÓXIMOS 5 DIAS */}
      <main className="w-full flex flex-col justify-center items-center mb-10 px-4">

        {Weather5days ? (
          <ShowWeather5days
            weather5daysprop={Weather5days}
          />
        ) : null}

      </main>
    </>
  );
}