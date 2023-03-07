import React from 'react'
import {Box, Text } from "@chakra-ui/react";


function Footbar() {
  return (
            <Box
            boxShadow={"dark-lg"}
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            display="flex"
            opacity={0.4}
            minH="5vh"
            textColor={"white"}>
               <Text fontSize={"xs"}>© Misagh Azimi /2023</Text>
            </Box>
  );
}

export default Footbar