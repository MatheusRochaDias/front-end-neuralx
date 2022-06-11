import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Header, Layout } from "~/components";

export default function Home() {
  return (
    <Box>
      <Box bg="#150433" bgGradient="linear(to-r, #150433, #0000005E)">
        <Header />
        <Layout>Home</Layout>
      </Box>
    </Box>
  );
}
