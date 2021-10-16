import { Box, Flex } from '@chakra-ui/layout'
import React from 'react'
import { Bottom } from '../components/Bottom'
import { Top } from '../components/Top'

export const WeatherInfo = () => {
    return (
        <Flex direction="column" background="#2052D1" h="100vh">
            <Top/>
            <Bottom/>
        </Flex>
    )
}
