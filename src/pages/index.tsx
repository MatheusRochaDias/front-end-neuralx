import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  Button,
  useMediaQuery,
  Heading,
  Center,
} from "@chakra-ui/react";
import Ia from "../../public/assets/IA.png";
import User2 from "../../public/assets/user2.png";
import User3 from "../../public/assets/user3.png";
import { data } from "~/components/mocks/carouselServices";
import { dataComments } from "~/components/mocks/carouselComments";
import { Layout } from "~/components";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { loadFull } from "tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { Footer } from "~/components/footer";
import { ContactForm } from "~/components/contactForm";
import router from "next/router";
import imgVisaoComputacional from "../../public/assets/visãoComputacionalCard.png"
import interfaceConversacionalCard from "../../public/assets/interfaceConversacionalCard.png"
import rpaCard from "../../public/assets/rpaCard.png"
import bigDataCard from "../../public/assets/bigDataCard.png"

import HeaderContainer from "~/components/headerContainer";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import SwiperClients from "~/components/swiper/swiperClients";

interface ISeries {
  name: string;
  data: number;
}

interface ITest {
  categories: Array<string>;
  series: ISeries[];
}
export default function Home() {
  const [current, setCurrent] = useState(0);
  const [currentComment, setCurrentComment] = useState(0);
  const [isLarger, Deskt, xl, lg, xl1378, isText, smQuote] = useMediaQuery([
    "(min-width: 1320px)",
    "(max-width: 1350px)",
    "(max-width: 1400px)",
    "(max-width: 1036px)",
    "(max-width: 1378px)",
    "(min-width: 1220px)",
    "(max-width: 878px)",
  ]);

  const products = [
    {
      title: 'Visão Computacional',
      subTitle: <p> A visão humana possibilita a interpretação de <br />inúmeros aspectos do mundo</p>,
      text: <p>  Essas percepções são diversas, por exemplo, ao observar<br />
        uma árvore na rua, é possível notar diferentes aspectos da <br />
        planta, como cores, texturas e formatos.  <br /><br />
        A visão computacional é um dos ramos da inteligência artificial <br />
        que estuda o processamento de imagens do mundo real por <br />um computador.<br /><br />
        Em outras palavras, essa área investiga maneiras de dar às máquinas a<br />
        capacidade de interpretar visualmente informações, ou seja, enxergar.<br />
      </p>,
      image: imgVisaoComputacional.src,
      route: "../technology/computer-vision"
    },
    {
      title: 'Interface Conversacional',
      subTitle: <p> Acontece quando há uma conversa entre um ser humano<br /> e um bot (robô). Os bots usam técnicas de aprendizado<br /> de máquina para entender o texto e fornecer melhores <br />respostas às consultas dos usuários.</p>,
      text: <p>  Grandes empresas já estão se movimentando em direção às <br />
        interfaces conversacionais. <br /><br />
        Além de serem extremamente intuitivas, elas proporcionam uma <br />
        experiência única, que gera não apenas mais interesse, como <br />
        também valor e engajamento superior a qualquer outro tipo de interação.<br /><br />
        Interfaces conversacionais automatizadas permitem que marcas <br />
        atinjam seusconsumidores de uma maneira muito mais <br />
        escalável, pessoal, segmentada e inspiradora.
      </p>,
      image: interfaceConversacionalCard.src,
      route: "../technology/conversational-interface",
    },
    {
      title: 'RPA',
      subTitle: <p>    A automação de processos robóticos tem um efeito<br />  de bola de neve positivo nas operações e resultados<br />  de negócios.</p>,
      text: <p>  RPA oferece benefícios empresariais mensuráveis logo de cara,<br /> como redução de
        custos, maior precisão, velocidade de entrega.<br /><br />
        E continua a agregar valor à medida que ganha impulso e se espalha<br /> pela organização. <br /><br />
        RPA melhora os resultados de negócios, como a satisfação do <br />cliente, e permite
        vantagens competitivas ao liberar as pessoas para<br /> fazer o que fazem melhor, resolver problemas.
      </p>,
      image: rpaCard.src,
      route: "../technology/rpa"
    },
    {
      title: 'Big Data',
      subTitle: <p>É a área do conhecimento que estuda como tratar, analisar <br /> e obter informações a partir de conjuntos de dados<br /> grandes demais para serem analisados por sistemas<br /> tradicionais.</p>,
      text: <p>Quanto mais dados são gerados, maior é o esforço para extrair informações. <br />
        E os centros de dados tiveram que aprender a lidar com o crescimento  <br />
        exponencial de dados gerados e desenvolver ferramentas que fossem para além <br />
        de bancos de dados relacionais e sistemas paralelos de bancos de dados. <br />
        Sendo assim, a velocidade para obter a informação faz parte do sucesso  <br />
        que o big data pode proporcionar em sua empresa.
      </p>,
      image: bigDataCard.src,
      route: "../technology/big-data",
    },
  ];


  const buttonPlus = () => {
    setCurrent(current + 1)
    { current === 3 && setCurrent(0) }
  }

  const buttonMinus = () => {
    setCurrent(current - 1)
    { current === 0 && setCurrent(3) }
  }

  return (
    <Box w="full">
      <HeaderContainer id="id" firstText="Ganhe agilidade em " secondText="seus processos internos" />

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
            w={{ base: "100%", xl: "40%" }}
            mx={{ base: "0", md: "20px" }}
          >
            {/* <Text color="#F61067">lorem ipsum</Text> */}
            <Text color="#30233D" fontSize={{ base: "1.813rem", xl: "2.813rem" }} cursor={"pointer"}>
              NeuralX
            </Text>
            <Text my="20px" color="#30233D" fontSize={"1.125rem"}>
              A NeuralX transforma tarefas manuais, lentas e desgastantes em um processo ágil, dinâmico e prático.
            </Text>
            <Text color=" #776C82">
              Sabe aquelas tarefas que se repetem todos os dias em sua empresa? Tarefas importantíssimas para que o fluxo do trabalho funcione, porem que demandam um tempo muito grande e exigem que um ou mais profissionais estejam atuando exclusivamente nelas? Nos da NeuralX temos a tecnologia perfeita para que tais tarefas comecem a ser executadas de forma rápida e eficiente, deixando assim seu funcionário livre para outras tarefas mais relevantes.
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
      <Box display={{ base: "none", md: "flex" }} py="50px">
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
              {products[current].title}
            </Text>
            <Image
              my="auto"
              src={products[current].image}
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
                  w="800px"
                  bg="#30124E"
                  h="100%"
                  my="auto"
                  minH={"600px"}
                >
                  <Box>
                    <Text
                      fontSize='2.813rem'
                      textAlign="right"
                      fontWeight="500"
                      color="#FCFCFC"
                      pb='1rem'
                    >
                      {products[current].title}
                    </Text>
                    <Text
                      fontSize="1.125rem"
                      textAlign="right"
                      fontWeight="800"
                      color="#FCFCFC"
                      pb='1.325rem'
                    >
                      {products[current].subTitle}
                    </Text>
                    <Text
                      textAlign="right"
                      fontWeight="400"
                      color="#FCFCFC"
                    > {products[current].text}
                      <br />
                      <br />
                      Clique em clique em “Saiba Mais” para ver seus benefícios e onde pode ser utilizada.
                    </Text>
                    <Flex pb="20px" w="full" justify={{ base: "center", lg: "right" }}>
                      <Button
                        bg=" #3347CA"
                        borderRadius={"20px"}
                        w="197px"
                        color="#fff"
                        mt="30px"

                        onClick={() => router.push(products[current].route)}
                        _hover={{ bg: "#F61067" }}
                      >
                        Saiba Mais
                      </Button>
                    </Flex>
                  </Box>
                </Center>
              </Box>
            </Box>
            {/* onClick={() => setTimeout(() => { setIsLoading(true), setIsConfirmed(true) }, 3000)} */}
          </Flex>
          <Flex mx="auto" w="80%" gap={6} py="10px" >
            <Box onClick={buttonMinus} cursor="pointer">
              <BsArrowLeftCircle size={27} color="#F61067" />
            </Box>
            <Box onClick={buttonPlus} cursor="pointer">
              <BsArrowRightCircle size={27} color="#F61067" />
            </Box>
          </Flex>
        </Layout>
      </Box>
      
      <Box
        w="full"
        bg="#150433"
        id="contact"
        pt={{ base: "85px", lg: "100px" }}
      >
        <Layout>
          <Box mx={{ base: "10px", lg: "" }}
            pb="40px"
          >

            <SwiperClients />

            <Heading
              fontSize={{ base: "1.813rem", xl: "2.813rem" }}
              textAlign={"center"}
              color="#fff"
              w={{ base: "100%", lg: "40%" }}
              mx="auto"
              mb={{ base: "20px", lg: "80px" }}
              fontWeight="500"
            >
              Seja uma empresa adepta da Inteligência artificial
            </Heading>
            <Flex w="full" justify={"center"} align="center">
              <Box display={{ base: "none", lg: "flex" }}>
                <Image
                  onClick={() => setCurrentComment(0)}
                  cursor="pointer"
                  mr="20px"
                  src={User2.src}
                  backgroundSize="cover"
                  w="150px"
                  h="150px"
                  borderRadius={"50%"}
                  alt="Carousel de imagens"
                  id="image-users"
                />
                <Image
                  onClick={() => setCurrentComment(1)}
                  cursor="pointer"
                  mt="100px"
                  src={User3.src}
                  backgroundSize="cover"
                  w="90px"
                  h="90px"
                  borderRadius={"50%"}
                  alt="Carousel de imagens"
                  id="image-users1"
                />
              </Box>
              <Box>
                <Image
                  src={dataComments[currentComment].image}
                  backgroundSize="cover"
                  w={{ base: "200px", lg: "300px" }}
                  h={{ base: "200px", lg: "300px" }}
                  borderRadius={"50%"}
                  alt="Carousel de imagens"
                />
              </Box>
              <Box display={{ base: "none", lg: "flex" }}>
                <Image
                  onClick={() => setCurrentComment(2)}
                  cursor="pointer"
                  mt="100px"
                  src={User3.src}
                  backgroundSize="cover"
                  w="90px"
                  h="90px"
                  borderRadius={"50%"}
                  alt="Carousel de imagens"
                  id="image-users1"
                />
                <Image
                  onClick={() => setCurrentComment(3)}
                  cursor="pointer"
                  src={User2.src}
                  mt="200px"
                  backgroundSize="cover"
                  w="150px"
                  h="150px"
                  borderRadius={"50%"}
                  alt="Carousel de imagens"
                  id="image-users"
                />
              </Box>
            </Flex>
            <Flex
              w={{ base: "100%", lg: "50%" }}
              mx="auto"
              justify={"center"}
              align="center"
              mt={{ base: "10px", lg: "50px" }}
            >
              <Flex
                align={"center"}
                justify="center"
                border="1px solid #F61067"
                borderRadius={50}
                w="28px"
                h={"28px"}
                _hover={{
                  bg: "#F61067",
                  color: "#fff",
                }}
                color="#F61067"
                p="5px"
                cursor={"pointer"}
                onClick={() => {
                  if (currentComment === 0) {
                    setCurrentComment(dataComments?.length);
                  }
                  setCurrentComment((item) => item - 1);
                }}
              >
                <FiArrowLeft size={18} />
              </Flex>
              <Box
                color="#fff"
                fontSize="1.125rem"
                w={{ base: "90%", lg: "70%" }}
                mx={{ base: "5px", lg: "80px" }}
                textAlign={"center"}
              >
                {dataComments[currentComment].comment}
                <Text fontSize={"12px"} mt="15px">
                  {dataComments[currentComment].author}
                </Text>
              </Box>
              <Flex
                align={"center"}
                justify="center"
                w="28px"
                h={"28px"}
                _hover={{
                  bg: "#F61067",
                  color: "#fff",
                }}
                color="#F61067"
                border="1px solid #F61067"
                borderRadius={50}
                p="5px"
                cursor={"pointer"}
                onClick={() => {
                  if (currentComment >= dataComments.length - 1) {
                    setCurrentComment(-1);
                  }
                  setCurrentComment((item) => item + 1);
                }}
              >
                <FiArrowRight size={18} />
              </Flex>
            </Flex>
          </Box>
        </Layout>
        <ContactForm />
        <Footer />
      </Box>
    </Box>
  );
}