import React from 'react'
import { Grid, Box, HStack, VStack, Heading, Text, Flex, Link, useBreakpointValue, Image } from '@chakra-ui/react'
import { motion} from "framer-motion"
import GlobalSidebar from '../Elements/GlobalSidebar'
import GlobalHeader from '../Elements/GlobalHeader'
import Ghostbar from '../Elements/Ghostbar'
import Footbar from '../Elements/Footbar'
import { FaEnvelope, FaPhoneSquare } from 'react-icons/fa'

function Work() {
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
            <Box py="10" textColor={"white"} w="60%" maxW="900px" justify={"center"}>
              <HStack justify="space-between">
                <VStack>
                  <FaEnvelope/>
                  <Text>info@mazcoding.com</Text>
                </VStack>
                <VStack>
                  <FaPhoneSquare/>
                  <Text>+49 (0) 201 28811041</Text>
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