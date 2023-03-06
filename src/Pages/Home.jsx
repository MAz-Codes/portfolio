import React from 'react'
import { Grid, Box, VStack, Heading, Text, Flex, Link, useBreakpointValue, Image } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { motion } from "framer-motion"
import Sidebar from '../Elements/Sidebar'
import Footbar from '../Elements/Footbar'

function Home() {

    const redirect = useNavigate();
    const isDesktop = useBreakpointValue({
        base: false,
        md: true,
      })

    return (
        <Box>
            <Flex
            direction={{base:"column", md:"row"}}
            minH="100vh"
            justifyContent={{base:"space-between",md:"start",lg:"start", "2xl":"center"}}
            alignItems="center"
            >
                {isDesktop ? (
                <Sidebar/>
                ) :(<></>)}
                <Box textColor={"white"} >
                        <Grid 
                        justifyContent="center" alignItems="center"
                        templateColumns={{base: "none",
                        md: "repeat(2, 1fr)",
                        xl: "repeat(2, 1fr)"}}
                        templateRows={{base: "repeat(2, 1fr)",
                        md: "none",
                        xl: "none"}}>
                            <VStack pl={{base:"0",md:"5vw"}} whiteSpace="nowrap" align={{base:"center", md:"start"}}  gap="4">
                                <Heading as={motion.div}  transition='.5s ease-out' fontSize={{base: "md", md:"xl",lg:"2xl", xl:"3xl"}} fontFamily={"MontserratBold"} textAlign={"left"}>MISAGH AZIMI</Heading>
                                <Text as={motion.div} transition='.5s ease-out' textAlign={"left"} fontSize={{base:"sm",md:"sm",lg:"md", xl:"lg"}}>Front-end developer and creator.</Text>
                                <Text as={motion.div} transition='.5s ease-out' textAlign={"left"} fontSize={{base:"sm", md:"sm",lg:"md", xl:"lg"}}>I create web apps using React.</Text>
                            </VStack>
                            <VStack  pr={{base:"0",md:"5vw"}} align={{base:"center", md:"end"}} gap="10" as={motion.div} layout transition='.5s ease-out' fontSize={{base:"6vh", md: "7xl", lg:"8xl", xl:"15vh"}}>
                                <Link
                                as={motion.div}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                transition='.5s linear'
                                onClick= {()=>redirect("/work")}
                                _hover= {{color: "gray.600" }}
                                fontFamily={"MontserratBold"}
                                >/WORK</Link>
                                <Link
                                as={motion.div}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                transition='.5s linear'
                                onClick= {()=>redirect("/about")}
                                _hover= {{color: "gray.600" }}
                                fontFamily={"MontserratBold"}
                                >/ABOUT</Link>
                                <Link
                                as={motion.div}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                transition='.5s linear'
                                onClick= {()=>redirect("/contact")}
                                _hover= {{color: "gray.600" }}
                                fontFamily={"MontserratBold"}
                                >/CONTACT</Link>
                            </VStack>
                        </Grid>
                        
                </Box>
                {!isDesktop ? (
                        <Footbar />
                        ) :(<></>)}
            </Flex>
        </Box>
  )
}

export default Home


