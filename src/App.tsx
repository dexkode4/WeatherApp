import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { WeatherInfo } from "./view/WeatherInfo";
import { Global } from "@emotion/react";
import { GlobalStyles } from "./styles/GlobalStyles";
import theme from "./styles/theme";
import { QueryClient, QueryClientProvider } from "react-query";
import { TempContextProvider } from "./context/TempContext";

const queryClient = new QueryClient();

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <TempContextProvider>
    <ChakraProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <WeatherInfo />
    </ChakraProvider>
    </TempContextProvider>
  </QueryClientProvider>
);
