import React from 'react'
import { Grid, Box, VStack, HStack, Text, Flex, Link, useBreakpointValue, Image, Heading } from '@chakra-ui/react'
import { motion} from "framer-motion"
import GlobalSidebar from '../Elements/GlobalSidebar'
import GlobalHeader from '../Elements/GlobalHeader'
import Ghostbar from '../Elements/Ghostbar'
import Footbar from '../Elements/Footbar'
import { FaEnvelope, FaPhoneSquare } from 'react-icons/fa'

function Contact() {
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
              <HStack as={motion.div} transition='.5s ease-out'  justify="space-between" pb="20vh">
                <VStack>
                  <FaEnvelope/>
                  <Text as={motion.div} transition='.5s ease-out'  fontSize={{base:"xs", md:"sm",lg:"md", xl:"md"}}>info@mazcoding.com</Text>
                </VStack>
                <VStack>
                  <FaPhoneSquare/>
                  <Text as={motion.div} transition='.5s ease-out'  fontSize={{base:"xs", md:"sm",lg:"md", xl:"md"}}>+49 (0) 201 28811041</Text>
                </VStack>
              </HStack>
              <Heading as={motion.div} transition='.5s ease-out'  fontFamily={"Montserratbold"} fontSize={{base:"sm", md:"md",lg:"lg", xl:"lg"}}>Disclaimer:</Heading>
              <Text as={motion.div} transition='.5s ease-out' fontSize={{base:"xs", md:"sm",lg:"md", xl:"md"}}> The contents of this website have been created by Misagh Azimi, and are intended solely for the purpose of showcasing my work and skills as a front-end developer. This website does not collect any personal information from its visitors, and no cookies or tracking technologies are activly used by the creator.

              If you have any questions or concerns about this website, please feel free to contact me using the information provided above.</Text>
            </Box>
            <Ghostbar />
          </Flex>
          <Footbar/>
      </Box>
)
}

export default Contact