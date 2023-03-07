import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Flex, Link, Text, Box } from "@chakra-ui/react";
import {motion} from "framer-motion";
import {FaLinkedin, FaGithub} from "react-icons/fa"

function GlobalSidebar() {

    const redirect = useNavigate();
  return (
            <Flex
            opacity={0.2} 
            as={motion.div}
            whileHover={{ opacity:1, transition: {duration: .4} }}
            direction="column" gap="10vh" justifyContent="center" alignItems="center" textColor={"white"} bg="transparent" minW={{base:"0%", md:"fit-content"}} minH={{base:"0%", md:"fit-content"}}>
               <Box>
                  <Link
                  onClick={() => window.open('https://linkedin.com/in/misagh-azimi', '_blank')}
                  as={motion.div}
                  whileHover={{ scale: 1.3,  }}
                  whileTap={{ scale: 0.9 }}
                  transition='.2s linear'
                  _hover= {{color: "gray.900", cursor: "pointer"}}
                  fontSize={{base: "0%", md:"sm"}}
                  >    <FaLinkedin size={"2vw"} style={{minHeight:"15px", maxWidth:"30px"}}/>
                  </Link>
                </Box>
                <Box >
                  <Link
                  onClick={() => window.open("https://github.com/mazcoding", '_blank')}
                  as={motion.div}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                  transition='.2s linear'
                  _hover= {{color: "gray.900" }}
                  fontSize={{base: "0%", md:"sm"}}
                  >
                    <FaGithub size={"2vw"} style={{minHeight:"15px",maxWidth:"30px"}}/>
                  </Link>
                </Box>
                <Text fontSize={{base: "0%", md:"sm"}} transform="rotate(270deg)">____________</Text>
                <Box onClick={() => redirect("/portfolio")} transform="rotate(270deg)">
                    <Link
                    as={motion.div}
                    whileHover={{ scale: 1.3, transition: {duration: .6}}}
                    whileTap={{ scale: 0.9 }}
                    transition='.2s linear'
                    _hover= {{color: "gray.900" }}
                    fontSize={{base: "0", md:"sm"}}
                    >HOME</Link>
                </Box>
                <Box onClick={() => redirect("/portfolio/work")} transform="rotate(270deg)">
                    <Link
                    as={motion.div}
                    whileHover={{ scale: 1.3, transition: {duration: .6} }}
                    whileTap={{ scale: 0.9 }}
                    transition='.2s linear'
                    _hover= {{color: "gray.900" }}
                    fontSize={{base: "0", md:"sm"}}
                    >WORK</Link>
                </Box>
                <Box onClick={() => redirect("/portfolio/about")} transform="rotate(270deg)">
                    <Link
                    as={motion.div}
                    whileHover={{ scale: 1.3, transition: {duration: .6} }}
                    whileTap={{ scale: 0.9 }}
                    transition='.2s linear'
                    _hover= {{color: "gray.900" }}
                    fontSize={{base: "0", md:"sm"}}
                    >ABOUT</Link>
                </Box>
                <Box onClick={() => redirect("/portfolio/contact")} transform="rotate(270deg)">
                    <Link
                    as={motion.div}
                    whileHover={{ scale: 1.3, transition: {duration: .6} }}
                    whileTap={{ scale: 0.9 }}
                    transition='.2s linear'
                    _hover= {{color: "gray.900" }}
                    fontSize={{base: "0", md:"sm"}}
                    >CONTACT</Link>
                </Box>
            </Flex>
  );
}

export default GlobalSidebar