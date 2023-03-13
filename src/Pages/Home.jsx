import React, {useContext} from 'react'
import { Grid, Box, VStack, Heading, Text, Flex, Link, useBreakpointValue} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { motion} from "framer-motion"
import GlobalSidebar from '../Elements/GlobalSidebar'
import GlobalHeader from '../Elements/GlobalHeader'
import Footbar from '../Elements/Footbar'
import { ThemeContext } from '../Elements/AnimatedRoutes';

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
            justifyContent={{base:"space-between",
            md:"start",
            lg:"start",
            "2xl":"center"}}
            alignItems="center"
            >
                {isDesktop ? (
                <GlobalSidebar/>
                ) :(<Box position="sticky" w="100%"
                top="0"
                zIndex="sticky" >
                <GlobalHeader/>
                </Box>)}
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
                        pt={{base:"5vh",md:0}}
                        pl={{base:"0",md:"5vw"}}
                        whiteSpace="nowrap"
                        align={{base:"center", md:"start"}}
                        gap="4">
                            <Heading
                            as={motion.div}
                            transition='.5s ease-out'
                            fontSize={{base: "md", md:"xl",lg:"2xl", xl:"3xl"}}
                            fontFamily={"MontserratBold"}
                            textAlign={"left"}>
                            MISAGH AZIMI
                            </Heading>
                            <Text
                            as={motion.div}
                            transition='.5s ease-out'
                            textAlign={"left"}
                            fontSize={{base:"sm",md:"sm",lg:"md", xl:"lg"}}>
                            Front-end developer and creator.
                            </Text>
                            <Text
                            as={motion.div}
                            transition='.5s ease-out'
                            textAlign={"left"}
                            fontSize={{base:"sm", md:"sm",lg:"md", xl:"lg"}}>
                            I create web apps using React.
                            </Text>
                        </VStack>
                        <VStack
                        pr={{base:"0",md:"5vw"}}
                        align={{base:"center", md:"end"}}
                        justify="left"
                        gap="10" as={motion.div}
                        layout transition='.5s ease-out'
                        fontSize={{base:"6vh", md: "7xl", lg:"8xl", xl:"15vh"}}>
                            <Link
                            as={motion.div}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition='.5s linear'
                            onClick= {()=>redirect("/portfolio/work")}
                            _hover= {{color: "gray.600" }}
                            fontFamily={"MontserratBold"}>
                            /WORK
                            </Link>
                            <Link
                            as={motion.div}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition='.5s linear'
                            onClick= {()=>redirect("/portfolio/about")}
                            _hover= {{color: "gray.600" }}
                            fontFamily={"MontserratBold"}>
                            /ABOUT
                            </Link>
                            <Link
                            as={motion.div}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition='.5s linear'
                            onClick= {()=>redirect("/portfolio/contact")}
                            _hover= {{color: "gray.600" }}
                            fontFamily={"MontserratBold"}>
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


