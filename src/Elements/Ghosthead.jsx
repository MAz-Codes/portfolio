import React from 'react'
import { Flex, Link, Text, Box } from "@chakra-ui/react";
import {motion} from "framer-motion"
import {FaLinkedin, FaGithub} from "react-icons/fa"

function Ghosthead() {
  return (
            <Flex p={"3vw"} gap={"5vw"} direction="row"  textColor={"white"} bg="transparent" minW="fit-content" >
                <Box m="5vw" >
                <Link fontSize={{base: "0%", md:"sm"}}></Link>
                </Box>
            </Flex>
  );
}

export default Ghosthead