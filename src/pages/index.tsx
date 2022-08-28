import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  Button,
  useMediaQuery,
  Heading,
} from "@chakra-ui/react";
import Ia from "../../public/assets/IA.png";
import User2 from "../../public/assets/user2.png";
import User3 from "../../public/assets/user3.png";
import { data } from "~/components/mocks/carouselServices";
import { dataComments } from "~/components/mocks/carouselComments";
import {  Layout } from "~/components";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { loadFull } from "tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { Footer } from "~/components/footer";
import { ContactForm } from "~/components/contactForm";
import router from "next/router";
import HeaderContainer from "~/components/headerContainer";

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
  const particlesInit = async (main: Engine) => {
    // console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = async (container: Container) => {
    // console.log(container);
  };

  const isWidth = window.screen.width;
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
            <Text color="#30233D" fontSize={"45px"} cursor={"pointer"}>
              NeuralX
            </Text>
            <Text my="20px" color="#30233D" fontSize={"18px"}>
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
      <Flex maxW="1400px" mx="auto" w={{ base: "100%", xl: "85%" }} h="full">
        <Box display={{ base: "none", lg: "flex" }} h="full">
          <Flex w="full" justify={"space-between"}>
            <Flex
              justify={"right"}
              align="center"
              mt={{ base: "", lg: "50px" }}
              pr="20px"
            >
              <Text
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
                {data[current].title}
              </Text>
            </Flex>
            <Flex
              w="500px"
              mt="70px"
              mr={{ base: "-350px", xl: "-380px" }}
              zIndex={1000}
            >
              <Image
                mt={{
                  base: "",
                  lg: lg ? "30px" : "",
                }}
                src={data[current].image}
                width={{ base: "300px", lg: lg ? "390px" : "410px", xl: "80%" }}
                h={{ base: "450px", lg: "100%" }}
                maxH="500px"
                minH={"500px"}
                alt="IA"
              />
            </Flex>
          </Flex>
          <Flex
            // h="full"
            // w="full"
            color="#fff"
            justify={"right"}
            alignItems="center"
            zIndex={1000}
            mb="-800px"
            mt={isWidth === 1358 ? "280px" : ""}
          >
            <Text mr="20px">{`${current + 1}/${data.length}`}</Text>
            <Flex>
              <Flex
                mr="20px"
                align={"center"}
                justify="center"
                w="30px"
                h={"30px"}
                border="1px solid #ffffff"
                borderRadius={50}
                p="5px"
                cursor={"pointer"}
                onClick={() => {
                  if (current === 0) {
                    setCurrent(3);
                  }
                  setCurrent((item) => item - 1);
                }}
              >
                <FiArrowLeft color="#fff" size={20} />
              </Flex>
              <Flex
                mr="20px"
                align={"center"}
                justify="center"
                w="30px"
                h={"30px"}
                border="1px solid #ffffff"
                borderRadius={50}
                p="5px"
                cursor={"pointer"}
                onClick={() => {
                  if (current >= data.length - 1) {
                    setCurrent(-1);
                  }
                  setCurrent((item) => item + 1);
                }}
              >
                <FiArrowRight color="#fff" size={20} />
              </Flex>
            </Flex>
          </Flex>
        </Box>
        <Flex
          bg="#30124E"
          w="full"
          // h={{ base: "700px", md: "500px", lg: "100%" }}
          mb={{ base: "-100px", lg: lg ? "-120px" : "-200px", xl: "-200px" }}
          color="#fff"
          pl={{ base: "50px", xl: Deskt ? "0" : "81px" }}
          p={{ base: "50px 10px", md: "50px 20px", lg: "0" }}
          align="center"
          zIndex={10000}
        >
          <Flex
            display={{ base: "flex", lg: "none" }}
            align={"center"}
            justify="center"
            w="30px"
            h={"30px"}
            border="1px solid #ffffff"
            borderRadius={50}
            p="5px"
            cursor={"pointer"}
            onClick={() => {
              if (current === 0) {
                setCurrent(3);
              }
              setCurrent((item) => item - 1);
            }}
          >
            <FiArrowLeft color="#fff" size={20} />
          </Flex>
          <Box
            // p="0px 90px 0px 30px"
            pr={{ base: "0", lg: lg ? "30px" : xl1378 ? "60px" : "90px" }}
            pl={{ base: "0", lg: xl1378 ? "150px" : "90px" }}
            mt={{ base: "0", lg: "150px" }}
            w={{ base: "full", xl: "85%" }}
            ml={{ base: "0", xl: "auto" }}
            zIndex={10000}
          >
            <Text
              fontSize={"12.6px"}
              textAlign={{ base: "center", lg: "right" }}
              letterSpacing={"6px"}
              fontWeight="800"
              color="#F61067"
              lineHeight={"26px"}
              textTransform="uppercase"
              fontStyle={"normal"}
            >
              Tecnologia
            </Text>
            <Text
              fontSize={{ base: "25px", lg: !isText ? "35px" : "45px" }}
              textAlign={{ base: "center", lg: "right" }}
              fontWeight="500"
              color="#FCFCFC"
              lineHeight={"67px"}
              fontStyle={"normal"}
              my={{ base: "0", lg: "17px" }}
            >
              {data[current].title}
            </Text>
            <Text
              fontSize={{ base: "16px", lg: !isText ? "17.5px" : "18px" }}
              textAlign={{ base: "center", lg: "right" }}
              fontWeight="800"
              color="#FCFCFC"
              lineHeight={"29px"}
              fontStyle={"normal"}
              // my={{ base: "0", lg: !isText ? "7px" : "17px" }}
              mb={{ base: "10px", lg: !isText ? "20px" : "35px" }}
            >
              {data[current].subTitle} </Text>
            <Text
              fontSize={{ base: "16px", lg: "18px" }}
              textAlign={{ base: "center", lg: "right" }}
              fontWeight="400"
              color="#FCFCFC"
              lineHeight={"29px"}
              fontStyle={"normal"}
            // my={{ base: "0", lg: !isText ? "7px" : "20px" }}
            >
              {data[current].description}
            </Text>
            <br />
            <br />
            Clique em clique em “Saiba Mais” para ver seus benefícios e onde pode ser utilizada.
            <Flex w="full" justify={{ base: "center", lg: "right" }}>
              <Button
                bg=" #3347CA"
                borderRadius={"20px"}
                w="197px"
                color="#fff"
                mt={!isText ? "30px" : "50px"}
                onClick={() => router.push(data[current].route)}
                _hover={{ bg: "#F61067" }}
              >
                Saiba Mais
              </Button>
            </Flex>
          </Box>
          <Flex
            display={{ base: "flex", lg: "none" }}
            align={"center"}
            justify="center"
            w="30px"
            h={"30px"}
            border="1px solid #ffffff"
            borderRadius={50}
            p="5px"
            cursor={"pointer"}
            onClick={() => {
              if (current >= data.length - 1) {
                setCurrent(-1);
              }
              setCurrent((item) => item + 1);
            }}
          >
            <FiArrowRight color="#fff" size={20} />
          </Flex>
        </Flex>
      </Flex>
      <Box
        w="full"
        bg="#150433"
        id="contact"
        pt={{ base: "170px", lg: "300px" }}
      >
        <Layout>
          <Box mx={{ base: "10px", lg: "" }}
            pb="40px"
          >
            <Heading
              textAlign={"center"}
              color="#fff"
              w={{ base: "100%", lg: "40%" }}
              mx="auto"
              mb={{ base: "20px", lg: "80px" }}
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
                fontSize={{ base: "17px", lg: "24px" }}
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