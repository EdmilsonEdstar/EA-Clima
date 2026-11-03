
import { Droplet, LucideThermometer, WindIcon } from "lucide-react";

type ShowWheatherProps = {
  city: string;
  icon?: string; // código do ícone da API
  temp: number;
  description?: string;
  feels_like: number;
  humidity: number;
  wind_speed: number;
}

export function ShoWeather(props: ShowWheatherProps) {

  // Monta a URL do ícone da OpenWeather
  const iconUrl = `http://openweathermap.org/img/wn/${props.icon}@2x.png`;

  return (
    <>
      <div className="
        animate-fade-in
        w-full xl:w-[50%]
        flex flex-col justify-center items-center
        gap-5
        py-8 px-5
        bg-[var(--bg-color)]
        text-[var(--text-color)]
        rounded-3xl
        border border-blue-500/20
        shadow-xl shadow-blue-500/10
        transition-all duration-300
      ">

        {/* CIDADE */}
        <div className="flex flex-col justify-center items-center gap-2">

          <span className="text-xl font-bold tracking-wide text-[var(--text-color)]">
            {props.city}
          </span>

          {/* TEMPERATURA E ÍCONE */}
          <div className="flex justify-center items-center gap-3">

            <img
              src={iconUrl}
              alt={props.description}
              className="w-20 h-20 drop-shadow-md"
            />

            <span className="text-5xl md:text-6xl font-extrabold tracking-tight text-[var(--text-color)]">
              {Math.round(props.temp)}ºC
            </span>

          </div>

          <span className="text-base md:text-lg text-blue-500 capitalize font-medium">
            {props.description}
          </span>

        </div>

        {/* DIVISÓRIA */}
        <div className="w-full h-px bg-blue-500/20" />

        {/* INFORMAÇÕES ADICIONAIS */}
        <div className="
          w-full
          grid grid-cols-3
          gap-2 md:gap-4
        ">

          {/* SENSAÇÃO TÉRMICA */}
          <div className="
            flex flex-col justify-center items-center gap-2
            p-3
            rounded-2xl
            bg-blue-500/5
            text-center
          ">
            <LucideThermometer size={25} className="text-blue-500" />

            <span className="text-xs opacity-60">
              Sensação térmica
            </span>

            <span className="text-base md:text-lg font-bold">
              {Math.round(props.feels_like)}ºC
            </span>
          </div>

          {/* HUMIDADE */}
          <div className="
            flex flex-col justify-center items-center gap-2
            p-3
            rounded-2xl
            bg-blue-500/5
            text-center
          ">
            <Droplet size={25} className="text-blue-500" />

            <span className="text-xs opacity-60">
              Humidade
            </span>

            <span className="text-base md:text-lg font-bold">
              {props.humidity}%
            </span>
          </div>

          {/* VENTO */}
          <div className="
            flex flex-col justify-center items-center gap-2
            p-3
            rounded-2xl
            bg-blue-500/5
            text-center
          ">
            <WindIcon size={25} className="text-blue-500" />

            <span className="text-xs opacity-60">
              Vento
            </span>

            <span className="text-base md:text-lg font-bold">
              {Math.round(props.wind_speed)}Km/h
            </span>
          </div>

        </div>

      </div>
    </>
  )
}
