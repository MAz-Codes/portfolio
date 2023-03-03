import React from 'react'
import { Grid, Box, VStack, Heading, Text, Flex } from '@chakra-ui/react'
import Sidebar from '../Elements/Sidebar'
import Footer from '../Elements/Footer'


function Home() {
  return (
    <div>
    <Flex minH="100vh" justifyContent="start" alignItems="center" >
        <Sidebar />
        <Box textColor={"white"} padding="20" >
            <Grid alignItems="center" 
            templateColumns={{base: "repeat(1, 1fr)",
                            md: "repeat(2, 1fr)",
                            xl: "repeat(2, 1fr)"}}
            gap={20}
            >
                <VStack align={"start"} justify="end">
                    <Heading fontSize={{base: "sm", md:"lg", lg:"xl", xl:"2xl"}} fontFamily={"MontserratBold"} textAlign={"left"}>MISAGH AZIMI</Heading>
                    <Text textAlign={"left"} fontSize={{base: "xs", md:"sm",lg:"md", xl:"lg"}}>Front-end developer and creator.</Text>
                    <Text textAlign={"left"} fontSize={{base: "xs", md:"sm",lg:"md", xl:"lg"}}>I create beautiful and responsive<br></br> web apps in Germany.</Text>
                </VStack>
                <VStack align={"end"} gap="10">
                    <Heading fontFamily={"MontserratBold"} fontSize={{base: "5xl", md: "7xl", lg:"9xl", xl:"13vh", "2xl":"17vh"}}>/WORK</Heading>
                    <Heading fontFamily={"MontserratBold"} fontSize={{base: "5xl", md: "7xl", lg:"9xl", xl:"13vh", "2xl":"17vh"}}>/ABOUT</Heading>
                    <Heading fontFamily={"MontserratBold"} fontSize={{base: "5xl", md: "7xl", lg:"9xl", xl:"13vh", "2xl":"17vh"}}>/CONTACT</Heading>
                </VStack>
            </Grid>
        </Box>
    </Flex>
    </div>
  )
}

export default Home
