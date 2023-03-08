import React from 'react'
import { Flex, Link, Text, Box, Switch } from "@chakra-ui/react";
import {motion} from "framer-motion";
import {FaLinkedin, FaGithub} from "react-icons/fa"

function Sidebar() {

  return (
            <Flex opacity={0.2} 
            as={motion.div}
            whileHover={{ opacity:1, transition: {duration: .4} }} direction="column" gap="10vh" justifyContent="center" alignItems="center" textColor={"white"} bg="transparent" minW={{base:"0%", md:"fit-content"}} minH={{base:"0%", md:"fit-content"}}>
              <Switch size='sm' />
               <Box>
                  <Link
                  onClick={() => window.open('https://linkedin.com/in/misagh-azimi', '_blank')}
                  as={motion.div}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                  transition='.2s linear'
                  _hover= {{color: "gray.900", cursor: "pointer"}}
                  fontSize={{base: "0%", md:"sm"}}
                  >    <FaLinkedin size={"2vw"}/>
                  </Link>
                </Box>
                <Box>
                  <Link
                  onClick={() => window.open("https://github.com/mazcoding", '_blank')}
                  as={motion.div}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                  transition='.2s linear'
                  _hover= {{color: "gray.900" }}
                  fontSize={{base: "0%", md:"sm"}}
                  >
                    <FaGithub size={"2vw"}/>
                  </Link>
                </Box>
                <Text fontSize={{base: "0%", md:"sm"}} transform="rotate(270deg)">____________</Text>
                <Text fontSize={{base: "0%", md:"sm"}} transform="rotate(270deg)"></Text>
                <Text fontSize={{base: "0%", md:"xs"}} transform="rotate(270deg)"></Text>
                <Text fontSize={{base: "0%", md:"sm"}} transform="rotate(270deg)"></Text>
                <Text fontSize={{base: "0%", md:"sm"}}></Text>
                <Text fontSize={{base: "0%", md:"xs"}} transform="rotate(270deg)">©MA/2023</Text>
            </Flex>
  );
}

export default Sidebar