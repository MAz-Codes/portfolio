import React from 'react'
import { Flex, Link, Box } from "@chakra-ui/react";

function Ghostbar() {

// keine Funktion, nur wichtig fürs Layout
  return (
    <Flex
    opacity={0}
    direction="column"
    gap="10vh"
    justifyContent="center"
    alignItems="center"
    textColor={"white"}
    bg="transparent"
    minW={{base:"0%", md:"fit-content"}}
    minH={{base:"0%", md:"fit-content"}}>
      <Box>
        <Link fontSize={{base: "0%", md:"sm"}}></Link>
      </Box>
    </Flex>
  );
}

export default Ghostbar