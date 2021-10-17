import {
  Flex,
  useToast,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AppLoader } from "../components/AppLoader";
import { Bottom } from "../components/Bottom";
import { Top } from "../components/Top";
import { useWeatherInfo } from "../hooks/useWeatherInfo";
import { ICoord } from "../types/interface";
import { Temp } from "../types/TempEnums";

export const WeatherInfo = () => {
  const toast = useToast();
  const [coord, setCoord] = useState<ICoord>();
  const [tempUnit, setTempUnit] = useState<string>(Temp.Celsius);
  const { data, isLoading, isFetching, isError, error, refetch } =
    useWeatherInfo(coord, tempUnit);

  useEffect(() => {
    const temperature_unit = localStorage.getItem("temperature_unit");
    if (temperature_unit) {
      setTempUnit(temperature_unit);
    }
  }, []);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setCoord({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      });
    } else {
      toast({
        title: "Location service",
        description: "Please enable browser location",
        status: "warning",
        duration: 9000,
        isClosable: true,
      });
    }
  }, [toast]);

  useEffect(() => {
    localStorage.setItem("temperature_unit", tempUnit);
  }, [tempUnit]);

  useEffect(() => {
    const errorObj = error as { message: string };
    if (isError) {
      toast({
        title: "Network error",
        description: errorObj?.message,
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
    }
  }, [isError, error, toast]);
  return (
    <Flex direction="column" background="#2052D1" h="100vh" >
      <Flex direction="column" background="linear-gradient(120deg,rgba(255,255,255,0.3),transparent)" backdropFilter="blur(30px)" >

      </Flex>
      {isLoading && coord !== undefined ? (
        <AppLoader />
      ) : (
        <>
          {isFetching && <AppLoader />}
          <RadioGroup onChange={setTempUnit} value={tempUnit} m="4" mb="0">
            <Stack
              direction="row"
              justifyContent={["space-between", "flex-start"]}
            >
              <Radio colorScheme="green" value={Temp.Celsius}>
                <Text color="white" fontSize="sm">
                  Celsius
                </Text>
              </Radio>
              <Radio colorScheme="green" value={Temp.Fahrenheit}>
                <Text color="white" fontSize="sm">
                  Fahrenheit
                </Text>
              </Radio>
            </Stack>
          </RadioGroup>
          <Top data={data?.city} />
          <Bottom data={data?.list} reload={() => refetch()} />
        </>
      )}
    </Flex>
  );
};
