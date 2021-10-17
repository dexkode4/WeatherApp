
export interface IWeatherSegment {
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
    temp_kf: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
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
  list: Array<IWeatherSegment>
}

export interface IWeatherInfoSection{
  title: string,
  data: IWeatherSegment[]
}