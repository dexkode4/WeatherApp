import { useQuery } from "react-query";
import { getWeatherInfo } from "../api";
import { ICoord } from "../types/interface";

export const useWeatherInfo = (coord: ICoord | undefined, unit: string) => {
  return useQuery(
    ["weatherInfo", coord, unit],
    () => coord && getWeatherInfo(coord, unit),
    {
      enabled: !!coord && !!unit,
    }
  );
};
