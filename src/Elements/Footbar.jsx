import React from 'react'
import { Flex, Link, Text, Box } from "@chakra-ui/react";
import {motion} from "framer-motion"
import {FaLinkedin, FaGithub} from "react-icons/fa"

function Footbar() {
  return (
            <Flex opacity={0.2} 
            as={motion.div}
            whileHover={{ opacity:1, transition: {duration: .4} }} p={"3vw"} gap={"5vw"} direction="row"  textColor={"white"} bg="transparent" minW="fit-content" >
                <Box onClick={() => window.open('https://linkedin.com/in/misagh-azimi', '_blank')}
                as={motion.div}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                transition='.2s linear'
                _hover={{color:"gray.900"}}>
                    <FaLinkedin size={"5vw"}/>
                </Box>
                <Box  onClick={() => window.open("https://github.com/mazcoding", '_blank')}
                as={motion.div}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                transition='.2s linear'
                _hover={{color:"gray.900"}}>
                    <FaGithub size={"5vw"}/>
                </Box>
                <Text fontSize={{base: "xs", md:"0%"}}>____________</Text>
                <Text fontSize={{base: "xs", md:"0%"}}>©MA/2023</Text>
            </Flex>
  );
}

export default Footbar