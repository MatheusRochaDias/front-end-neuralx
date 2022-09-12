import React from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  SimpleGrid,
  Center,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";
import { Layout } from "~/components";
import Ia from "../../public/assets/IA.png";
import peopleAboutPage from "../../public/assets/peopleAboutPage.png"
import { Footer } from "~/components/footer";
import { Doubt } from "~/components/doubt";
import HeaderContainer from "~/components/headerContainer";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

export default function About() {
  const [isLarger, Deskt, xl, lg, xl1378, isText, smQuote] = useMediaQuery([
    "(min-width: 1320px)",
    "(max-width: 1350px)",
    "(max-width: 1400px)",
    "(max-width: 1036px)",
    "(max-width: 1378px)",
    "(min-width: 1220px)",
    "(max-width: 878px)",
  ]);
  return (
    <Box w="full">
      <HeaderContainer id="about" firstText="Somos uma Startup " secondText="de Inteligência Artificial" />
      <Layout>
        <Flex
          w="full"
          justify={"space-between"}
          mt="50px"
          mb={{ base: "0", xl: "-150px" }}
          flexDir={{ base: "column", lg: "row" }}
        >
          <Flex
            flexDir={"column"}
            w={{ base: "100%", xl: "60%" }}
            mx={{ base: "0", md: "20px" }}
          > <Text color="#F61067" fontWeight='800' letterSpacing='0.375rem' fontSize='0.75rem'>
              QUEM SOMOS
            </Text>
            {/* <Text color="#F61067">lorem ipsum</Text> */}
            <Text color="#30233D" fontSize={{ base: "1.813rem", xl: "2.813rem" }} cursor={"pointer"}>
              Somos uma Startup de Inteligência artificial
            </Text>
            <Text my="20px" color="#30233D" fontSize={"1.125rem"}>
              Criada no ano 2018, na cidade de Balneário Camboriú, com o propósito de solucionar problemas relacionados a rotinas de escritórios de contabilidade e de advocacia, tendo como principal objetivo fazer com que nossos clientes consigam dinamismo e velocidade em seus processos internos, fazendo assim, com que eles tenham mais tempo para conseguirem novos clientes e desta forma crescerem mais.
            </Text>
            <Button
              bg=" #3347CA"
              borderRadius={"20px"}
              w="197px"
              color="#fff"
              mt="80px"
              _hover={{ bg: "#F61067" }}
            >
              Saber mais
            </Button>
          </Flex>
          <Flex
            w="full"
            justify={{ base: "center", lg: "right" }}
            mt={{ base: "20px", lg: "0px" }}
          >
            <Box zIndex={1000} mt={{ base: "30px", md: "40px" }}>
              <Image
                src={Ia.src}
                width={{ base: "70%", lg: "full" }}
                h={{ base: "90%", lg: "80%" }}
                alt="IA"
              />
            </Box>
            <Flex
              justify={"center"}
              flexDir="column"
              align="center"
              bg="#5E239D"
              h={{ base: "200px", sm: "300px", lg: "60%" }}
              ml={{
                base: "-125px",
                sm: "-215px",
                lg: "-35px",
                xl: "-70px",
              }}
              w={{ base: "", sm: "300px", xl: "45%" }}
            >
              <ImQuotesLeft size={smQuote ? 18 : 50} color="#f4f4ed9f" />

              <Text
                color="#fff"
                px={{ base: "20px", md: "50px", xl: "100px" }}
                ml={{ base: "60px", sm: "80px", xl: "50px" }}
                fontSize={{ base: "15px", md: "20px", xl: "30px" }}
                my="10px"
              >
                Torne-se mais competitivo e eficiente
              </Text>
              <ImQuotesRight size={smQuote ? 18 : 50} color="#f4f4ed9f" />
            </Flex>
          </Flex>
        </Flex>
      </Layout>
      <Flex bg="#5E239D" mt="60px" py="40px" display={{ base: "flex", md: "none" }}>
        <Box px="15px">
          <Text
            fontSize='1rem'
            textAlign="right"
            fontWeight="800"
            color="#FCFCFC"
            pb='1.325rem'
          >
            Missão</Text>
          <Text
            fontSize='1rem'
            textAlign="right"
            fontWeight="400"
            color="#FCFCFC"
          >
            A Neural busca melhorar a rotina das empresas otimizando os seus processos internos dando
            mais agilidade, segurança e performance, desta forma possam focar nas qualidades dos seus serviços aumentando suas receitas.
          </Text>
        </Box>
      </Flex>
      <Flex bg="#30124E" py="40px" display={{ base: "flex", md: "none" }}>
        <Box px="15px">
          <Text
            fontSize='1rem'
            textAlign="left"
            fontWeight="800"
            color="#FCFCFC"
            pb='1.325rem'
          >
            Visão</Text>
          <Text
            fontSize='1rem'
            textAlign="left"
            fontWeight="400"
            color="#FCFCFC"
          >
            Ser referência em inteligência artificial oferecendo ferramentas para nossos clientes melhorarem seus processos e buscarem a excelência.
          </Text>
        </Box>
      </Flex>
      <Flex bg="#150433" py="40px" display={{ base: "flex", md: "none" }}>
        <Box px="15px">
          <Text
            fontSize='1rem'
            textAlign="right"
            fontWeight="800"
            color="#FCFCFC"
            pb='1.325rem'
          >
            Valores</Text>
          <Text
            fontSize='1rem'
            textAlign="right"
            fontWeight="400"
            color="#FCFCFC"
          >
            Trabalhamos com simplicidade, transparência, inovação e democratização da tecnologia.
          </Text>
        </Box>
      </Flex>
      <Box bg='#FFFFFF' h={{ base: "160px", md: '244px' }} display={{ base: "none", md: "block" }} py='70px' >
        <Flex>
          <Layout>
            {/* <Box
              w={{ base: "100%", xl: "85%" }}
              mx={{ base: "0", md: "20px" }}>
              <Text color="#F61067" fontWeight='800' letterSpacing='0.375rem' fontSize='0.75rem'>
                Lorem ispum
              </Text>
              <Text color="#30233D" fontSize={{ base: "2rem", md: "2.813rem" }} >
                Lorem ispum
              </Text>
            </Box> */}
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
      <Box bg='#5E239D' h='324px' display={{ base: "none", md: "block" }}>
        <Layout>
          <Flex w={{ base: "100%", xl: "100%" }}
            mx={{ base: "0", md: "20px" }}
            h='324px'
          >
            <Center gap={{ base: 20, md: 128 }}>
              <Text color="#FCFCFC" fontWeight='500' w={'9.5rem'} fontSize="2.813rem">
                Missão
              </Text>

              <Text color="#FCFCFC" fontWeight='400' fontSize="1.125rem">
                A Neural busca melhorar a rotina das empresas<br /> otimizando os seus processos internos dando<br />
                mais agilidade, segurança e performance, desta<br /> forma possam focar nas qualidades dos seus <br />serviços aumentando suas receitas.
              </Text>
            </Center>
          </Flex>
        </Layout>
      </Box>
      <Box bg='#30124E' h='324px' display={{ base: "none", md: "block" }}>
        <Layout>
          <Flex w={{ base: "100%", xl: "100%" }}
            mx={{ base: "0", md: "20px" }}
            h='324px'
          >
            <Center gap={{ base: 20, md: 128 }}>
              <Text color="#FCFCFC" fontWeight='500' w={'9.5rem'} fontSize="2.813rem">
                Visão
              </Text>
              <Text color="#FCFCFC" fontWeight='400' fontSize="1.125rem">
                Ser referência em inteligência artificial<br /> oferecendo ferramentas para nossos clientes <br />melhorarem seus processos e buscarem a excelência.
              </Text>
            </Center>
          </Flex>
        </Layout>
      </Box>
      <Box bg='#150433' h='324px' display={{ base: "none", md: "block" }}>
        <Layout>
          <Flex w={{ base: "100%", xl: "100%" }}
            mx={{ base: "0", md: "20px" }}
            h='324px'
          >
            <Center gap={{ base: 20, md: 128 }}>
              <Text color="#FCFCFC" fontWeight='500' w={'9.5rem'} fontSize="2.813rem">
                Valores
              </Text>

              <Text color="#FCFCFC" fontWeight='400' fontSize="1.125rem">
                Trabalhamos com simplicidade, transparência, <br /> inovação e democratização da tecnologia.
              </Text>
            </Center>
          </Flex>
        </Layout>

      </Box>
      <Box py={{ base: "20px", md: "100px" }} display={{ base: "none", md: "block" }}>
        <Text color="#F61067" textAlign='center' fontWeight='800' letterSpacing='0.375rem' fontSize='0.75rem'>
          CONHEÇA NOSSO TIME DE COLABORADORES
        </Text>
        <Text color="#30233D" textAlign='center' fontSize="2.813rem" py='12px'>
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