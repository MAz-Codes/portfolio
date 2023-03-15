import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import { Flex, Link, Box, Switch, HStack } from "@chakra-ui/react";
import {motion} from "framer-motion"
import {FaMoon, FaSun} from "react-icons/fa"
import { ThemeContext } from './AnimatedRoutes';

function GlobalHeader() {
    const {isClicked, handleClick} = useContext(ThemeContext)
    const redirect = useNavigate();
    const bgGradientValue = isClicked //musste es so machen und nicht mit Context, da der Sticky Header sonst transparent wäre
    ? "linear(to-r, #000000, #2C3E50)"
    : "linear(to-r, #5D4157, #A8CABA)";

  return (
    <Box
    bgGradient={bgGradientValue}
    display="flex"
    justifyContent="center">
        <Flex
        as={motion.div}
        whileHover={{ opacity:1, transition: {duration: .4} }}
        py={"3vw"}
        gap={"5vw"}
        direction="row"
        textColor={isClicked ? 'gray.500' : "white"}
        bg="transparent"
        minW="fit-content" >
            <HStack spacing="1vw">
                <FaSun size="5"/>
                <Switch
                colorScheme="blue"
                size="sm"
                isChecked={isClicked}
                onChange={handleClick}/>
                <FaMoon size="5"/>
            </HStack>
            <Box onClick={() => redirect("/")}>
                <Link
                as={motion.div}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                transition='.2s linear'
                _hover= {{color: "gray.900" }}
                fontSize={{base: "xs", md:"0%"}}
                >HOME</Link>
            </Box>
            <Box onClick={() => redirect("/work")}>
                <Link
                as={motion.div}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                transition='.2s linear'
                _hover= {{color: "gray.900" }}
                fontSize={{base: "xs", md:"0%"}}
                >WORK</Link>
            </Box>
            <Box onClick={() => redirect("/about")}>
                <Link
                as={motion.div}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                transition='.2s linear'
                _hover= {{color: "gray.900" }}
                fontSize={{base: "xs", md:"0%"}}
                >ABOUT</Link>
            </Box>
            <Box onClick={() => redirect("/contact")}>
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
    </Box>
  );
}

export default GlobalHeader