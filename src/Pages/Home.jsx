import React from 'react'
import { Grid, Box, VStack, Heading, Text, Flex, Link, useBreakpointValue } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { motion } from "framer-motion"
import Sidebar from '../Elements/Sidebar'
import Footbar from '../Elements/Footbar'

function Home() {

    const redirect = useNavigate();
    
    return (
        <Box>
            
            <Flex minH="100vh" justifyContent="start" alignItems="center"
            >
                <Sidebar/>
                <Box textColor={"white"} >
                        <Grid alignItems="center"
                        templateColumns={{base: "repeat(1, 1fr)",
                                        md: "repeat(2, 1fr)",
                                        xl: "repeat(2, 1fr)"}}
                        >
                            <VStack pl="5vw" whiteSpace="nowrap" align={"start"} justify="end" gap="4">
                                <Heading as={motion.div}  transition='.5s ease-out' fontSize={{md:"xl",lg:"2xl", xl:"3xl"}} fontFamily={"MontserratBold"} textAlign={"left"}>MISAGH AZIMI</Heading>
                                <Text as={motion.div} transition='.5s ease-out' textAlign={"left"} fontSize={{md:"xs",lg:"sm", xl:"lg"}}>Front-end developer and creator.</Text>
                                <Text as={motion.div} transition='.5s ease-out' textAlign={"left"} fontSize={{ md:"xs",lg:"sm", xl:"lg"}}>I create web apps using React.</Text>
                            </VStack>
                            <VStack pr="5vw"align={"end"} gap="10" as={motion.div} layout transition='.5s ease-out' fontSize={{md: "7xl", lg:"8xl", xl:"9xl"}}>
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
            </Flex>
        </Box>
  )
}

export default Home


