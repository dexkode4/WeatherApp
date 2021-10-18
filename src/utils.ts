import dayjs from "dayjs";
import fetchMock from 'fetch-mock';

export const constructUrl = (
  url: string,
  params: Record<string, string | number>
): string => {
  for (let key in params) {
    const pattern = new RegExp(`:${key}[?]?`);
    url = url.replace(pattern, params[key].toString());
  }
  return url;
};

export const monthName = <T extends {dt_txt: string}>(item: T) => {
  return dayjs(item.dt_txt, "YYYY-MM-DD").format("MMMM D, YYYY");
};



export function mockAPI(){
  fetchMock.mock("https://api.example.com/items", { 'Test': 'Test', 'Test1': 'Test1' });
}