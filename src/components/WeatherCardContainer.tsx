import React from "react";
import { Box, IconButton, Icon } from "@chakra-ui/react";
import Carousel, { RenderArrowProps } from "react-elastic-carousel";
import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
];

export const WeatherCardContainer = () => {
  const renderArrow = (props: RenderArrowProps) => {
    return props.type === "PREV" ? (
      <IconButton
        onClick={props.onClick}
        aria-label="arrow"
        icon={<Icon as={IoChevronBackSharp} />}
        disabled={props.isEdge}
        borderRadius="full"
        size="sm"
      />
    ) : (
      <IconButton
        onClick={props.onClick}
        aria-label="arrow"
        icon={<Icon as={IoChevronForwardSharp} />}
        disabled={props.isEdge}
        borderRadius="full"
        size="sm"
      />
    );
  };
  return (
    <Box>
      <Carousel
        renderArrow={renderArrow}
        pagination={false}
        showEmptySlots={false}
        isRTL={false}
        breakPoints={breakPoints}
      >
        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
        <Box>4</Box>
      </Carousel>
    </Box>
  );
};
