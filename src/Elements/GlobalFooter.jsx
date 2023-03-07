import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Flex, Link, Text, Box } from "@chakra-ui/react";
import {motion} from "framer-motion"
import {FaLinkedin, FaGithub} from "react-icons/fa"

function GlobalFooter() {

    const redirect = useNavigate();
    
  return (
            <Flex opacity={0.4} 
            as={motion.div}
            whileHover={{ opacity:1, transition: {duration: .4} }} p={"3vw"} gap={"5vw"} direction="row"  textColor={"white"} bg="transparent" minW="fit-content" >
                <Box onClick={() => window.open('https://linkedin.com/in/misagh-azimi', '_blank')}
                as={motion.div}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                transition='.2s linear'
                _hover={{color:"gray.900"}}>
                    <FaLinkedin size={"4vw"}/>
                </Box>
                <Box  onClick={() => window.open("https://github.com/mazcoding", '_blank')}
                as={motion.div}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                transition='.2s linear'
                _hover={{color:"gray.900"}}>
                    <FaGithub size={"4vw"} />
                </Box>
                <Text fontSize={{base: "xs", md:"0%"}}>____________</Text>
                <Box onClick={() => redirect("/portfolio")}>
                    <Link
                    as={motion.div}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                    transition='.2s linear'
                    _hover= {{color: "gray.900" }}
                    fontSize={{base: "xs", md:"0%"}}
                    >HOME</Link>
                </Box>
                <Box onClick={() => redirect("/portfolio/work")}>
                    <Link
                    as={motion.div}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                    transition='.2s linear'
                    _hover= {{color: "gray.900" }}
                    fontSize={{base: "xs", md:"0%"}}
                    >WORK</Link>
                </Box>
                <Box onClick={() => redirect("/portfolio/about")}>
                    <Link
                    as={motion.div}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                    transition='.2s linear'
                    _hover= {{color: "gray.900" }}
                    fontSize={{base: "xs", md:"0%"}}
                    >ABOUT</Link>
                </Box>
                <Box onClick={() => redirect("/portfolio/contact")}>
                    <Link
                    as={motion.div}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                    transition='.2s linear'
                    _hover= {{color: "gray.900" }}
                    fontSize={{base: "xs", md:"0%"}}
                    >CONTACT</Link>
                </Box>
            </Flex>
  );
}

export default GlobalFooter