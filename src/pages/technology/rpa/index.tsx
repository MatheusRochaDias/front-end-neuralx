import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  SimpleGrid,
  UnorderedList,
  ListItem,
  Center,
} from "@chakra-ui/react";
import { Header, Layout } from "~/components";
import imgCarousel from "../../../../public/assets/imgCarousel.png"
import atom from "../../../../public/assets/atom.png"
import { Footer } from "~/components/footer";
import { Doubt } from "~/components/doubt";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { data } from "~/components/mocks/carouselRPA";
import HeaderContainer from "~/components/headerContainer";
import rpaCard from "../../../../public/assets/rpaCard.png"

export default function Rpa() {
  const [current, setCurrent] = useState(0);

  return (
    <Box w="full">
      <HeaderContainer id="rpa" firstText="Ganhe agilidade em " secondText="seus processos internos" />
      <Layout>
        <Box
          py={{ base: "1rem", md: "3rem" }}
          mx={{ base: "0", md: "20px" }}
          my={{ base: "50px", xl: "0" }}
    
        >
          <Text color="#F61067" fontWeight='800' letterSpacing='0.375rem' fontSize='0.75rem'>
            TECNOLOGIA
          </Text>
          <Text color="#30233D" fontSize={{ base: "1.813rem", xl: "2.813rem" }} >
            RPA
          </Text>

          <Text my="20px" color="#30233D" fontSize="1.125rem" >
            Automação robótica de processos. Com RPA, os usuários de software criam robôs de software, ou “bots”, que podem aprender, simular e executar processos de negócios baseados em regras. Pense nos “bots” como uma força de trabalho digital que pode interagir com qualquer sistema ou aplicativo.
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
          RPA
        </Text>
        <Box px="15px">
          <Text
            fontSize='1rem'
            textAlign="right"
            fontWeight="800"
            color="#FCFCFC"
            pb='1.325rem'
          >
            A automação de processos robóticos tem um efeito
            de bola de neve positivo nas operações e resultados
            de negócios. </Text>
          <Text
            fontSize='1rem'
            textAlign="right"
            fontWeight="400"
            color="#FCFCFC"
          >
            RPA oferece benefícios empresariais mensuráveis logo de cara,
            como redução de custos, maior precisão, velocidade de entrega.
            <br />
            E continua a agregar valor à medida que ganha impulso e se espalha
            pela organização.
            <br />
            RPA melhora os resultados de negócios, como a satisfação do
            cliente, e permite vantagens competitivas ao liberar as pessoas para
            fazer o que fazem melhor, resolver problemas.
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
              RPA
            </Text>
            <Image
              my="auto"
              src={rpaCard.src}
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
                      RPA
                    </Text>
                    <Text
                      fontSize='1.125rem'
                      textAlign="right"
                      fontWeight="800"
                      color="#FCFCFC"
                      pb='1.325rem'
                    >
                      A automação de processos robóticos tem um efeito<br />  de bola de neve positivo nas operações e resultados<br />  de negócios.
                    </Text>
                    <Text
                      textAlign="right"
                      fontWeight="400"
                      color="#FCFCFC"
                    >
                      RPA oferece benefícios empresariais mensuráveis logo de cara,<br /> como redução de
                      custos, maior precisão, velocidade de entrega.<br /><br />
                      E continua a agregar valor à medida que ganha impulso e se espalha<br /> pela organização. <br /><br />
                      RPA melhora os resultados de negócios, como a satisfação do <br />cliente, e permite
                      vantagens competitivas ao liberar as pessoas para<br /> fazer o que fazem melhor, resolver problemas.
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
          <Text color="#30233D" fontSize={{ base: "1.813rem", xl: "2.813rem" }} >
            Benefícios e onde Usar
          </Text>
        </Box>
        <SimpleGrid columns={3} py={{ base: "10px", md: '60px' }} gap={{ base: 5, md: 50 }} >
          <Box display={{ base: 'none', md: 'block' }}>
            <Image
              height={{ base: "40px", md: '70px' }}
              src={atom.src}
            />
            <Text py='15px' color="#30233D" fontWeight='500' lineHeight='2.5rem' fontSize={{ base: "1.1rem", md: "1.688rem" }}>
              Seguros
            </Text>
            <Text color="#776C82" fontWeight='400' lineHeight={{ base: "1.2rem", md: '1.625rem' }} fontSize={{ base: "0.8rem", md: '1rem' }}>
              Reduza custos e melhore a experiencia do cliente
              <UnorderedList>
                <ListItem>Gerenciamento de auditoria</ListItem>
                <ListItem>Atualização das informações do usuário</ListItem>
                <ListItem>Processo de administração e reclamação</ListItem>
              </UnorderedList>
            </Text>
          </Box>

          <Box display={{ base: 'none', md: 'block' }}>
            <Image
              height={{ base: "40px", md: '70px' }}
              src={atom.src}
            />
            <Text py='15px' color="#30233D" fontWeight='500' lineHeight='2.5rem' fontSize={{ base: "1.1rem", md: "1.688rem" }}>
              Serviços Bancários
            </Text>
            <Text color="#776C82" fontWeight='400' lineHeight={{ base: "1.2rem", md: '1.625rem' }} fontSize={{ base: "0.8rem", md: '1rem' }}>
              Defina uma nova era nos serviços financeiro, <br />automatizando
              <UnorderedList>
                <ListItem>Origens de empréstimos</ListItem>
                <ListItem>Migração de dados</ListItem>
                <ListItem>Boas vindas ao cliente</ListItem>
              </UnorderedList>
            </Text>
          </Box>

          <Box display={{ base: 'none', md: 'block' }}>
            <Image
              height={{ base: "40px", md: '70px' }}
              src={atom.src}
            />
            <Text py='15px' color="#30233D" fontWeight='500' lineHeight='2.5rem' fontSize={{ base: "1.1rem", md: "1.688rem" }}>
              Assistência médica
            </Text>
            <Text color="#776C82" fontWeight='400' lineHeight={{ base: "1.2rem", md: '1.625rem' }} fontSize={{ base: "0.8rem", md: '1rem' }}>
              Melhore a experiência do paciente e aumente a<br /> conformidade, automatizando
              <UnorderedList>
                <ListItem>Pré-autorização de pacientes</ListItem>
                <ListItem>Processamento de processos</ListItem>
                <ListItem>Registro médico e gerenciamento de dados</ListItem>
                <ListItem>Analise operacional</ListItem>
              </UnorderedList>
            </Text>
          </Box>

          <Box display={{ base: 'none', md: 'block' }}>
            <Image
              height={{ base: "40px", md: '70px' }}
              src={atom.src}
            />
            <Text py='15px' color="#30233D" fontWeight='500' lineHeight='2.5rem' fontSize={{ base: "1.1rem", md: "1.688rem" }}>
              Fabricação
            </Text>
            <Text color="#776C82" fontWeight='400' lineHeight={{ base: "1.2rem", md: '1.625rem' }} fontSize={{ base: "0.8rem", md: '1rem' }}>
              Simplifique seus processos mais complexos,<br /> automatizando
              <UnorderedList>
                <ListItem>Conformidade regulatória</ListItem>
                <ListItem>Gerenciamento de transportes</ListItem>
                <ListItem>Custo de frete</ListItem>
              </UnorderedList>
            </Text>
          </Box>

          <Box display={{ base: 'none', md: 'block' }}>
            <Image
              height={{ base: "40px", md: '70px' }}
              src={atom.src}
            />
            <Text py='15px' color="#30233D" fontWeight='500' lineHeight='2.5rem' fontSize={{ base: "1.1rem", md: "1.688rem" }}>
              Setor Público
            </Text>
            <Text color="#776C82" fontWeight='400' lineHeight={{ base: "1.2rem", md: '1.625rem' }} fontSize={{ base: "0.8rem", md: '1rem' }}>
              Impulsione a conectividade e o desempenho,<br /> automatizando
              <UnorderedList>
                <ListItem>Processos financeiro</ListItem>
                <ListItem>Recursos humanos</ListItem>
                <ListItem>Compras</ListItem>
              </UnorderedList>
            </Text>
          </Box>

        </SimpleGrid>
      </Layout>
      <Box width='' bg='#150433' mb='30px' py='2rem' h='19rem' display={{ base: 'block', md: 'none' }}>
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
              <Text color="#ffffff" py='10px' fontWeight='400' textAlign='left' lineHeight={{ base: "1.2rem", md: '1.625rem' }} fontSize={{ base: "0.8rem", md: '1rem' }}>
                <UnorderedList>
                  {data[current].topic.map((topic, index) => <ListItem key={index}><>{topic}</></ListItem>)}
                </UnorderedList>
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
    </Box >
  );
}