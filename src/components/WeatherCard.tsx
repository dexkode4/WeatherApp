import {
  Flex,
  Heading,
  Image,
  Text,
  Tag,
} from "@chakra-ui/react";
import React from "react";
import { IWeatherInfoSection } from "../types/interface";
import { Temp } from "../types/TempEnums";
import { constructUrl } from "../utils";

interface IWeatherCardProps {
  data: IWeatherInfoSection;
  handleSelect: () => void;
}

const iconUrl = "http://openweathermap.org/img/wn/:icon@4x.png";

export const WeatherCard = ({ data, handleSelect }: IWeatherCardProps) => {
  return (
    <>
      <Flex
        borderWidth="1px"
        height="30vh"
        w={["90%", "80%"]}
        borderRadius="md"
        p="2"
        my="5"
        shadow="sm"
        onClick={handleSelect}
        // templateColumns="1fr"
        // justifyItems="center"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        cursor="pointer"
        _hover={{
          shadow: "lg"
        }}
      >
        <Heading fontSize="sm">{data.title}</Heading>
        <Tag
          variant="subtle"
          colorScheme="blackAlpha"
          borderRadius="full"
          size="sm"
          py="0"
          mt="1"
          fontSize="sm"
          textTransform="capitalize"
        >
          {" "}
          {/* <TagLabel>
            {data.data[0].weather[0].description}
          </TagLabel> */}
          {data.data[0].weather[0].description}
        </Tag>
        <Image
          src={constructUrl(iconUrl, { icon: data.data[0].weather[0].icon })}
          boxSize="100px"
        />
        <Flex>
          <Text>
            {data.data[0].main.temp}
            <sup>o</sup>
            {localStorage.getItem("temperature_unit") &&
            localStorage.getItem("temperature_unit") === Temp.Celsius
              ? "C"
              : "F"}
          </Text>
        </Flex>
      </Flex>
    </>
  );
};
