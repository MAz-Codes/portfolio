import React, {useContext} from 'react'
import { Box, Stack, VStack, Flex, useBreakpointValue, Image, Button } from '@chakra-ui/react'
import { motion} from "framer-motion"

import { ThemeContext } from '../Elements/AnimatedRoutes';

import GlobalSidebar from '../Elements/GlobalSidebar'
import GlobalHeader from '../Elements/GlobalHeader'
import Ghostbar from '../Elements/Ghostbar'
import Footbar from '../Elements/Footbar'

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
            <Box
            position="sticky"
            w="100%"
            top="0"
            zIndex="sticky">
            <GlobalHeader/>
            </Box>) : (<GlobalSidebar/>
            )}
            <Box
            py="10"
            textColor={isClicked ? 'gray.400' : "white"}
            w="70vw"
            justify={"center"}>
              <Stack
              justify="space-between"
              gap="2vw"
              direction={{base:"column", md:"row"}}>
                <VStack gap="2vw">
                  <VStack>
                    <Image
                    boxShadow="dark-lg"
                    transition='.5s ease-out'
                    opacity={isClicked ? 0.8 : 1}
                    borderRadius="1vh"
                    src='TaraFrontTEXT.png'/>
                    <Button
                    bg="transparent"
                    border="1px"
                    _hover={{bgColor:"#dbb2d7", borderColor:"transparent"}}
                    fontFamily='Montserratbold'
                    >MORE</Button>
                  </VStack>
                </VStack>
                <VStack gap="2vw">
                  <VStack>
                    <Image
                    boxShadow="dark-lg"
                    transition='.5s ease-out'
                    opacity={isClicked ? 0.8 : 1}
                    borderRadius="1vh"
                    src='nbaFrontText.png'/>
                    <Button
                    bg="transparent"
                    border="1px"
                    _hover={{bgColor:"#badbce", borderColor:"transparent"}}
                    fontFamily='Montserratbold'
                    >MORE</Button>
                  </VStack>
                </VStack>
              </Stack>
            </Box>
            <Ghostbar />
          </Flex>
          <Footbar/>
      </Box>
)
}

export default Work