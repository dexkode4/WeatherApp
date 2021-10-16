import { Box, Spinner } from "@chakra-ui/react";
import React from "react";

export const AppLoader = () => {
  return (
    <Box
      position="absolute"
      top="0"
      left="0"
      bottom="0"
      right="0"
      background="rgba(0,0,0,0.5)"
      backdropFilter="blur(5px)"
      zIndex="100"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Spinner
        color="white"
        size="xl"
         />
    </Box>
  );
};
