import React from 'react'
import { Flex, Link, Text } from "@chakra-ui/react";

function Sidebar() {
  return (
            <Flex direction="column" gap="15vh" justifyContent="center" alignItems="center" textColor={"white"} bg="transparent" minW={{base:"0%", md:"fit-content"}} minH={{base:"0%", md:"fit-content"}}>
                <Link href="https://linkedin.com/in/misagh-azimi"
                isExternal
                _hover= {{color: "gray.400" }}
                fontSize={{base: "0%", md:"sm"}}
                transform="rotate(270deg)"
                >LinkedIn</Link>
                <Link
                href="https://github.com/mazcoding"
                isExternal
                _hover= {{color: "gray.400" }}
                fontSize={{base: "0%", md:"sm"}}
                transform="rotate(270deg)"
                >GitHub</Link>
                <Text fontSize={{base: "0%", md:"sm"}} transform="rotate(270deg)">____________</Text>
                <Text fontSize={{base: "0%", md:"sm"}} transform="rotate(270deg)"></Text>
                <Text fontSize={{base: "0%", md:"xs"}} transform="rotate(270deg)">©MA/2023</Text>
            </Flex>
  );
}

export default Sidebar