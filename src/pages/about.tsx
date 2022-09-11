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
import HeaderContainer from "~/components/headerContainer";

export default function About() {
  return (
    <Box w="full">
      <HeaderContainer id="about" firstText="Somos uma Startup " secondText="de Inteligência Artificial" />
      <Layout>
        <Box
          pt="3rem"
          w={{ base: "100%", xl: "85%" }}
          mx={{ base: "0", md: "20px" }}
        >
          <Text color="#F61067" fontWeight='800' letterSpacing='0.375rem' fontSize='0.75rem'>
            QUEM SOMOS
          </Text>
          <Text color="#30233D" fontSize={{ base: "1.813rem", xl: "2.813rem" }} >
            Somos uma Startup de Inteligência artificial
          </Text>

          <Text my="20px" color="#30233D" fontSize="1.125rem" >
            Criada no ano 2018, na cidade de Balneário Camboriú, com o propósito de solucionar problemas relacionados a rotinas de escritórios de contabilidade e de advocacia, tendo como principal objetivo fazer com que nossos clientes consigam dinamismo e velocidade em seus processos internos, fazendo assim, com que eles tenham mais tempo para conseguirem novos clientes e desta forma crescerem mais.
          </Text>
        </Box>
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
      <Flex bg="#150433"  py="40px" display={{ base: "flex", md: "none" }}>
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