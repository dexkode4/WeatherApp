import { Flex, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
// import { AppLoader } from "../components/AppLoader";
import { Bottom } from "../components/Bottom";
import { Top } from "../components/Top";

export interface ICoord {
  lat: number;
  lng: number;
}

export const WeatherInfo = () => {
  const toast = useToast();
  const [coord, setCoord] = useState<ICoord>();

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setCoord({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
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

  console.log('====================================');
  console.log(coord);
  console.log('====================================');
  return (
    <Flex direction="column" background="#2052D1" h="100vh">
      {/* <AppLoader /> */}
      <Top />
      <Bottom />
    </Flex>
  );
};
