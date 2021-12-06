import { useQuery } from "react-query";
import { getWeatherInfo } from "../api";
import { ICoord } from "../types/interface";

export const useWeatherInfo = (coord: ICoord | undefined) => {

  return useQuery(
    ["weatherInfo", coord],
    () => coord && getWeatherInfo(coord),
    {
      enabled: !!coord,
      refetchOnWindowFocus: false,
      retry: 0
    }
  );
};
