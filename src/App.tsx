import * as React from "react"
import {
  ChakraProvider,
} from "@chakra-ui/react"
import { WeatherInfo } from "./view/WeatherInfo"
import { Global } from "@emotion/react";
import { GlobalStyles } from "./styles/GlobalStyles";
import theme from "./styles/theme";

export const App = () => (
  <ChakraProvider theme={theme}>
     <Global styles={GlobalStyles} />
    <WeatherInfo/>
  </ChakraProvider>
)
