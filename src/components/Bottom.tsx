import React, { useEffect, useState } from "react";
import { Box, BoxProps, IconButton, Icon, Spacer } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { WeatherCardContainer } from "./WeatherCardContainer";
import { VscRefresh } from "react-icons/vsc";
import { IWeatherInfoSection, IWeatherSegment } from "../types/interface";
import { constructUrl, monthName } from "../utils";
import groupBy from "lodash.groupby";

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
  data?: Array<IWeatherSegment>;
}

const iconUrl = "http://openweathermap.org/img/wn/:icon@4x.png";

export const Bottom = ({ reload, data }: IBottomProps) => {
  const [sections, setSections] = useState<IWeatherInfoSection[]>([]);

  useEffect(() => {
    if (data) {
      const url = constructUrl(iconUrl, { icon: data[0]?.weather[0]?.icon });
      const result = groupBy(data, monthName);

      const days: IWeatherInfoSection[] = [];
      for (const property in result) {
        let section = { title: property, data: result[property] };
        days.push(section);
      }

      setSections(days);
    }
  }, [data]);

  console.log(sections);

  return (
    <MotionBox
      variants={variants}
      initial="hidden"
      animate="visible"
      height="80vh"
      bg="white"
      borderTopRadius="3xl"
      padding="4"
      pt="7"
      pos="relative"
      overflowY="scroll"
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
        borderRadius="full"
      />

      <Spacer height="10" />
      <WeatherCardContainer data={sections} />
    </MotionBox>
  );
};
