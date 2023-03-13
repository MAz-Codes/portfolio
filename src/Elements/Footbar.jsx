import React from 'react'
import {Box, Text, useBreakpointValue } from "@chakra-ui/react";
import {FaLinkedin, FaGithub} from "react-icons/fa"
import { motion } from 'framer-motion';

function Footbar() {
  const isDesktop= useBreakpointValue({
    base: false,
    md: true,
  })

  return (
    <Box
    gap="10"
    boxShadow={"dark-lg"}
    justifyContent="center"
    alignItems="center"
    textAlign="center"
    display="flex"
    opacity={0.4}
    minH="5vh"
    textColor={"white"}>
      <Text fontSize={"xs"}>© Misagh Azimi /2023</Text>
      {!isDesktop ? (
        <Box
        display={"flex"}
        gap="3vw">
          <Box onClick={() => window.open('https://linkedin.com/in/misagh-azimi', '_blank')}
          as={motion.div}
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.9 }}
          transition='.2s linear'
          _hover={{color:"gray.900"}}>
            <FaLinkedin size={"4vw"}/>
          </Box>
          <Box onClick={() => window.open("https://github.com/mazcoding", '_blank')}
          as={motion.div}
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.9 }}
          transition='.2s linear'
          _hover={{color:"gray.900"}}>
            <FaGithub size={"4vw"} />
          </Box>
        </Box>)
      : (<></>)
      }

    </Box>
  );
}

export default Footbar