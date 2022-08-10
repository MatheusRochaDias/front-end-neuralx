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
import { Header, Layout } from "~/components";
import { BsArrowRight } from "react-icons/bs";
import peopleServicesPage from "../../../../public/assets/peopleServicesPage.png"
import graphServicePage from "../../../../public/assets/graphServicePage.png"
import backgroundPartServices from "../../../../public/assets/backgroundPartServices.png"
import Icon from "../../../../public/assets/Icon.png"
import atom from "../../../../public/assets/atom.png"
import balance from "../../../../public/assets/balance.png"
import graphMarketplace from "../../../../public/assets/graphMarketplace.png"
import { Footer } from "~/components/footer";
import { Doubt } from "~/components/doubt";
import Ia from "../../../../public/assets/Ia.png"
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

export default function Marketplace() {
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
      <Box
        id="marketplace"
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
          mt={{ base: "0", md: "50px" }}
          mb={{ base: "0", xl: "-150px" }}
          flexDir={{ base: "column", lg: "row" }}
        >
          <Flex
            flexDir={"column"}
            w={{ base: "100%", xl: "40%" }}
            mx={{ base: "0", md: "20px" }}
          >
            <Text color="#F61067">lorem ipsum</Text>
            <Text color="#30233D" fontSize={{ base: "2rem", md: "2.813rem" }} cursor={"pointer"}>
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


      <Layout>
        <SimpleGrid columns={{ base: 1, md: 2 }}>

          <Center pr='25px'>
            <Box
              pt="3rem"
              w={{ base: "100%", xl: "100%" }}
              mx={{ base: "0", md: "20px" }}
            >
              <Text color="#F61067" fontWeight='800' letterSpacing='0.375rem' fontSize='0.75rem'>
                LOREM IPSUM
              </Text>
              <Text color="#30233D" fontSize={{ base: "2rem", md: "2.813rem" }} >
                Lorem ipsum
              </Text>

              <Text my="20px" color="#776C82" fontSize={"1rem"} >
                Eget nulla facilisi etiam dignissim diam quis<br /> enim lobortis scelerisque. Eu feugiat pretium<br /> nibh ipsum consequat nisl vel pretium.<br />
                Eget nulla facilisi etiam dignissim diam quis <br />enim lobortis scelerisque. Eu feugiat pretium<br /> nibh ipsum consequat nisl vel pretium.
              </Text>
            </Box>
          </Center>
          <Center>
            <Image
              width='850px'
              src={graphMarketplace.src}
            />
          </Center>
        </SimpleGrid>
        <Box
          pt="1rem"
          w="100%"
        >
          <Text textAlign='center' color="#150433" fontSize={{ base: "2rem", md: "2.813rem" }} >
            Lorem ipsum at
          </Text>
          <Text my="20px" textAlign='center' color="#150433" fontSize={{ base: "1.1rem", md: "1.125rem" }} >
            Eget nunc scelerisque viverra mauris in aliquam. Dignissim sodales ut eu sem integer vitae. <br />
            Libero nunc consequat interdum varius.
          </Text>
        </Box>
        <Center pb={{ base: '10px', md: '60px' }}>
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: 5, md: 30 }} py='30px' w='90%'>
            <Box border='1px' py='50px' px='36px' w='362px' h='362px' borderColor='#F6106780'>
              <Image
                height='70px'
                src={atom.src}
                color='#FCFCFC'
              />
              <Text py='15px' color="#30233D" fontWeight='500' lineHeight='2.5rem' fontSize='1.688rem'>
                Produto 1
              </Text>
              <Text color="#30233D" fontWeight='400' lineHeight='1.625rem' fontSize='1rem'>
                Eget nulla facilisi etiam dignissim<br /> diam quis enim lobortis scelerisque.<br /> Eu feugiat pretium nibh ipsum<br /> consequat nisl vel pretium.
              </Text>
              <Box py='10px'>
                <Button bg='#3347CA' _hover={{ bg: "#F61067" }} color='#FFFFFF' borderRadius='36px' >COMPRAR</Button>
              </Box>
            </Box>

            <Box border='1px' py='50px' px='36px' w='362px' h='362px' borderColor='#F6106780'>
              <Image
                height='70px'
                src={atom.src}
                color='#FCFCFC'
              />
              <Text py='15px' color="#30233D" fontWeight='500' lineHeight='2.5rem' fontSize='1.688rem'>
                Produto 1
              </Text>
              <Text color="#30233D" fontWeight='400' lineHeight='1.625rem' fontSize='1rem'>
                Eget nulla facilisi etiam dignissim<br /> diam quis enim lobortis scelerisque.<br /> Eu feugiat pretium nibh ipsum<br /> consequat nisl vel pretium.
              </Text>
              <Box py='10px'>
                <Button bg='#3347CA' _hover={{ bg: "#F61067" }} color='#FFFFFF' borderRadius='36px' >COMPRAR</Button>
              </Box>
            </Box>

            <Box border='1px' py='50px' px='36px' w='362px' h='362px' borderColor='#F6106780'>
              <Image
                height='70px'
                src={atom.src}
                color='#FCFCFC'
              />
              <Text py='15px' color="#30233D" fontWeight='500' lineHeight='2.5rem' fontSize='1.688rem'>
                Produto 1
              </Text>
              <Text color="#30233D" fontWeight='400' lineHeight='1.625rem' fontSize='1rem'>
                Eget nulla facilisi etiam dignissim<br /> diam quis enim lobortis scelerisque.<br /> Eu feugiat pretium nibh ipsum<br /> consequat nisl vel pretium.
              </Text>
              <Box py='10px'>
                <Button bg='#3347CA' _hover={{ bg: "#F61067" }} color='#FFFFFF' borderRadius='36px' >COMPRAR</Button>
              </Box>
            </Box>

            <Box display={{ base: "none", md: "block" }} border='1px' py='50px' px='36px' w='362px' h='362px' borderColor='#F6106780'>
              <Image
                height='70px'
                src={atom.src}
                color='#FCFCFC'
              />
              <Text py='15px' color="#30233D" fontWeight='500' lineHeight='2.5rem' fontSize='1.688rem'>
                Produto 1
              </Text>
              <Text color="#30233D" fontWeight='400' lineHeight='1.625rem' fontSize='1rem'>
                Eget nulla facilisi etiam dignissim<br /> diam quis enim lobortis scelerisque.<br /> Eu feugiat pretium nibh ipsum<br /> consequat nisl vel pretium.
              </Text>
              <Box py='10px'>
                <Button bg='#3347CA' _hover={{ bg: "#F61067" }} color='#FFFFFF' borderRadius='36px' >COMPRAR</Button>
              </Box>
            </Box>

            <Box display={{ base: "none", md: "block" }} border='1px' py='50px' px='36px' w='362px' h='362px' borderColor='#F6106780'>
              <Image
                height='70px'
                src={atom.src}
                color='#FCFCFC'
              />
              <Text py='15px' color="#30233D" fontWeight='500' lineHeight='2.5rem' fontSize='1.688rem'>
                Produto 1
              </Text>
              <Text color="#30233D" fontWeight='400' lineHeight='1.625rem' fontSize='1rem'>
                Eget nulla facilisi etiam dignissim<br /> diam quis enim lobortis scelerisque.<br /> Eu feugiat pretium nibh ipsum<br /> consequat nisl vel pretium.
              </Text>
              <Box py='10px'>
                <Button bg='#3347CA' _hover={{ bg: "#F61067" }} color='#FFFFFF' borderRadius='36px' >COMPRAR</Button>
              </Box>
            </Box>

            <Box display={{ base: "none", md: "block" }} border='1px' py='50px' px='36px' w='362px' h='362px' borderColor='#F6106780'>
              <Image
                height='70px'
                src={atom.src}
                color='#FCFCFC'
              />
              <Text py='15px' color="#30233D" fontWeight='500' lineHeight='2.5rem' fontSize='1.688rem'>
                Produto 1
              </Text>
              <Text color="#30233D" fontWeight='400' lineHeight='1.625rem' fontSize='1rem'>
                Eget nulla facilisi etiam dignissim<br /> diam quis enim lobortis scelerisque.<br /> Eu feugiat pretium nibh ipsum<br /> consequat nisl vel pretium.
              </Text>
              <Box py='10px'>
                <Button bg='#3347CA' _hover={{ bg: "#F61067" }} color='#FFFFFF' borderRadius='36px' >COMPRAR</Button>
              </Box>
            </Box>

            <Box display={{ base: "none", md: "block" }} border='1px' py='50px' px='36px' w='362px' h='362px' borderColor='#F6106780'>
              <Image
                height='70px'
                src={atom.src}
                color='#FCFCFC'
              />
              <Text py='15px' color="#30233D" fontWeight='500' lineHeight='2.5rem' fontSize='1.688rem'>
                Produto 1
              </Text>
              <Text color="#30233D" fontWeight='400' lineHeight='1.625rem' fontSize='1rem'>
                Eget nulla facilisi etiam dignissim<br /> diam quis enim lobortis scelerisque.<br /> Eu feugiat pretium nibh ipsum<br /> consequat nisl vel pretium.
              </Text>
              <Box py='10px'>
                <Button bg='#3347CA' _hover={{ bg: "#F61067" }} color='#FFFFFF' borderRadius='36px' >COMPRAR</Button>
              </Box>
            </Box>

            <Box display={{ base: "none", md: "block" }} border='1px' py='50px' px='36px' w='362px' h='362px' borderColor='#F6106780'>
              <Image
                height='70px'
                src={atom.src}
                color='#FCFCFC'
              />
              <Text py='15px' color="#30233D" fontWeight='500' lineHeight='2.5rem' fontSize='1.688rem'>
                Produto 1
              </Text>
              <Text color="#30233D" fontWeight='400' lineHeight='1.625rem' fontSize='1rem'>
                Eget nulla facilisi etiam dignissim<br /> diam quis enim lobortis scelerisque.<br /> Eu feugiat pretium nibh ipsum<br /> consequat nisl vel pretium.
              </Text>
              <Box py='10px'>
                <Button bg='#3347CA' _hover={{ bg: "#F61067" }} color='#FFFFFF' borderRadius='36px' >COMPRAR</Button>
              </Box>
            </Box>

            <Box display={{ base: "none", md: "block" }} border='1px' py='50px' px='36px' w='362px' h='362px' borderColor='#F6106780'>
              <Image
                height='70px'
                src={atom.src}
                color='#FCFCFC'
              />
              <Text py='15px' color="#30233D" fontWeight='500' lineHeight='2.5rem' fontSize='1.688rem'>
                Produto 1
              </Text>
              <Text color="#30233D" fontWeight='400' lineHeight='1.625rem' fontSize='1rem'>
                Eget nulla facilisi etiam dignissim<br /> diam quis enim lobortis scelerisque.<br /> Eu feugiat pretium nibh ipsum<br /> consequat nisl vel pretium.
              </Text>
              <Box py='10px'>
                <Button bg='#3347CA' _hover={{ bg: "#F61067" }} color='#FFFFFF' borderRadius='36px' >COMPRAR</Button>
              </Box>
            </Box>
          </SimpleGrid>
        </Center>
      </Layout>
      <Doubt />
      <Footer />
    </Box>
  );
}
