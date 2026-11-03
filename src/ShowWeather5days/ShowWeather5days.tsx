
type ForecastItem = {
  dt: number;
  main: { temp: number };
  weather: { description: string; icon: string }[];
};

type Weather5DaysData = {
  list: ForecastItem[];
};

type ShowWheather5daysProps = {
  weather5daysprop: Weather5DaysData | null;
};

export function ShowWeather5days(props: ShowWheather5daysProps) {

  if (!props.weather5daysprop) return null;

  // Filtra apenas 1 previsão por dia
  const mapDays = new Map<string, ForecastItem>();

  for (const forecast of props.weather5daysprop.list) {
    const dateStr = new Date(forecast.dt * 1000).toLocaleDateString("pt-PT");

    if (!mapDays.has(dateStr)) mapDays.set(dateStr, forecast);
  }

  // Pega apenas os 5 primeiros dias
  const dailyForecast = Array.from(mapDays.values())
    .slice(0, 5)
    .map(forecast => {
      const date = new Date(forecast.dt * 1000);
      const dayName = date.toLocaleDateString("pt-PT", { weekday: "short" });
      const temp = Math.round(forecast.main.temp);
      const description = forecast.weather[0].description;
      const icon = forecast.weather[0].icon;

      return { dayName, temp, description, icon };
    });

  return (
    <div className="
      animate-fade-in
      w-full xl:w-[50%]
      flex justify-between items-stretch
      overflow-x-auto
      [ms-overflow-style:none]
      [scrollbar-width:none]
      [&::-webkit-scrollbar]:hidden
      gap-3 md:gap-4
      py-6 px-4 md:px-5
      bg-[var(--bg-color)]
      text-[var(--text-color)]
      rounded-3xl
      border border-blue-500/20
      shadow-xl shadow-blue-500/10
    ">

      {dailyForecast.map((day, index) => (

        <div
          key={index}
          className="
            flex flex-col justify-center items-center
            gap-3
            min-w-[105px] flex-1
            py-5 px-3
            rounded-2xl
            bg-blue-500/5
            border border-blue-500/10
            hover:bg-blue-500/10
            hover:border-blue-500/30
            transition-all duration-300
          "
        >

          {/* DIA */}
          <span className="
            text-blue-500
            font-bold
            text-base md:text-lg
            capitalize
          ">
            {day.dayName}
          </span>

          {/* ÍCONE DO CLIMA */}
          <img
            src={`http://openweathermap.org/img/wn/${day.icon}@2x.png`}
            alt={day.description}
            className="w-14 h-14 drop-shadow-sm"
          />

          {/* TEMPERATURA */}
          <span className="
            text-[var(--text-color)]
            text-xl md:text-2xl
            font-extrabold
          ">
            {day.temp}ºC
          </span>

          {/* DESCRIÇÃO */}
          <span className="
            text-[var(--text-color)]
            opacity-60
            capitalize
            text-xs md:text-sm
            text-center
            leading-relaxed
          ">
            {day.description}
          </span>

        </div>

      ))}

    </div>
  );
}
