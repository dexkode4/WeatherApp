export interface IWeatherInfo {
    dt: number,
    main: {
      temp: number,
      feels_like: number,
      temp_min: number,
      temp_max: number,
      pressure: number,
      sea_level: number,
      grnd_level: number,
      humidity: number,
      temp_kf: 0
    },
    weather: [
      {
        id: number,
        main: "Rain",
        description: "light rain",
        icon: "10d"
      }
    ],
    clouds: {
      all: 45
    },
    wind: {
      speed: 3.22,
      deg: 221,
      gust: 2.99
    },
    visibility: number,
    pop: 0.48,
    rain: {
      "3h": 0.62
    },
    sys: {
      pod: "d"
    },
    dt_txt: string
  }
