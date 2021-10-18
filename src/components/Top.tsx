import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { ICity } from "../types/interface";

interface ITopProps {
  data: ICity | undefined;
}

export const Top = ({ data }: ITopProps) => {
  return (
    <Flex h="20vh" justifyContent="center" alignItems="center">
      <Heading color="white" size="md" fontWeight="medium">
        {data?.name}
      </Heading>
    </Flex>
  );
};
