import { getWeatherInfo } from "./api";
import { render } from "@testing-library/react";
import { ICity, IWeatherInfo, IWeatherInfoSection } from "./types/interface";
import { WeatherCard } from "./components/WeatherCard";
import { setupServer } from "msw/node";
import { rest } from "msw";
import groupBy from "lodash.groupby";
import { monthName } from "./utils";
import React from "react";
import { Top } from "./components/Top";

let data: IWeatherInfo = {
  city: {
    id: 2352778,
    name: "Abuja",
    coord: {
      lat: 9.0765,
      lon: 7.3986,
    },
    country: "NG",
    population: 590400,
    timezone: 3600,
    sunrise: 1634534293,
    sunset: 1634577153,
  } as ICity,
  list: [
    {
      dt: 1634601600,
      main: {
        temp: 23.4,
        feels_like: 24.07,
        temp_min: 22.77,
        temp_max: 23.4,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 960,
        humidity: 87,
        temp_kf: 0.63,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 94,
      },
      wind: {
        speed: 0.99,
        deg: 258,
        gust: 1.26,
      },
      visibility: 10000,
      pop: 0.46,
      rain: {
        "3h": 0.17,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2021-10-19 00:00:00",
    },
  ],
};

const server = setupServer(
  rest.get(
    "http://api.openweathermap.org/data/2.5/forecast",
    (req, res, ctx) => {
      return res(ctx.json(data));
    }
  )
);

beforeAll(async () => {
  server.listen();
  data = await getWeatherInfo({ lat: 9.0764785, lon: 7.398574 }, "metric");
});

afterEach(() => server.resetHandlers());
afterAll(() => server.close());

it("Expects City", async () => {
  const isCityExist = data?.city ? true : false;
  expect(isCityExist).toBe(true);
});

it("Renders city name", async () => {
  const { getByText } = render(<Top data={data.city} />);

  expect(getByText("Abuja")).toBeInTheDocument();
});

it("Renders weather description correctly", async () => {
  const result = groupBy(data.list, monthName);

  const days: IWeatherInfoSection[] = [];
  for (const property in result) {
    let section = { title: property, data: result[property] };
    days.push(section);
  }

  const { getByText } = render(
    <WeatherCard handleSelect={() => {}} active={true} data={days[0]} />
  );

  expect(getByText("light rain")).toBeInTheDocument();
});
