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
import interfaceConversacionalCard from "../../../../public/assets/interfaceConversacionalCard.png"
import HeaderContainer from "~/components/headerContainer";
import { data } from "~/components/mocks/carouselCoversationalInterface";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";


export default function ConversationalInterface() {
  const [current, setCurrent] = useState(0);

  return (
    <Box w="full">
      <HeaderContainer id="conversationalInterface" firstText="Ganhe agilidade em " secondText="seus processos internos" />


      <Layout>
        <Box
          py={{ base: "1rem", md: "3rem" }}
          w={{ base: "100%", xl: "85%" }}
          mx={{ base: "0", md: "20px" }}
          my={{ base: "50px", xl: "0" }}
    
        >
          <Text color="#F61067" fontWeight='800' letterSpacing='0.375rem' fontSize='0.75rem'>
            TECNOLOGIA
          </Text>
          <Text color="#30233D" fontSize={{ base: "1.813rem", xl: "2.813rem" }}>
            Interface Conversacionais
          </Text>
          <Text my="20px" color="#30233D" fontSize="1.125rem" >
            Interface conversacional é um software capaz de receber mensagens
            escritas ou por voz, interpretar seu conteúdo e oferecer respostas
            adequadas, sem fazer com que seu cliente precise instalar um novo
            aplicativo ou conversar com mais de um atendente.
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
            Acontece quando há uma conversa entre um ser humano
            e um bot (robô). Os bots usam técnicas de aprendizado
            de máquina para entender o texto e fornecer melhores
            respostas às consultas dos usuários.</Text>
          <Text
            fontSize='1rem'
            textAlign="right"
            fontWeight="400"
            color="#FCFCFC"
          >
            Grandes empresas já estão se movimentando em direção às
            interfaces conversacionais.
            <br />
            Além de serem extremamente intuitivas, elas proporcionam uma
            experiência única, que gera não apenas mais interesse, como
            também valor e engajamento superior a qualquer outro tipo de interação.
            <br />
            Interfaces conversacionais automatizadas permitem que marcas
            atinjam seusconsumidores de uma maneira muito mais
            escalável, pessoal, segmentada e inspiradora.
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
              Interface Conversacional
            </Text>
            <Image
              my="auto"
              src={interfaceConversacionalCard.src}
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
                      Interface Conversacional
                    </Text>
                    <Text
                      fontSize='1.125rem'
                      textAlign="right"
                      fontWeight="800"
                      color="#FCFCFC"
                      pb='1.325rem'
                    >
                      Acontece quando há uma conversa entre um ser humano<br /> e um bot (robô). Os bots usam técnicas de aprendizado<br /> de máquina para entender o texto e fornecer melhores <br />respostas às consultas dos usuários.
                    </Text>
                    <Text
                      textAlign="right"
                      fontWeight="400"
                      color="#FCFCFC"
                    >
                      Grandes empresas já estão se movimentando em direção às <br />
                      interfaces conversacionais. <br /><br />
                      Além de serem extremamente intuitivas, elas proporcionam uma <br />
                      experiência única, que gera não apenas mais interesse, como <br />
                      também valor e engajamento superior a qualquer outro tipo de interação.<br /><br />
                      Interfaces conversacionais automatizadas permitem que marcas <br />
                      atinjam seusconsumidores de uma maneira muito mais <br />
                      escalável, pessoal, segmentada e inspiradora.
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
          <Text color="#30233D" fontSize={{ base: "1.813rem", xl: "2.813rem" }} py={{ base: "10px", md: '60px' }} >
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
            {/* <Text color="#776C82" fontWeight='400' lineHeight={{ base: "1.2rem", md: '1.625rem' }} fontSize={{ base: "0.8rem", md: '1rem' }}>
              Eget nulla facilisi etiam dignissim diam quis<br /> enim lobortis scelerisque. Eu feugiat pretium<br /> nibh ipsum consequat nisl vel pretium.
            </Text> */}
          </Box>

          <Box>
            <Image
              height={{ base: "40px", md: '70px' }}
              src={atom.src}
            />
            <Text py='15px' color="#30233D" fontWeight='500' lineHeight='2.5rem' fontSize={{ base: "1.1rem", md: "1.688rem" }}>
              Redução de Custos
            </Text>
          </Box>

          <Box>
            <Image
              height={{ base: "40px", md: '70px' }}
              src={atom.src}
            />
            <Text py='15px' color="#30233D" fontWeight='500' lineHeight='2.5rem' fontSize={{ base: "1.1rem", md: "1.688rem" }}>
              Agilizar a solução de<br /> problemas
            </Text>
          </Box>

          <Box>
            <Image
              height={{ base: "40px", md: '70px' }}
              src={atom.src}
            />
            <Text py='15px' color="#30233D" fontWeight='500' lineHeight='2.5rem' fontSize={{ base: "1.1rem", md: "1.688rem" }}>
              Atendimento instantâneo
            </Text>
          </Box>

          <Box>
            <Image
              height={{ base: "40px", md: '70px' }}
              src={atom.src}
            />
            <Text py='15px' color="#30233D" fontWeight='500' lineHeight='2.5rem' fontSize={{ base: "1.1rem", md: "1.688rem" }}>
              Possibilidade de ter mais<br /> dados dos clientes
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