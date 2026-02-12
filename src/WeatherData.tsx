// Tipagem baseada na resposta da API OpenWeather
export interface WeatherData {
    name: string;
    main: {
      temp: number;
      feels_like: number;
      humidity: number;
    };
    weather: {
      description: string;
    }[];
    wind: {
      speed: number;
    };
  }
  