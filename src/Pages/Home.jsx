import React, {useContext} from 'react'
import { Grid, Box, VStack, Heading, Text, Flex, Link, useBreakpointValue} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { motion} from "framer-motion"

import { ThemeContext } from '../Elements/AnimatedRoutes';

import GlobalSidebar from '../Elements/GlobalSidebar'
import GlobalHeader from '../Elements/GlobalHeader'
import Footbar from '../Elements/Footbar'


function Home() {
    const {isClicked, handleClick} = useContext(ThemeContext)
    const redirect = useNavigate();
    const isDesktop = useBreakpointValue({
        base: false,
        md: true,
      })

    return (
        <Box
        as={motion.div}
        initial={{opacity:0}}
        animate={{opacity:1, transition: {duration: 2} }}
        exit={{opacity:0}}>
            <Flex
            direction={{base:"column", md:"row"}}
            minH="95vh"
            justifyContent="space-between"
            alignItems="center"
            >
                {isDesktop ? (
                    <Box>
                        <GlobalSidebar/>
                    </Box>
                ) :(
                    <Box
                    position="sticky"
                    w="100%"
                    top="0"
                    zIndex="sticky" >
                        <GlobalHeader/>
                    </Box>
                )}
                <Box textColor={isClicked ? 'gray.400' : "white"}>
                    <Grid
                    pb={{base:"5vh",md:0}}
                    justifyContent="center"
                    alignItems={{base:"start", md:"center"}}
                    templateColumns={{base: "none",
                    md: "repeat(2, 1fr)",
                    xl: "repeat(2, 1fr)"}}
                    templateRows={{base: "repeat(2, 1fr)",
                    md: "none",
                    xl: "none"}}>
                        <VStack
                        pl={{base:"0",sm:"1vw", md:"3vw",lg:"5vw", xl:"7vw", "2xl":"10vw"}}
                        whiteSpace="nowrap"
                        align={{base:"center", md:"start"}}
                        gap="4">
                            <Heading
                            as={motion.div}
                            transition='.5s ease-out'
                            fontSize={{base: "md", md:"xl",lg:"2xl", xl:"5xl", "2xl":"6xl"}}
                            fontFamily="Oswald-Regular"
                            textAlign={"left"}>
                            MISAGH AZIMI
                            </Heading>
                            <Text
                            as={motion.div}
                            transition='.5s ease-out'
                            textAlign={"left"}
                            fontSize={{base:"sm",md:"sm",lg:"md", xl:"lg", "2xl":"2xl"}}>
                            Front-end developer and media creator.
                            </Text>
                        </VStack>
                        <VStack
                        mb={{base:"10vh",md:"0"}}
                        mr={{base:"0",sm:"5vw", md:"8vw",lg:"10vw", xl:"12vw", "2xl":"15vw"}}
                        pl={{base:"0",md:"5vw"}}
                        align={{base:"center", md:"end"}}
                        as={motion.div}
                        layout
                        transition='.5s ease-out'
                        fontSize={{base:"6vh", md: "7xl", lg:"8xl", xl:"15vh"}}>
                            <Link
                            as={motion.div}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition='.5s linear'
                            onClick= {()=>redirect("/work")}
                            _hover= {{color: "gray.600" }}
                            fontFamily="Oswald-Regular"
                            >
                            /WORK
                            </Link>
                            <Link
                            as={motion.div}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition='.5s linear'
                            onClick= {()=>redirect("/about")}
                            _hover= {{color: "gray.600" }}
                            fontFamily="Oswald-Regular">
                            /ABOUT
                            </Link>
                            <Link
                            as={motion.div}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition='.5s linear'
                            onClick= {()=>redirect("/contact")}
                            _hover= {{color: "gray.600" }}
                            fontFamily="Oswald-Regular">
                            /CONTACT
                            </Link>
                        </VStack>
                    </Grid>
                </Box>
            </Flex>
            <Footbar/>
        </Box>
  )
}

export default Home


