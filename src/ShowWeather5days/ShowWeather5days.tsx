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
    .slice(0, 5) // <-- aqui pegamos só 5 dias
    .map(forecast => {
      const date = new Date(forecast.dt * 1000);
      const dayName = date.toLocaleDateString("pt-PT", { weekday: "short" });
      const temp = Math.round(forecast.main.temp);
      const description = forecast.weather[0].description;
      const icon = forecast.weather[0].icon;

      return { dayName, temp, description, icon };
    });

  return (
    <div className="w-full xl:w-[50%] flex justify-between items-center overflow-x-auto [ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:display-none text-center gap-8 py-8 px-8 bg-[var(--bg-color)] text-[var(--text-color)] rounded-2xl">
      {dailyForecast.map((day, index) => (
        <div key={index} className="flex flex-col justify-center items-center gap-2 mr-4 min-w-[80px]">
          <span className="text-[var(--text-color)] font-bold text-xl">{day.dayName}</span>
          <img
            src={`http://openweathermap.org/img/wn/${day.icon}@2x.png`}
            alt={day.description}
            className="w-10 h-10"
          />
          <span className="text-[var(--text-color)]">{day.temp}ºC</span>
          <span className="text-[var(--text-color)] capitalize text-sm">{day.description}</span>
        </div>
      ))}
    </div>
  );
}
