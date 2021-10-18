import { getWeatherInfo } from "./api";


it("Expect City", async () => {
  const response = await getWeatherInfo(
    { lat: 9.0764785, lon: 7.398574 },
    "metric"
  );
  const isCityExist = response.city ? true : false;
  console.log(response.city);
  expect(isCityExist).toBe(true);
});
