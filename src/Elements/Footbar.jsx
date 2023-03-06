import React from 'react'
import { Flex, Link, Text } from "@chakra-ui/react";

function Footbar() {
  return (
            <Flex p={"3vw"} gap={"5vw"} direction="row"  textColor={"white"} bg="transparent" minW="fit-content" >
                <Link href="https://linkedin.com/in/misagh-azimi"
                isExternal
                _hover= {{color: "gray.400" }}
                fontSize="sm"
                >LinkedIn</Link>
                <Link
                href="https://github.com/mazcoding"
                isExternal
                _hover= {{color: "gray.400" }}
                fontSize="sm"
                >GitHub</Link>
                <Text fontSize="sm">____________</Text>
                <Text fontSize="sm">©MA/2023</Text>
            </Flex>
  );
}

export default Footbar