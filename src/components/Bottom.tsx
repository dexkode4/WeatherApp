import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";
import { motion } from "framer-motion";

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
export const Bottom = () => {
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
    >
      Bottom
    </MotionBox>
  );
};
