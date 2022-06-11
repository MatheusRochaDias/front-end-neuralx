import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Header, Layout } from "~/components";
import Bg from "../../public/assets/bg.png";

export default function Home() {
  return (
    <Box>
      <Box
        bg="#150433"
        bgGradient="linear(to-r, #150433, #0000005E)"
        // backgroundImage={Bg.src}
        backgroundSize="cover"
        h="900px"
        borderEndStartRadius={"40%"}
      >
        <Header />
        <Layout>
          <Flex>
            <Box w="50%">
              <Text fontSize={"65px"}>
                Ganhe agilidade em seus processos internos
              </Text>
            </Box>
          </Flex>
        </Layout>
      </Box>
    </Box>
  );
}
