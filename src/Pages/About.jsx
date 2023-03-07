import React from 'react'
import { Grid, Box, VStack, Heading, Text, Flex, Link, useBreakpointValue, Image } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { motion} from "framer-motion"
import GlobalSidebar from '../Elements/GlobalSidebar'
import GlobalHeader from '../Elements/GlobalHeader'
import Ghostbar from '../Elements/Ghostbar'
import Footbar from '../Elements/Footbar'

function About() {
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
                </Box>
                ) : (<GlobalSidebar/>)}
                <Box py="10" textColor={"white"} w="60%" maxW="900px" justify={"center"}>
                      <VStack as={motion.div} transition='.5s ease-out' gap={10} fontSize={{base:"xs", sm:"sm", md: "md", lg:"md", xl:"lg"}}>
                        <Text lineHeight={2}>I am a front-end developer based in Germany. My passion is creating beautiful, responsive and modern websites using frameworks like React and Chakra UI. With a background in audio-visual media and the arts, I have a lot of confidence in my aesthetics and my vision for projects.<br/><br/>

                        After building simple WordPress websites for almost 5 years, I recently decided to take my skills to the next level by learning the front-end languages and a range of tools and frameworks such as:</Text>

                        <Grid templateColumns="repeat(9, 1fr)" gap={"1vh"}  >
                          <Image src="javascript.svg" minH="2vh" maxH={{base:"4vh", md:"6vh", xl:"7vh"}}/>
                          <Image src="html.svg" minH="2vh" maxH={{base:"4vh", md:"6vh", xl:"7vh"}} />
                          <Image src="css.svg" minH="2vh" maxH={{base:"4vh", md:"6vh", xl:"7vh"}}/>
                          <Image src="react.svg" minH="2vh" maxH={{base:"4vh", md:"6vh", xl:"7vh"}}/>
                          <Image src="logomark-colored.svg" minH="2vh" maxH={{base:"4vh", md:"6vh", xl:"7vh"}} />
                          <Image src="node.svg" minH="2vh" maxH={{base:"4vh", md:"6vh", xl:"7vh"}}/>
                          <Image src="Vite.svg" minH="2vh" maxH={{base:"4vh", md:"6vh", xl:"7vh"}}/>
                          <Image src="figma.svg" minH="2vh" maxH={{base:"4vh", md:"6vh", xl:"7vh"}} />
                          <Image src="github.svg" minH="2h" maxH={{base:"4vh", md:"6vh", xl:"7vh"}}/>
                        </Grid>
                        <Text>I hold the Front-End Developer Professional Certificate from "Meta" (formally known as Facebook).</Text>
                        <Text>As a developer and a creator, I'm always looking for new challenges and inspirations to create awesome web apps. I'm excited to take on new projects and deliver high-quality work that not only meets but exceeds expectations.</Text>
                      </VStack>
                </Box>
                {isDesktop ? (
                <Ghostbar />
                ) :(<></>)}
            </Flex>
            <Footbar/>
        </Box>
  )
}
export default About