import React from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  SimpleGrid,
  Center,
} from "@chakra-ui/react";
import { Header, Layout } from "~/components";
import { BsArrowRight } from "react-icons/bs";
import peopleAboutPage from "../../public/assets/peopleAboutPage.png"
import func1 from "../../public/assets/func1.png"
import func2 from "../../public/assets/func2.png"
import func3 from "../../public/assets/func3.png"
import func4 from "../../public/assets/func4.png"
import func5 from "../../public/assets/func5.png"
import { Footer } from "~/components/footer";
import { Doubt } from "~/components/doubt";

export default function About() {
  return (
    <Box w="full">
      <Box
        id="about"
        h={{ base: "700px", md: "650px", lg: "800px", xl: "900px" }}
        borderEndStartRadius={{ base: "100px", sm: "200px", lg: "40%" }}
      // pb={{ base: "70px", md: "" }}
      >
        <Header />
        <Layout>
          <Box
            w={{ base: "80%", lg: "70%", xl: "50%" }}
          >
            <Box w={"full"}>
              <Text color={"#fff"}>Lorem ipsum</Text>
              <Text fontSize={{ base: "30px", md: "45px", lg: "65px" }}>
                <Text color={"#fff"}>
                  Somos uma Startup{" "}
                  <span style={{ color: "#F61067" }}>
                    de Inteligência Artificial
                  </span>
                </Text>
              </Text>
            </Box>
            <Box color={"#fff"} border="1px solid #ffffff29" p="20px" mt="50px">
              <Flex w=" full" justify={"space-between"} align="center">
                <Text>
                  Velit laoreet id donec ultrices. Ut lectus arcu bibendum
                  varius.
                </Text>
                <Box border="1px solid #ffffff29" borderRadius={50} p="10px">
                  <BsArrowRight color="#fff" size={20} />
                </Box>
              </Flex>
            </Box>
          </Box>
        </Layout>
      </Box>
      <Layout>
        <Box
          pt="3rem"
          w={{ base: "100%", xl: "85%" }}
          mx={{ base: "0", md: "20px" }}
        >
          <Text color="#F61067" fontWeight='800' letterSpacing='0.375rem' fontSize='0.75rem'>
            QUEM SOMOS
          </Text>
          <Text color="#30233D" fontSize={{ base: "2rem", md: "2.813rem" }} >
            Somos uma Startup de<br /> Inteligência artificial
          </Text>

          <Text my="20px" color="#30233D" fontSize={{ base: "1.1rem", md: "1.688rem" }} >
            Criada no ano 2018, na cidade de Balneário Camboriú, com o propósito de solucionar problemas relacionados a rotinas de escritórios de contabilidade e de advocacia, tendo como principal objetivo fazer com que nossos clientes consigam dinamismo e velocidade em seus processos internos, fazendo assim, com que eles tenham mais tempo para conseguirem novos clientes e desta forma crescerem mais.
          </Text>
        </Box>
      </Layout>
      <Box bg='#FFFFFF' h={{ base: "160px", md: '244px' }} py='70px' >
        <Flex>
          <Layout>
            <Box
              w={{ base: "100%", xl: "85%" }}
              mx={{ base: "0", md: "20px" }}>
              <Text color="#F61067" fontWeight='800' letterSpacing='0.375rem' fontSize='0.75rem'>
                Lorem ispum
              </Text>
              <Text color="#30233D" fontSize={{ base: "2rem", md: "2.813rem" }} >
                Lorem ispum
              </Text>
            </Box>
          </Layout>
          <Image
            display={{ base: "none", md: "block" }}
            right='0'
            position='absolute'
            height='1146px'
            width='411px'
            src={peopleAboutPage.src}
          />
        </Flex>
      </Box>
      <Box bg='#5E239D' h='324px'>
        <Layout>
          <Flex w={{ base: "100%", xl: "100%" }}
            mx={{ base: "0", md: "20px" }}
            h='324px'
          >
            <Center gap={{ base: 20, md: 128 }}>
              <Text color="#FCFCFC" fontWeight='500' fontSize={{ base: '1.4rem', md: '1.688rem' }}>
                Lorem ipsum lorem<br /> ipsum
              </Text>

              <Text color="#FCFCFC" fontWeight='400' fontSize={{ base: '1rem', md: '1.125rem' }}>
                Id consectetur purus ut faucibus pulvinar <br />elementum integer enim. A arcu cursus<br /> vitae congue mauris rhoncus aenean.
              </Text>
            </Center>
          </Flex>
        </Layout>
      </Box>
      <Box bg='#30124E' h='324px'>
        <Layout>
          <Flex w={{ base: "100%", xl: "100%" }}
            mx={{ base: "0", md: "20px" }}
            h='324px'
          >
            <Center gap={{ base: 20, md: 128 }}>
              <Text color="#FCFCFC" fontWeight='500' fontSize={{ base: '1.4rem', md: '1.688rem' }}>
                Lorem ipsum lorem<br /> ipsum
              </Text>

              <Text color="#FCFCFC" fontWeight='400' fontSize={{ base: '1rem', md: '1.125rem' }}>
                Id consectetur purus ut faucibus pulvinar <br />elementum integer enim. A arcu cursus<br /> vitae congue mauris rhoncus aenean.
              </Text>
            </Center>
          </Flex>
        </Layout>
      </Box>
      <Box bg='#150433' h='324px'>
        <Layout>
          <Flex w={{ base: "100%", xl: "100%" }}
            mx={{ base: "0", md: "20px" }}
            h='324px'
          >
            <Center gap={{ base: 20, md: 128 }}>
              <Text color="#FCFCFC" fontWeight='500' fontSize={{ base: '1.4rem', md: '1.688rem' }}>
                Lorem ipsum lorem<br /> ipsum
              </Text>

              <Text color="#FCFCFC" fontWeight='400' fontSize={{ base: '1rem', md: '1.125rem' }}>
                Id consectetur purus ut faucibus pulvinar <br />elementum integer enim. A arcu cursus<br /> vitae congue mauris rhoncus aenean.
              </Text>
            </Center>
          </Flex>
        </Layout>
      </Box>
      <Box py={{ base: "20px", md: "100px" }}>
        <Text color="#F61067" textAlign='center' fontWeight='800' letterSpacing='0.375rem' fontSize='0.75rem'>
          CONHEÇA NOSSO TIME DE COLABORADORES
        </Text>
        <Text color="#30233D" textAlign='center' fontSize={{base:"1.4rem",md:"2.813rem"}} py='12px'>
          O que fazemos mais do que você pode <br />
          imagine, acredite em nós.
        </Text>
        <Layout>
          <SimpleGrid columns={5}>
            <Box
              w='full'
              height='700px'
              bg="gray.300"
            >
            </Box>
            <Box
              w='full'
              height='700px'
              bg="gray.300"
            >
            </Box>
            <Box
              w='full'
              height='700px'
              bg="gray.300"
            >
            </Box>
            <Box
              w='full'
              height='700px'
              bg="gray.300"
            >
            </Box>
            <Box
              w='full'
              height='700px'
              bg="gray.300"
            >
            </Box>
          </SimpleGrid>
        </Layout>
      </Box>
      <Doubt />
      <Footer />
    </Box>
  );
}
