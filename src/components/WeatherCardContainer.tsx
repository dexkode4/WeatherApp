import React, { useState } from "react";
import { IconButton, Icon, Flex } from "@chakra-ui/react";
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

const barChartData = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
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

  const handleSelectWeatherCard = (index: number) => {
    const weatherSegmentData: Array<IBarchartData> = data[index].data.map(
      (item) => ({
        time: dayjs(item.dt_txt).format("ha"),
        temp: item.main.temp,
      })
    );

    setWeatherSegmentData(weatherSegmentData);

    console.log("====================================");
    console.log("weatherSegmentData", weatherSegmentData);
    console.log("====================================");
  };

  const renderArrow = (props: RenderArrowProps) => {
    return props.type === "PREV" ? (
      <IconButton
        onClick={props.onClick}
        aria-label="arrow"
        icon={<Icon as={IoChevronBackSharp} />}
        disabled={props.isEdge}
        borderRadius="full"
        size="sm"
        alignSelf="center"
      />
    ) : (
      <IconButton
        onClick={props.onClick}
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
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="temp" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        )}
      </Flex>
    </Flex>
  );
};
