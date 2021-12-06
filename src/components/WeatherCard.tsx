import { Flex, Heading, Image, Text, Tag } from "@chakra-ui/react";
import React, {useContext} from "react";
import { TempContext } from "../context/TempContext";
import { IWeatherInfoSection } from "../types/interface";
import { Temp } from "../types/TempEnums";
import { constructUrl } from "../utils";

interface IWeatherCardProps {
  data: IWeatherInfoSection;
  handleSelect: () => void;
  active: boolean;
}

const iconUrl = "http://openweathermap.org/img/wn/:icon@4x.png";

export const WeatherCard = ({
  data,
  handleSelect,
  active,
}: IWeatherCardProps) => {
  const { tempUnit } = useContext(TempContext);
  console.log(tempUnit)

  const calculateAverageTemp = (): number => {
    const sum = data.data.reduce((acc, curr) => acc + curr.main.temp, 0);

    if(tempUnit === Temp.Fahrenheit){
     return Math.round((((sum * 9)/5) + 32)/ data.data.length)

    }
    return Math.round(sum / data.data.length)
  };


  return (
    <Flex
      borderWidth={active ? "3px":"1px"}
      borderColor={active ? "black" : "gray.400"}
      height="30vh"
      w={["90%", "80%"]}
      borderRadius="md"
      p="2"
      my="5"
      shadow={active ? "lg" : "sm"}
      onClick={handleSelect}
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      cursor="pointer"
      _hover={{
        shadow: "lg",
      }}
      data-testid="weather-card"
    >
      <Heading fontSize="sm" color="white">
        {data.title}
      </Heading>
      <Tag
        variant="subtle"
        colorScheme="blackAlpha"
        borderRadius="full"
        size="sm"
        py="0"
        mt="1"
        fontSize="sm"
        textTransform="capitalize"
        color="white"
      >
        {data.data[0].weather[0].description}
      </Tag>
      <Image
        src={constructUrl(iconUrl, { icon: data.data[0].weather[0].icon })}
        boxSize="100px"
      />
      <Flex>
        <Text color="white">
          {calculateAverageTemp()}
          <sup>o</sup>
          {tempUnit === Temp.Celsius
            ? "C"
            : "F"}
        </Text>
      </Flex>
    </Flex>
  );
};
