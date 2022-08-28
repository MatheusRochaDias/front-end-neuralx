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
import imgVisaoComputacional from "../../../../public/assets/visãoComputacionalCard.png"
import atom from "../../../../public/assets/atom.png"
import { Footer } from "~/components/footer";
import { Doubt } from "~/components/doubt";
import HeaderContainer from "~/components/headerContainer";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { data } from "~/components/mocks/carouselComputerVision";

export default function ComputerVision() {
  const [current, setCurrent] = useState(0);

  return (
    <Box w="full">
      <HeaderContainer id="computerVision" firstText="Ganhe agilidade em " secondText="seus processos internos" />
      <Layout>
        <Box
          py={{ base: "1rem", md: "3rem" }}
          w={{ base: "100%", xl: "85%" }}
          mx={{ base: "0", md: "20px" }}
        >
          <Text color="#F61067" fontWeight='800' letterSpacing='0.375rem' fontSize='0.75rem'>
            TECNOLOGIA
          </Text>
          <Text color="#30233D" fontSize={{ base: "2rem", md: "2.813rem" }} >
            Visão Computacional
          </Text>
          <Text my="20px" color="#30233D" fontSize={{ base: "1rem", md: "1.688rem" }} >
            Tecnologia capaz de transformar imagens em dados precisos para que sua empresa<br />  otimize seu trabalho e reduza custos.</Text>
        </Box>
      </Layout>
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
              Visão computacional
            </Text>
            <Image
              my="auto"
              src={imgVisaoComputacional.src}
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
                      fontSize='2.813rem'
                      textAlign="right"
                      fontWeight="500"
                      color="#FCFCFC"
                      pb='1rem'
                    >
                      Visão Computacional
                    </Text>
                    <Text
                      fontSize='1rem'
                      textAlign="right"
                      fontWeight="800"
                      color="#FCFCFC"
                      pb='1.325rem'
                    >
                      A visão humana possibilita a interpretação de <br />inúmeros aspectos do mundo.
                    </Text>
                    <Text
                      fontSize='1rem'
                      textAlign="right"
                      fontWeight="400"
                      color="#FCFCFC"
                    >
                      Essas percepções são diversas, por exemplo, ao observar<br />
                      uma árvore na rua, é possível notar diferentes aspectos da <br />
                      planta, como cores, texturas e formatos.  <br /><br />
                      A visão computacional é um dos ramos da inteligência artificial <br />
                      que estuda o processamento de imagens do mundo real por <br />um computador.<br /><br />
                      Em outras palavras, essa área investiga maneiras de dar às máquinas a<br />
                      capacidade de interpretar visualmente informações, ou seja, enxergar.<br />
                    </Text>
                  </Box>
                </Center>
              </Box>
            </Box>
          </Flex>
        </Layout>
      </Box>
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
          Visão computacional
        </Text>
        <Box px="15px">
          <Text
            fontSize='1rem'
            textAlign="right"
            fontWeight="800"
            color="#FCFCFC"
            pb='1.325rem'
          >
            A visão humana possibilita a interpretação de
            inúmeros aspectos do mundo. </Text>
          <Text
            fontSize='1rem'
            textAlign="right"
            fontWeight="400"
            color="#FCFCFC"
          >
            Essas percepções são diversas, por exemplo, ao observar
            uma árvore na rua, é possível notar diferentes aspectos da
            planta, como cores, texturas e formatos.
            <br />
            A visão computacional é um dos ramos da inteligência artificial
            que estuda o processamento de imagens do mundo real por
            um computador.
            <br />
            Em outras palavras, essa área investiga maneiras de dar às máquinas a
            capacidade de interpretar visualmente informações, ou seja, enxergar.

          </Text>
        </Box>
      </Flex>

      <Layout>
        <Box
          pt="5rem"
          w={{ base: "100%", xl: "100%" }}
          mx={{ base: "0", md: "0px" }}
        >
          {/* <Text color="#F61067" fontWeight='800' letterSpacing='0.375rem' fontSize='0.75rem'>
            LOREM IPSUM
          </Text> */}
          <Text color="#30233D" fontSize={{ base: "2rem", md: "2.813rem" }} >
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
              Fluxo de Pessoas
            </Text>
            <Text color="#776C82" fontWeight='400' lineHeight={{ base: "1.2rem", md: '1.625rem' }} fontSize={{ base: "0.8rem", md: '1rem' }}>
              Identifique o número de pessoas, mapeie os <br />horários de maior movimento e o tempo médio <br />de permanência no espaço. Controle o fluxo <br />em ambientes de circulação restrita.
            </Text>
          </Box>

          <Box>
            <Image
              height={{ base: "40px", md: '70px' }}
              src={atom.src}
            />
            <Text py='15px' color="#30233D" fontWeight='500' lineHeight='2.5rem' fontSize={{ base: "1.1rem", md: "1.688rem" }}>
              Segurança
            </Text>
            <Text color="#776C82" fontWeight='400' lineHeight={{ base: "1.2rem", md: '1.625rem' }} fontSize={{ base: "0.8rem", md: '1rem' }}>
              Programe horários para monitoramento de <br />movimentos de ambientes determinados.
            </Text>
          </Box>

          <Box>
            <Image
              height={{ base: "40px", md: '70px' }}
              src={atom.src}
            />
            <Text py='15px' color="#30233D" fontWeight='500' lineHeight='2.5rem' fontSize={{ base: "1.1rem", md: "1.688rem" }}>
              Visão Industrial
            </Text>
            <Text color="#776C82" fontWeight='400' lineHeight={{ base: "1.2rem", md: '1.625rem' }} fontSize={{ base: "0.8rem", md: '1rem' }}>
              Identificação de gargalos e problemas nas <br /> linhas de produção colhendo dados, processando<br /> e comandando ações específicas que irão alimentar<br />a receita e reduzir o tempo de inatividade.
            </Text>
          </Box>

          <Box>
            <Image
              height={{ base: "40px", md: '70px' }}
              src={atom.src}
            />
            <Text py='15px' color="#30233D" fontWeight='500' lineHeight='2.5rem' fontSize={{ base: "1.1rem", md: "1.688rem" }}>
              Monitoramento em Tempo Real
            </Text>
            <Text color="#776C82" fontWeight='400' lineHeight={{ base: "1.2rem", md: '1.625rem' }} fontSize={{ base: "0.8rem", md: '1rem' }}>
              Tenha todas as informações através de dashboards<br /> intuitivos e dinâmicos com alertas, contagens de<br /> itens, falhas ou eventos fora do padrão através <br /> dados com qualidade.
            </Text>
          </Box>

          <Box>
            <Image
              height={{ base: "40px", md: '70px' }}
              src={atom.src}
            />
            <Text py='15px' color="#30233D" fontWeight='500' lineHeight='2.5rem' fontSize={{ base: "1.1rem", md: "1.688rem" }}>
              Identificador de Veículos
            </Text>
            <Text color="#776C82" fontWeight='400' lineHeight={{ base: "1.2rem", md: '1.625rem' }} fontSize={{ base: "0.8rem", md: '1rem' }}>
              Reconhecimento de veículos, com funções de <br />contagem e classificação.
            </Text>
          </Box>

          <Box>
            <Image
              height={{ base: "40px", md: '70px' }}
              src={atom.src}
            />
            <Text py='15px' color="#30233D" fontWeight='500' lineHeight='2.5rem' fontSize={{ base: "1.1rem", md: "1.688rem" }}>
              Marketing
            </Text>
            <Text color="#776C82" fontWeight='400' lineHeight={{ base: "1.2rem", md: '1.625rem' }} fontSize={{ base: "0.8rem", md: '1rem' }}>
              Eget nulla facilisi etiam dignissim diam quis<br /> enim lobortis scelerisque. Eu feugiat pretium<br /> nibh ipsum consequat nisl vel pretium.
            </Text>
          </Box>
        </SimpleGrid>
      </Layout>

      <Box width='' bg='#150433' mb='30px' py='2rem' h='16rem' display={{ base: 'block', md: 'none' }}>
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
              <Text py='10px' color="#ffffff" fontWeight='400' textAlign='center' lineHeight={{ base: "1.2rem", md: '1.625rem' }} fontSize='1rem' >
                {data[current].subTitle}
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