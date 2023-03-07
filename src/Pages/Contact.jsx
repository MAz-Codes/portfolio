import React from 'react'
import { Grid, Box, VStack, Heading, Text, Flex, Link, useBreakpointValue, Image } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { motion} from "framer-motion"
import GlobalSidebar from '../Elements/GlobalSidebar'
import GlobalFooter from '../Elements/GlobalFooter'

function Contact() {
  const redirect = useNavigate();
  const isDesktop = useBreakpointValue({
      base: false,
      md: true,
    })
  return (
    <Box
        as={motion.div}
        initial={{opacity:0}}
        animate={{opacity:1, transition: {duration: 1} }}
        exit={{opacity:0}}>
            <Flex
            direction={{base:"column", md:"row"}}
            minH="100vh"
            justifyContent={{base:"space-between",
            md:"start",
            lg:"start", 
            "2xl":"center"}}
            alignItems="center"
            >
                {isDesktop ? (
                <GlobalSidebar/>
                ) :(<></>)}
                <Box textColor={"white"} >
                    <Grid
                    justifyContent="center"
                    alignItems="center"
                    templateColumns={{base: "none",
                    md: "repeat(2, 1fr)",
                    xl: "repeat(2, 1fr)"}}
                    templateRows={{base: "repeat(2, 1fr)",
                    md: "none",
                    xl: "none"}}>
                    </Grid>
                </Box>
                {!isDesktop ? (
                <GlobalFooter  />
                ) :(<></>)}
            </Flex>
        </Box>
  )
}

export default Contact