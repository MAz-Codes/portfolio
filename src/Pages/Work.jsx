import React, {useContext} from 'react'
import { Grid, Box, HStack, VStack, Heading, Text, Flex, Link, useBreakpointValue, Image } from '@chakra-ui/react'
import { motion} from "framer-motion"
import GlobalSidebar from '../Elements/GlobalSidebar'
import GlobalHeader from '../Elements/GlobalHeader'
import Ghostbar from '../Elements/Ghostbar'
import Footbar from '../Elements/Footbar'
import { FaEnvelope, FaPhoneSquare } from 'react-icons/fa'
import { ThemeContext } from '../Elements/AnimatedRoutes';

function Work() {
  const {isClicked, handleClick} = useContext(ThemeContext)
  const isDesktop = useBreakpointValue({
    base: false,
    md: true,
  })
return (
  <Box
      as={motion.div}
      initial={{opacity:0}}
      animate={{opacity:1, transition: {duration: 1} }}
      exit={{opacity:0, transition: {duration: 1} }}>
          <Flex
          direction={{base:"column", md:"row"}}
          minH="95vh"
          justifyContent="space-between"
          alignItems="center"
          >
            {!isDesktop ? (
            <Box position="sticky" w="100%"
            top="0"
            zIndex="sticky" >
            <GlobalHeader/>
            </Box>) : (<GlobalSidebar/>
            )}
            <Box py="10" textColor={isClicked ? 'gray.400' : "white"} w="60%" maxW="900px" justify={"center"}>
              <HStack justify="space-between">
                <VStack>
               
                  <Text>here</Text>
                </VStack>
                <VStack>
                
                  <Text>will be works</Text>
                </VStack>
              </HStack>
            </Box>
            <Ghostbar />
          </Flex>
          <Footbar/>
      </Box>
)
}

export default Work