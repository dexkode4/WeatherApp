import { Flex, Heading, Image, Box, Text, Grid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { IWeatherInfoSection } from "../types/interface";
import { Temp } from "../types/TempEnums";
import { constructUrl } from "../utils";

interface IWeatherCardProps {
  data: IWeatherInfoSection;
}

const iconUrl = "http://openweathermap.org/img/wn/:icon@4x.png";

export const WeatherCard = ({ data }: IWeatherCardProps) => {

  return (
    <>
      <Grid
        borderWidth="1px"
        height="30vh"
        w={["90%","80%"]}
        borderRadius="md"
        p="2"
        // flexDirection="column"
        my="5"
        shadow="sm"
        templateColumns="1fr"
        justifyItems="center"
      >
        <Heading fontSize="sm">{data.title}</Heading>
          <Image
            src={constructUrl(iconUrl, { icon: data.data[0].weather[0].icon })}
            boxSize="100px"
          />
          <Text alignSelf="flex-end">
            {data.data[0].main.temp}
            <sup>o</sup>
            {localStorage.getItem('temperature_unit') === Temp.Celsius ? "C" : "F"}
          </Text>
      </Grid>
    </>
  );
};
