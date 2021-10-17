
export interface IWeatherItem {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: 0;
  };
  weather: [
    {
      id: number;
      main: "Rain";
      description: "light rain";
      icon: "10d";
    }
  ];
  clouds: {
    all: 45;
  };
  wind: {
    speed: 3.22;
    deg: 221;
    gust: 2.99;
  };
  visibility: number;
  pop: 0.48;
  rain: {
    "3h": 0.62;
  };
  sys: {
    pod: "d";
  };
  dt_txt: string;
}

export interface IJsonResponse<T> {
  data: T;
  status: number;
}

export interface ICoord {
  lat: number;
  lon: number;
}

export interface ICity {
  id: number;
  name: string;
  coord: ICoord;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}


export interface IWeatherInfo {
  city: ICity;
  list: Array<IWeatherItem>
}
