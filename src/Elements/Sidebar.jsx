import React from 'react'
import { Flex, Link, Text, Box } from "@chakra-ui/react";
import {motion} from "framer-motion";

function Sidebar() {

  return (
            <Flex direction="column" gap="15vh" justifyContent="center" alignItems="center" textColor={"white"} bg="transparent" minW={{base:"0%", md:"fit-content"}} minH={{base:"0%", md:"fit-content"}}>
               <Box transform="rotate(270deg)">
                  <Link
                  onClick={() => window.open('https://linkedin.com/in/misagh-azimi', '_blank')}
                  as={motion.div}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                  transition='.2s linear'
                  _hover= {{color: "gray.900" }}
                  fontSize={{base: "0%", md:"sm"}}
                  >LinkedIn</Link>
                </Box>
                <Box transform="rotate(270deg)">
                  <Link
                  onClick={() => window.open("https://github.com/mazcoding", '_blank')}
                  as={motion.div}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                  transition='.2s linear'
                  _hover= {{color: "gray.900" }}
                  fontSize={{base: "0%", md:"sm"}}
                  >GitHub</Link>
                </Box>
                <Text fontSize={{base: "0%", md:"sm"}} transform="rotate(270deg)">____________</Text>
                <Text fontSize={{base: "0%", md:"sm"}} transform="rotate(270deg)"></Text>
                <Text fontSize={{base: "0%", md:"xs"}} transform="rotate(270deg)">©MA/2023</Text>
            </Flex>
  );
}

export default Sidebar