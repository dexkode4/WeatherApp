import React, { useEffect, useState } from "react";
import { IconButton, Icon, Flex, useMediaQuery } from "@chakra-ui/react";
import Carousel, { RenderArrowProps } from "react-elastic-carousel";
import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";
import { IWeatherInfoSection } from "../types/interface";
import { WeatherCard } from "./WeatherCard";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import dayjs from "dayjs";

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

  useEffect(() => {
    console.log("====================================");
    console.log(isMobile);
    console.log("====================================");
  }, [isMobile]);

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
            key={index}
            handleSelect={() => handleSelectWeatherCard(index)}
            active={selectedCard === index}
          />
        ))}
      </Carousel>

      <Flex mt="14" justifyContent="center" h="400px" w={["100%", "500px"]}>
        {weatherSegmentData && (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={weatherSegmentData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" stroke="#fff" />
              <YAxis stroke="#fff" />
              <Tooltip />
              <Legend />
              <Bar dataKey="temp" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        )}
      </Flex>
    </Flex>
  );
};
