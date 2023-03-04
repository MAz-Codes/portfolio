import React from 'react'
import { Grid, Box, VStack, Heading, Text, Flex, Link } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../Elements/Sidebar'


function Home() {

    const redirect = useNavigate();
  return (
    <Box>
    <Flex minH="100vh" justifyContent="start" alignItems="center"mx="5">
        <Sidebar/>
        <Box textColor={"white"} padding="20" >
            <Grid alignItems="center"
            templateColumns={{base: "repeat(1, 1fr)",
                            md: "repeat(2, 1fr)",
                            xl: "repeat(2, 1fr)"}}
            gap={20}
            >
                <VStack align={"start"} justify="end" gap="4">
                    <Heading fontSize={{base: "sm", md:"lg", xl:"xl"}} fontFamily={"MontserratBold"} textAlign={"left"}>MISAGH AZIMI</Heading>
                    <Text textAlign={"left"} fontSize={{base: "xs", md:"xs",lg:"sm", xl:"lg"}}>Front-end developer and creator.</Text>
                    <Text textAlign={"left"} fontSize={{base: "xs", md:"xs",lg:"sm", xl:"lg"}}>I create beautiful and responsive<br></br> web apps in Germany.</Text>
                </VStack>
                <VStack align={"end"} gap="10">
                    <Link
                    onClick= {()=>redirect("/work")}
                    _hover= {{color: "gray.600" }}
                    fontFamily={"MontserratBold"}
                    fontSize={{base: "5xl", md: "7xl", lg:"9xl", xl:"13vh", "2xl":"15vh"}}
                    >/WORK</Link>
                    <Link
                    onClick= {()=>redirect("/about")}
                    _hover= {{color: "gray.600" }}
                    fontFamily={"MontserratBold"}
                    fontSize={{base: "5xl", md: "7xl", lg:"9xl", xl:"13vh", "2xl":"15vh"}}
                    >/ABOUT</Link>
                    <Link
                    onClick= {()=>redirect("/contact")}
                    _hover= {{color: "gray.600" }}
                    fontFamily={"MontserratBold"}
                    fontSize={{base: "5xl", md: "7xl", lg:"9xl", xl:"13vh", "2xl":"15vh"}}
                    >/CONTACT</Link>
                </VStack>
            </Grid>
        </Box>
    </Flex>
    </Box>
  )
}

export default Home
