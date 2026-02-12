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
      <div className="animate-fade-in w-full xl:w-[50%] flex flex-col justify-center items-center gap-3 py-8 px-2 bg-[var(--bg-color)] text-[var(--text-color)] rounded-2xl">
        
        <div className="flex flex-col justify-center items-center gap-2">
          <span className="text-[var(--text-color)] font-bold">{props.city}</span>

          <div className="flex justify-center items-center gap-2 text-4xl">
            {/* Mostra o ícone da API */}
            <img src={iconUrl} alt={props.description} className="w-10 h-10" />
            <span className="text-[var(--text-color)]">{Math.round(props.temp)}ºC</span>
          </div>

          <span className="text-[var(--text-color)] capitalize">{props.description}</span>
        </div>

        <div className="flex justify-between items-center py-4 gap-6">
          <span className="text-[var(--text-color)]"><LucideThermometer /> {Math.round(props.feels_like)}ºC</span>
          <span className="text-[var(--text-color)]"><Droplet />  {props.humidity}%</span>
          <span className="text-[var(--text-color)]"><WindIcon /> {Math.round(props.wind_speed)}Km/h</span>
        </div>  
      </div>
    </>
  )
}
