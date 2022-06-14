import React from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";
import Ia from "../../public/assets/IA.png";
import Img from "../../public/assets/imgCarousel.png";
import { Header, Layout } from "~/components";
import { configParticles } from "~/components/mocks/particles";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { BsArrowRight } from "react-icons/bs";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Container, Engine } from "tsparticles-engine";

export default function Home() {
  const [isLarger, Deskt, xl, lg, test] = useMediaQuery([
    "(min-width: 1320px)",
    "(max-width: 1350px)",
    "(max-width: 1400px)",
    "(max-width: 1036px)",
    "(max-width: 1378px)",
  ]);
  const particlesInit = async (main: Engine) => {
    // console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = async (container: Container) => {
    // console.log(container);
  };

  return (
    <Box w="full">
      <Box
        id="id"
        h={{ base: "500px", md: "650px", lg: "800px", xl: "900px" }}
        borderEndStartRadius={"40%"}
      >
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          style={{ width: "100%", height: "100%", position: "absolute" }}
          options={configParticles}
        />
        <Header />
        <Layout>
          <Box w={{ base: "80%", lg: "70%", xl: "50%" }} mt="80px">
            <Box w={"full"}>
              <Text color={"#fff"}>Lorem ipsum</Text>
              <Text fontSize={{ base: "30px", md: "45px", lg: "65px" }}>
                <Text color={"#fff"}>
                  Ganhe agilidade em{" "}
                  <span style={{ color: "#F61067" }}>
                    seus processos internos
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
        <Flex
          w="full"
          justify={"space-between"}
          mt="50px"
          mb={{ base: "0", xl: "-150px" }}
          flexDir={{ base: "column", lg: "row" }}
        >
          <Box w={{ base: "80%", xl: "40%" }} mr={{ base: "10px", xl: "0" }}>
            <Text color="#F61067">lorem ipsum</Text>
            <Text color="#30233D" fontSize={"45px"} cursor={"pointer"}>
              Lorem ipsum
            </Text>
            <Text my="20px" color="#30233D" fontSize={"18px"}>
              Apparently we had reached a great height in the atmosphere, for
              the sky was a dead black, and the stars had ceased to twinkle.
            </Text>
            <Text color=" #776C82">
              Sabe aquelas tarefas que se repetem todos os dias em sua empresa?
              Tarefas importantíssimas para que o fluxo do trabalho funcione,
              porem que demandam um tempo muito grande e exigem que um ou mais
              profissionais estejam atuando exclusivamente nelas? Foi prestando
              atenção nisso que fez a NeuralX nascer. A NeuralX transforma essas
              tarefas manuais, lentas e desgastantes em um processo ágil,
              dinâmico e prático.
            </Text>
            <Button
              bg=" #3347CA"
              borderRadius={"20px"}
              w="197px"
              color="#fff"
              mt="80px"
            >
              Saber mais
            </Button>
          </Box>
          <Flex w="full" justify={"right"}>
            <Box zIndex={1000} mt="40px">
              <Image
                src={Ia.src}
                width={{ base: "70%", lg: "full" }}
                h={{ base: "90%", lg: "80%" }}
                alt="IA"
              />
            </Box>
            <Flex
              justify={"center"}
              align="center"
              bg="#5E239D"
              h={{ base: "70%", lg: "60%" }}
              ml={{ base: "-35px", xl: "-70px" }}
              w={{ base: "50%", xl: "40%" }}
            >
              <Text
                color="#fff"
                px={{ base: "50px", xl: "100px" }}
                ml={{ base: "10px", xl: "50px" }}
                fontSize={{ base: "15px", md: "20px", xl: "30px" }}
              >
                Torne-se mais competitivo e eficiente
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Layout>
      <Flex maxW="1400px" mx="auto" w={{ base: "100%", xl: "85%" }}>
        <Box
          display={{ base: "none", lg: "flex" }}
          h="full"
          // bg="red"
          // maxH={{
          //   base: "",
          //   lg: isLarger ? "800px" : "700px",
          //   xl: isLarger ? "800px" : "700px",
          // }}
        >
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
                Visão computacional
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
                  xl: xl ? (test ? "70px" : "40px") : "0",
                }}
                src={Img.src}
                width={{ base: "300px", lg: lg ? "390px" : "410px", xl: "80%" }}
                h={{ base: "400px", lg: "100%", xl: xl ? "95%" : "100%" }}
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
          >
            <Text mr="20px">1/3</Text>
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
              >
                <FiArrowRight color="#fff" size={20} />
              </Flex>
            </Flex>
          </Flex>
        </Box>
        <Flex
          bg="#30124E"
          // h="700px"
          w="full"
          // h="100% - 20%"
          // justify={"center"}
          // align="center"
          mb={{ base: "-100px", lg: "-200px", xl: "-200px" }}
          color="#fff"
          pl={{ base: "50px", xl: Deskt ? "0" : "250px" }}
        >
          <Box
            // p="0px 90px 0px 30px"
            pr={{ base: "0", lg: "90px" }}
            pl={{ base: "0", lg: "90px" }}
            mt="120px"
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
              fontSize={{ base: "25px", lg: "45px" }}
              textAlign={{ base: "center", lg: "right" }}
              fontWeight="500"
              color="#FCFCFC"
              lineHeight={"67px"}
              fontStyle={"normal"}
              my={{ base: "0", lg: "17px" }}
            >
              Visão Computacional
            </Text>
            <Text
              fontSize={{ base: "16px", lg: "18px" }}
              textAlign={{ base: "center", lg: "right" }}
              fontWeight="800"
              color="#FCFCFC"
              lineHeight={"29px"}
              fontStyle={"normal"}
              my={{ base: "0", lg: "17px" }}
              mb={{ base: "0", lg: "55px" }}
            >
              Eget nunc scelerisque viverra mauris in aliquam. Dignissim sodales
              ut eu sem integer vitae. Libero nunc consequat interdum varius.
            </Text>
            <Text
              fontSize={{ base: "16px", lg: "18px" }}
              textAlign={{ base: "center", lg: "right" }}
              fontWeight="400"
              color="#FCFCFC"
              lineHeight={"29px"}
              fontStyle={"normal"}
              my={{ base: "0", lg: "20px" }}
            >
              Magna sit amet purus gravida. Sit amet porttitor eget dolor morbi
              non.
            </Text>
            <Text
              fontSize={{ base: "16px", lg: "18px" }}
              textAlign={{ base: "center", lg: "right" }}
              fontWeight="400"
              color="#FCFCFC"
              lineHeight={"29px"}
              fontStyle={"normal"}
              my={{ base: "0", lg: "20px" }}
            >
              Lectus vestibulum mattis ullamcorper velit sed ullamcorper.
            </Text>
            <Text
              fontSize={{ base: "16px", lg: "18px" }}
              textAlign={{ base: "center", lg: "right" }}
              fontWeight="400"
              color="#FCFCFC"
              lineHeight={"29px"}
              fontStyle={"normal"}
              my={{ base: "0", lg: "20px" }}
            >
              Diam phasellus vestibulum lorem sed risus ultricies tristique
              nulla.
            </Text>
            <Text
              fontSize={{ base: "16px", lg: "18px" }}
              textAlign={{ base: "center", lg: "right" }}
              fontWeight="400"
              color="#FCFCFC"
              lineHeight={"29px"}
              fontStyle={"normal"}
              my={{ base: "0", lg: "20px" }}
              // textUnderlineOffset={}
            >
              Diam phasellus vestibulum lorem sed risus ultricies tristique
              nulla. Dui faucibus in ornare quam viverra. Posuere ac ut
              consequat semper viverra.
            </Text>
            <Flex w="full" justify={{ base: "center", lg: "right" }}>
              <Button
                bg=" #3347CA"
                borderRadius={"20px"}
                w="197px"
                color="#fff"
                mt="50px"
              >
                Saber mais
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Flex>
      <Flex w="full" bg="#150433" h="800px">
        <Flex>
          <Box></Box>
        </Flex>
        <Box>
          <Box></Box>
        </Box>
      </Flex>
    </Box>
  );
}
