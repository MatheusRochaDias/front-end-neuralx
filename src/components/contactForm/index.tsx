import { Box, Button, Center, Flex, GridItem, Input, InputGroup, InputLeftElement, SimpleGrid, Text } from "@chakra-ui/react";

export function ContactForm() {
  return (
    <Flex
      mx="auto"
      w={{ base: "100%", xl: "80%" }}
      maxW="1400px"
      color="#fff"
      p={{ base: "10px", md: "50px 20px", lg: "0" }}
      align="center"
    >
      <Box
        py={{ base: "30px", md: "150px" }}
        bg="#30124E"
        mt={{ base: "0", lg: "2.375rem" }}
        w={{ base: "full", xl: "100%" }}
        ml={{ base: "0", xl: "auto" }}
      >
        <SimpleGrid columns={[10, 20]}>
          <GridItem colSpan={[10, 9]} >
            <Center>
              <Box>
                <Text
                  fontWeight="700"
                  color="#F61067"
                  lineHeight='3.375rem'
                  fontSize='2.25rem'
                >
                  Entre em contato
                </Text>
                <Text color="#E4E7EC"
                  lineHeight='1.75rem'
                  fontSize='1.125rem'>
                  Preencha o formulário ao lado que um de<br />  nossos atendentes entrará em contato o<br />  mais breve possível.
                </Text>
              </Box>
            </Center>
          </GridItem>
          <GridItem colSpan={[10, 11]} >
            <Box as="form" w={{ base: "100%", md: "90%" }} >
              <SimpleGrid mt={{ base: "10", md: "-60px" }} pr={{ base: "10px", md: "55px" }} pl={{ base: "10px", md: "0" }} columns={2} gap={{ base: "4", md: "10" }}>
                <Box>
                  <Text color="#ADB5EA">Nome completo</Text>
                  <Input variant='flushed' placeholder='Nome' />
                </Box>
                <Box>
                  <Text color="#ADB5EA">Telefone</Text>
                  <Box>
                    <InputGroup>
                      <InputLeftElement children='+55' />
                      <Input variant='flushed' pl="50px" type='tel' placeholder='Telefone' />
                    </InputGroup>
                  </ Box>
                </Box>

                <Box py={{ base: "10px", md: "30px" }}>
                  <Text color="#ADB5EA">E-mail</Text>
                  <Input variant='flushed' placeholder='E-mail' />
                </Box>
                <Box py={{ base: "10px", md: "30px" }}>
                  <Text color="#ADB5EA">Assunto</Text>
                  <Input variant='flushed' placeholder='Assunto' />
                </Box>
                <GridItem colSpan={2}>
                  <Box >
                    <Text color="#ADB5EA">Como podemos ajudar?</Text>
                    <Input variant='flushed' placeholder='Escreva sua mensagem' />
                  </Box>
                </GridItem>
              </SimpleGrid>
              <Center pt={{ base: "30px", md: "60px" }}>
                <Button bg="#3347CA" borderRadius="500px" _hover={{ bg: "#F61067" }}  >
                  ENTRAR EM CONTATO
                </Button>
              </Center>
            </Box>
          </GridItem>
        </SimpleGrid>
      </Box >
    </Flex >
  )
}