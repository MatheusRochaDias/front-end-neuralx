import { Box, Image, Center, Flex, GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import router from "next/router";
import { BsEnvelope, BsFacebook, BsInstagram, BsPhone, BsYoutube } from "react-icons/bs";
import Logo from "/public/assets/Neural.png";

export function Footer() {
  return (
    <Box h="full" >
      <Box
        mt={{ base: "-6rem", md: '-4rem' }}
        bg='#150433'
        h={{ base: "min-content", md: '33.813rem' }}>
        <Center
          maxW={{ base: "max", md: "1400px" }}
          mx="auto"
          w={{ base: "100%", xl: "80%" }}
          paddingTop='8.063rem'>
          <SimpleGrid columns={20} w='full' spacing={2}>
            <GridItem colSpan={{ base: 20, md: 5 }}>
              <Box pl={{ base: "0", md: "4rem" }} pb={{base:"1rem", md:"0"}} >
                <Box w="70%" mx={{base:"auto", md:"0"}}>
                  <Image
                    src={Logo.src}
                    w={{ base: "100%", lg: "80px", xl: "198px" }}
                    h={{ base: "100%", lg: "90px", xl: "148px" }}
                    alt="Logo do neuralX"
                  />
                </Box>
                <Text paddingTop='1.813rem' display={{ base: "none", md: "block" }} color='#FCFCFC' fontSize='1rem' lineHeight='1.654rem' fontWeight='400' >
                  Eu augue ut lectus <br />arcu bibendum at.
                </Text>
              </Box>
            </GridItem>
            <GridItem colSpan={{ base: 0, md: 3 }} display={{ base: "none", md: "block" }} >
              <Box borderBottom='1px' w='-moz-fit-content' pb='0.5rem' borderColor='red'>
                <Text color='#FCFCFC' fontSize='1rem' fontWeight='800' letterSpacing='0.375rem' lineHeight='1.638rem'>MENU</Text>
              </Box>
              <Box pt='1.5rem'>
                <Text color='#FCFCFC' py='0.5rem' fontSize='1rem' fontWeight='700' letterSpacing='0.063rem' lineHeight='1.75rem' cursor="pointer" onClick={() => router.push("../../")}> Home </Text>
                <Text color='#FCFCFC' py='0.5rem' fontSize='1rem' fontWeight='700' letterSpacing='0.063rem' lineHeight='1.75rem' cursor="pointer" onClick={() => router.push("../../about")}> Quem somos </Text>
                <Text color='#FCFCFC' py='0.5rem' fontSize='1rem' fontWeight='700' letterSpacing='0.063rem' lineHeight='1.75rem' cursor="pointer" onClick={() => router.push("../../services")}> Serviços </Text>
                <Text color='#FCFCFC' py='0.5rem' fontSize='1rem' fontWeight='700' letterSpacing='0.063rem' lineHeight='1.75rem' cursor="pointer" onClick={() => router.push("../../contact")}> Contato </Text>
              </Box>
            </GridItem>
            <GridItem colSpan={{ base: 0, md: 3 }} display={{ base: "none", md: "block" }}>
              <Box borderBottom='1px' w='-moz-fit-content' fontWeight='800' pb='0.5rem' borderColor='red'>
                <Text color='#FCFCFC' fontSize='1rem' letterSpacing='0.375rem' lineHeight='1.638rem'>SERVIÇOS</Text>
              </Box>
              <Box pt='1.5rem'>
                <Text color='#FCFCFC' py='0.5rem' fontSize='1rem' fontWeight='700' letterSpacing='0.063rem' lineHeight='1.75rem' cursor="pointer" onClick={() => router.push("../../services/marketplace")}> Produtos </Text>
                <Text color='#FCFCFC' py='0.5rem' fontSize='1rem' fontWeight='700' letterSpacing='0.063rem' lineHeight='1.75rem' cursor="pointer" onClick={() => router.push("../../technology/computerVision")}> Tecnologia </Text>
              </Box>
            </GridItem>
            <GridItem colSpan={{ base: 20, md: 5 }}>
              <Box w={{ base: "100%", md: "-moz-fit-content" }} >
                <Box borderBottom='1px' w='-moz-fit-content' fontWeight='800' pb='0.5rem' borderColor='red' mx={{ base: "auto", md: "0" }}>
                  <Text color='#FCFCFC' fontSize='1rem' letterSpacing='0.375rem' lineHeight='1.638rem'>CONTATO</Text>
                </Box>
              </Box>
              <Box w={"-moz-fit-content"} mx={{ base: "auto", md: "0" }}>
                <Box pt='1.5rem' >
                  <Flex ><Center><BsEnvelope color="#FCFCFC" size={15} /></Center><Text color='#FCFCFC' py='0.5rem' pl='0.5rem' fontSize='1rem' fontWeight='700' letterSpacing='0.063rem' lineHeight='1.75rem'> lem.luizmacedo@gmail.com </Text></Flex>
                  <Flex ><Center><BsPhone color="#FCFCFC" size={15} /></Center><Text color='#FCFCFC' py='0.5rem' pl='0.5rem' fontSize='1rem' fontWeight='700' letterSpacing='0.063rem' lineHeight='1.75rem'> +55 (47) 997552206 </Text></Flex>
                </Box>
              </Box>
            </GridItem>
            <GridItem colSpan={{ base: 20, md: 4 }}>
              <Box w={{ base: "100%", md: "-moz-fit-content" }} >
                <Box borderBottom='1px' fontWeight='800' pb='0.5rem' w="max-content" borderColor='red' mx={{ base: "auto", md: "0" }}>
                  <Text color='#FCFCFC' fontSize='1rem' letterSpacing='0.375rem' lineHeight='1.638rem'>SIGA-NOS</Text>
                </Box>
              </Box>
              <Box pt='1.5rem'>
                <Flex ><Center w={{ base: "100%", md: "-moz-fit-content" }} >
                  <SimpleGrid columns={3} spacing={10} >
                    <Box cursor='pointer'><BsFacebook color="#FCFCFC" size={30} /></Box>
                    <Box cursor='pointer'><BsInstagram color="#FCFCFC" size={30} /></Box>
                    <Box cursor='pointer'><BsYoutube color="#FCFCFC" size={30} /></Box>
                  </SimpleGrid>
                </Center></Flex>
              </Box>
            </GridItem>
          </SimpleGrid>
        </Center>
        <Text pt='4rem' pb={{ base: "1rem", md: '5rem' }} color='#FCFCFC' fontSize='0.75rem' fontWeight='400' textAlign='center'>
          Copyright © 2021, Neural X. All trademarks and copyrights belong to their respective owners.
        </Text>
      </Box>
    </Box >
  )
}