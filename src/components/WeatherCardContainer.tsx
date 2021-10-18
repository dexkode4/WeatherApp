import React, { useEffect, useState } from "react";
import { IconButton, Icon, Flex, useMediaQuery } from "@chakra-ui/react";
import Carousel, { RenderArrowProps } from "react-elastic-carousel";
import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";
import { IWeatherInfoSection } from "../types/interface";
import { WeatherCard } from "./WeatherCard";
import dayjs from "dayjs";
import { Barchart } from "./Barchart";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
];

interface IBarchartData {
  time: string;
  temp: number;
}

interface IWeatherCardContainerProps {
  data: Array<IWeatherInfoSection>;
}

export const WeatherCardContainer = ({ data }: IWeatherCardContainerProps) => {
  const [weatherSegmentData, setWeatherSegmentData] =
    useState<Array<IBarchartData>>();
  const [selectedCard, setSelectedCard] = useState<number>();
  const [isMobile] = useMediaQuery("(max-width: 665px)");

  const handleSelectWeatherCard = (index: number) => {
    setSelectedCard(index);
    const weatherSegmentData: Array<IBarchartData> = data[index].data.map(
      (item) => ({
        time: dayjs(item.dt_txt).format("ha"),
        temp: item.main.temp,
      })
    );

    setWeatherSegmentData(weatherSegmentData);
  };

  useEffect(() => {
    if (data && selectedCard) {
      const weatherSegmentData: Array<IBarchartData> = data[
        selectedCard
      ]?.data?.map((item) => ({
        time: dayjs(item.dt_txt).format("ha"),
        temp: item.main.temp,
      }));

      setWeatherSegmentData(weatherSegmentData);
    }
  }, [data]);

  const renderArrow = (props: RenderArrowProps) => {
    return props.type === "PREV" ? (
      <IconButton
        onClick={() => {
          props.onClick();
          isMobile && setWeatherSegmentData(undefined);
        }}
        aria-label="arrow"
        icon={<Icon as={IoChevronBackSharp} />}
        disabled={props.isEdge}
        borderRadius="full"
        size="sm"
        alignSelf="center"
      />
    ) : (
      <IconButton
        onClick={() => {
          props.onClick();
          isMobile && setWeatherSegmentData(undefined);
        }}
        aria-label="arrow"
        icon={<Icon as={IoChevronForwardSharp} />}
        disabled={props.isEdge}
        borderRadius="full"
        size="sm"
        alignSelf="center"
      />
    );
  };
  return (
    <Flex flexDirection="column" alignItems="center">
      <Carousel
        renderArrow={renderArrow}
        pagination={false}
        showEmptySlots={false}
        isRTL={false}
        breakPoints={breakPoints}
      >
        {data.map((item, index) => (
          <WeatherCard
            data={item}
            key={JSON.stringify(item.data[0].main)}
            handleSelect={() => handleSelectWeatherCard(index)}
            active={selectedCard === index}
          />
        ))}
      </Carousel>

      {weatherSegmentData && (
        <Flex mt="14" justifyContent="center" h="400px" w={["100%", "500px"]}>
          <Barchart data={weatherSegmentData} />
        </Flex>
      )}
    </Flex>
  );
};
