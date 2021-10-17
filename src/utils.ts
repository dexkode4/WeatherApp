import dayjs from "dayjs";

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
