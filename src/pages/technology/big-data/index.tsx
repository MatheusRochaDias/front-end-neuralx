import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  SimpleGrid,
  Center,
} from "@chakra-ui/react";
import { Layout } from "~/components";
import atom from "../../../../public/assets/atom.png"
import { Footer } from "~/components/footer";
import { Doubt } from "~/components/doubt";
import HeaderContainer from "~/components/headerContainer";
import { data } from "~/components/mocks/carouselCoversationalInterface";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import bigDataCard from "../../../../public/assets/bigDataCard.png"


export default function ConversationalInterface() {
  const [current, setCurrent] = useState(0);

  return (
    <Box w="full">
      <HeaderContainer id="bigData" firstText="Ganhe agilidade em " secondText="seus processos internos" />


      <Layout>
        <Box
          py={{ base: "1rem", md: "3rem" }}
          mx={{ base: "0", md: "20px" }}
          my={{ base: "50px", xl: "0" }}
        >
          <Text color="#F61067" fontWeight='800' letterSpacing='0.375rem' fontSize='0.75rem'>
            TECNOLOGIA
          </Text>
          <Text color="#30233D" fontSize={{ base: "1.813rem", xl: "2.813rem" }}>
            Big Data
          </Text>
          <Text my="20px" color="#30233D" fontSize="1.125rem" >
            É a área do conhecimento que estuda como tratar, analisar e obter informações a partir de conjuntos de dados grandes demais para serem analisados por sistemas tradicionais.
          </Text>
        </Box>
      </Layout>
      <Flex bg="#30124E" my="auto" py="40px" display={{ base: "flex", md: "none" }}>
        <Text
          my="auto"
          style={{ writingMode: "vertical-lr" }}
          // textAlign="right"
          fontSize={"12.6px"}
          letterSpacing={"6px"}
          fontWeight="800"
          color="#F61067"
          lineHeight={"26px"}
          textTransform="uppercase"
          fontStyle={"normal"}
        >
          Interface Conversacionais
        </Text>
        <Box px="15px">
          <Text
            fontSize='1rem'
            textAlign="right"
            fontWeight="800"
            color="#FCFCFC"
            pb='1.325rem'
          >
            É a área do conhecimento que estuda como tratar, analisar e obter informações a partir de conjuntos de dados grandes demais para serem analisados por sistemas tradicionais.</Text>
          <Text
            fontSize='1rem'
            textAlign="right"
            fontWeight="400"
            color="#FCFCFC"
          >
          Quanto mais dados são gerados, maior é o esforço para extrair informações.
        E os centros de dados tiveram que aprender a lidar com o crescimento  <br />
        exponencial de dados gerados e desenvolver ferramentas que fossem para além 
        de bancos de dados relacionais e sistemas paralelos de bancos de dados. <br />
        Sendo assim, a velocidade para obter a informação faz parte do sucesso  
        que o big data pode proporcionar em sua empresa.
          </Text>
        </Box>
      </Flex>


      <Box display={{ base: "none", md: "flex" }}>
        <Layout>
          <Flex>
            <Text
              my="auto"
              style={{ writingMode: "vertical-lr" }}
              // textAlign="right"
              fontSize={"12.6px"}
              letterSpacing={"6px"}
              fontWeight="800"
              color="#F61067"
              lineHeight={"26px"}
              textTransform="uppercase"
              fontStyle={"normal"}
            >
              Big Data
            </Text>
            <Image
              my="auto"
              src={bigDataCard.src}
              width={{ base: "300px", lg: "410px", xl: "40%" }}
              alt="IA"
              maxH="500px"
              minH={"500px"}
              zIndex={1}
            />
            <Box bg="#30124E" ml="-300px" >
              <Box >
                <Center
                  ml="300"
                  w="100%"
                  bg="#30124E"
                  h="100%"
                  my="auto"
                  minH={"600px"}
                ><Box>
                    <Text
                      fontSize="2.813rem"
                      textAlign="right"
                      fontWeight="500"
                      color="#FCFCFC"
                      pb='1rem'
                    >
                      Big Data
                    </Text>
                    <Text
                      fontSize='1.125rem'
                      textAlign="right"
                      fontWeight="800"
                      color="#FCFCFC"
                      pb='1.325rem'
                    >
                      É a área do conhecimento que estuda como tratar, analisar <br /> e obter informações a partir de conjuntos de dados<br /> grandes demais para serem analisados por sistemas<br /> tradicionais.
                    </Text>
                    <Text
                      textAlign="right"
                      fontWeight="400"
                      color="#FCFCFC"
                    >
                      Quanto mais dados são gerados, maior é o esforço para extrair informações. <br />
                      E os centros de dados tiveram que aprender a lidar com o crescimento  <br />
                      exponencial de dados gerados e desenvolver ferramentas que fossem para além <br />
                      de bancos de dados relacionais e sistemas paralelos de bancos de dados. <br />
                      Sendo assim, a velocidade para obter a informação faz parte do sucesso  <br />
                      que o big data pode proporcionar em sua empresa.
                    </Text>
                  </Box>
                </Center>
              </Box>
            </Box>
          </Flex>
        </Layout>
      </Box>
      <Layout>
        <Box
          pt="5rem"
          w={{ base: "100%", xl: "100%" }}
          mx={{ base: "0", md: "0px" }}
        >
          {/* <Text color="#F61067" fontWeight='800' letterSpacing='0.375rem' fontSize='0.75rem'>
            LOREM IPSUM
          </Text> */}
          <Text color="#30233D" fontSize={{ base: "1.813rem", xl: "2.813rem" }} py={{ base: "10px", md: '60px' }}>
            Benefícios
          </Text>
        </Box>
        <SimpleGrid display={{ base: 'none', md: 'grid' }} columns={3} py={{ base: "40px", md: '60px' }} gap={{ base: 5, md: 50 }}>
          <Box>
            <Image
              height={{ base: "40px", md: '70px' }}
              src={atom.src}
            />
            <Text py='15px' color="#30233D" fontWeight='500' lineHeight='2.5rem' fontSize={{ base: "1.1rem", md: "1.688rem" }}>
              Disponibilidade de 24horas<br />
              por dia, em todos dias do <br />
              ano
            </Text>
          </Box>
        </SimpleGrid>
      </Layout>
      <Box width='' bg='#150433' mb='30px' py='2rem' h='13rem' display={{ base: 'block', md: 'none' }}>
        <Layout>
          <Center justifyContent='space-between'>
            <Box onClick={() => {
              if (current === 0) {
                setCurrent(5);
              }
              setCurrent((item) => item - 1);
            }} cursor='pointer' >
              <FiArrowLeft color="#fff" size={20} />
            </Box>
            <Box w='350px'>
              <Image
                height={{ base: "40px", md: '70px' }}
                src={atom.src}
                mx='auto'
              />
              <Text py='5px' color="#ffffff" textAlign='center' fontWeight='500' lineHeight='2.5rem' fontSize="1.1rem" >
                {data[current].title}
              </Text>
            </Box>
            <FiArrowRight color="#fff" size={20} onClick={() => {
              if (current >= data.length - 1) {
                setCurrent(-1);
              }
              setCurrent((item) => item + 1);
            }} cursor='pointer' />
          </Center>
        </Layout>
      </Box>

      <Doubt />
      <Footer />
    </Box>
  );
}