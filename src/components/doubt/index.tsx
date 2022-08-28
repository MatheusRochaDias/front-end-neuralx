import { Box, Button, Center, Flex, Text } from "@chakra-ui/react";
import router from "next/router";

export function Doubt() {
  return (
    <Flex
      mx="auto"
      w={{ base: "100%", xl: "80%" }}
      maxW="1400px"
      color="#fff"
      p={{ base: "50px 10px", md: "50px 20px", lg: "0" }}
      align="center"
    >
      <Box
        paddingTop='2.375rem'
        bg="#30124E"
        mt={{ base: "0", lg: "2.375rem" }}
        w={{ base: "full", xl: "100%" }}
        ml={{ base: "0", xl: "auto" }}
      >
        <Text
          textAlign={{ base: "center", lg: "center" }}
          fontWeight="700"
          color="#FFFFFF"
          lineHeight='3.375rem'
          fontSize='2.25rem'
        >
          Ainda com dúvidas?
        </Text>
        <Text
          p='1.5rem'
          textAlign={{ base: "center", lg: "center" }}
          fontWeight="400"
          color="#FFFFFF"
          lineHeight='1.75rem'
          fontSize='1.125rem'
        // my={{ base: "0", lg: !isText ? "7px" : "17px" }}
        >
          Entre em contato para tirar suas dúvidas
        </Text>
        <Center pb='2.375rem'  >
          <Button
            onClick={() => router.push("../../contact")}
            py='1.5rem'
            textAlign='center'
            lineHeight='1.375rem'
            bg='#3347CA'
            fontWeight="600"
            fontSize='0.875rem'
            borderRadius='31.25rem'
            _hover={{ bg: "#F61067" }}

          ><Text py='0.688rem' px='1rem'>
              ENTRAR EM CONTATO</Text>
          </Button>
        </Center>
      </Box>
    </Flex>
  )
}