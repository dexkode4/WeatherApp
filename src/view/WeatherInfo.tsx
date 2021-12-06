import {
  Flex,
  useToast,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState, useContext } from "react";
import { AppLoader } from "../components/AppLoader";
import { Bottom } from "../components/Bottom";
import { Top } from "../components/Top";
import { TempContext } from "../context/TempContext";
import { useWeatherInfo } from "../hooks/useWeatherInfo";
import { ICoord } from "../types/interface";
import { Temp } from "../types/TempEnums";




export const WeatherInfo = () => {
  const toast = useToast();
  const [coord, setCoord] = useState<ICoord>();

  const { data, isLoading, isFetching, isError, error, refetch } =
    useWeatherInfo(coord);



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

  const { tempUnit, toggleMode } = useContext(TempContext)

  const handleToggleUnit = (nextValue: string) => {
    toggleMode(nextValue as Temp)
  }
  return (
    <Flex direction="column" background="#2052D1" h="100vh" >
      <Flex direction="column" background="linear-gradient(120deg,rgba(255,255,255,0.3),transparent)" backdropFilter="blur(30px)" >

      </Flex>
      {isLoading && coord !== undefined ? (
        <AppLoader />
      ) : (
        <>
          {isFetching && <AppLoader />}
          <RadioGroup onChange={handleToggleUnit} value={tempUnit} m="4" mb="0">
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
