import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import { WeatherInfo } from "./view/WeatherInfo"
import { Global } from "@emotion/react";
import { GlobalStyles } from "./GlobalStyles";

export const App = () => (
  <ChakraProvider theme={theme}>
     <Global styles={GlobalStyles} />
    <WeatherInfo/>
  </ChakraProvider>
)
