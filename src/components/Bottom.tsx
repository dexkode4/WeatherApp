import React from "react";
import { Box, BoxProps, IconButton, Icon, Spacer } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { WeatherCardContainer } from "./WeatherCardContainer";
import { VscRefresh } from "react-icons/vsc";

const variants = {
  hidden: {
    y: "100vh",
  },
  visible: {
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const MotionBox = motion<BoxProps>(Box);

interface IBottomProps {
  reload: () => void;
}

export const Bottom = ({ reload }: IBottomProps) => {
  return (
    <MotionBox
      variants={variants}
      initial="hidden"
      animate="visible"
      flex="1"
      bg="white"
      borderTopRadius="3xl"
      padding="4"
      pt="7"
      pos="relative"
    >
      <IconButton
        onClick={reload}
        position="absolute"
        top="0"
        left="0"
        variant="ghost"
        aria-label="refresh"
        icon={<Icon as={VscRefresh} />}
        size="lg"
      />

      <Spacer height="10" />
      <WeatherCardContainer />
    </MotionBox>
  );
};
