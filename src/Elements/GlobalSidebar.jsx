import React , {useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import { Flex, Link, Text, Box, Switch, VStack } from "@chakra-ui/react";
import {motion} from "framer-motion";
import {FaLinkedin, FaGithub, FaMoon, FaSun} from "react-icons/fa"
import {ThemeContext} from "./AnimatedRoutes"

function GlobalSidebar() {

  const { isClicked, handleClick } = useContext(ThemeContext);
  const redirect = useNavigate();

  return (
    <Flex
    as={motion.div}
    whileHover={{ opacity:1, transition: {duration: .4} }}
    direction="column"
    gap="7vh"
    justifyContent="center"
    alignItems="center"
    textColor={isClicked ? 'gray.500' : "white"}
    bg="transparent"
    minW={{base:"0%", md:"fit-content"}}
    minH={{base:"0%", md:"fit-content"}}>
      <VStack>
        <FaSun size="9"/>
        <Switch
        colorScheme="blue"
        transform="rotate(90deg)"
        size="sm"
        isChecked={isClicked}
        onChange={handleClick}
        />
        <FaMoon size="9"/>
      </VStack>
      <Box>
        <Link
        onClick={() => window.open('https://linkedin.com/in/misagh-azimi', '_blank')}
        as={motion.div}
        whileHover={{ scale: 1.3,  }}
        whileTap={{ scale: 0.9 }}
        transition='.2s linear'
        _hover= {{color: "gray.900", cursor: "pointer"}}
        fontSize={{base: "0%", md:"sm"}}
        >
          <FaLinkedin
          size={"2vw"}
          style={{minHeight:"15px", maxWidth:"30px"}}/>
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
          <FaGithub
          size={"2vw"}
          style={{minHeight:"15px",maxWidth:"30px"}}/>
        </Link>
      </Box>
      <Text fontSize={{base: "0%", md:"sm"}} transform="rotate(270deg)">---</Text>
      <Box onClick={() => redirect("/")} transform="rotate(270deg)">
        <Link
        as={motion.div}
        whileHover={{ scale: 1.3, transition: {duration: .6}}}
        whileTap={{ scale: 0.9 }}
        transition='.2s linear'
        _hover= {{color: "gray.900" }}
        fontSize={{base: "0", md:"xs"}}
        >HOME</Link>
      </Box>
      <Box onClick={() => redirect("/work")} transform="rotate(270deg)">
        <Link
        as={motion.div}
        whileHover={{ scale: 1.3, transition: {duration: .6} }}
        whileTap={{ scale: 0.9 }}
        transition='.2s linear'
        _hover= {{color: "gray.900" }}
        fontSize={{base: "0", md:"xs"}}
        >WORK</Link>
      </Box>
      <Box onClick={() => redirect("/about")} transform="rotate(270deg)">
        <Link
        as={motion.div}
        whileHover={{ scale: 1.3, transition: {duration: .6} }}
        whileTap={{ scale: 0.9 }}
        transition='.2s linear'
        _hover= {{color: "gray.900" }}
        fontSize={{base: "0", md:"xs"}}
        >ABOUT</Link>
      </Box>
      <Box onClick={() => redirect("/contact")} transform="rotate(270deg)">
        <Link
        as={motion.div}
        whileHover={{ scale: 1.3, transition: {duration: .6} }}
        whileTap={{ scale: 0.9 }}
        transition='.2s linear'
        _hover= {{color: "gray.900" }}
        fontSize={{base: "0", md:"xs"}}
        >CONTACT</Link>
      </Box>
    </Flex>
    );
}

export default GlobalSidebar