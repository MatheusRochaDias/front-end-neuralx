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
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import { Layout } from "~/components";
import { Footer } from "~/components/footer";
import { Doubt } from "~/components/doubt";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import HeaderContainer from "~/components/headerContainer";
import atom from "../../../public/assets/atom.png"
import graphMarketplace from "../../../public/assets/graphMarketplace.png"
import Ia from "../../../public/assets/IA.png"
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import Icon from "../../../public/assets/Icon.png"
import router from "next/router";


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
      <HeaderContainer id="marketplace" firstText="Ganhe agilidade em " secondText="seus processos internos" />
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
                <Button bg='#3347CA' _hover={{ bg: "#F61067" }} color='#FFFFFF' borderRadius='36px' onClick={() => router.push("../services/products")} >COMPRAR</Button>
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
                <Button bg='#3347CA' _hover={{ bg: "#F61067" }} color='#FFFFFF' borderRadius='36px' onClick={() => router.push("services/products")} >COMPRAR</Button>
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
                <Button bg='#3347CA' _hover={{ bg: "#F61067" }} color='#FFFFFF' borderRadius='36px' onClick={() => router.push("services/products")}>COMPRAR</Button>
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
                <Button bg='#3347CA' _hover={{ bg: "#F61067" }} color='#FFFFFF' borderRadius='36px' onClick={() => router.push("services/products")}>COMPRAR</Button>
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
                <Button bg='#3347CA' _hover={{ bg: "#F61067" }} color='#FFFFFF' borderRadius='36px' onClick={() => router.push("services/products")}>COMPRAR</Button>
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
                <Button bg='#3347CA' _hover={{ bg: "#F61067" }} color='#FFFFFF' borderRadius='36px' onClick={() => router.push("services/products")}>COMPRAR</Button>
              </Box>
            </Box>
          </SimpleGrid>
        </Center>
      </Layout>
      <Box
        backgroundColor='#5E239D'
        pt="1rem"
        w="100%">
        <Layout>
          <Box>
            <Text color="#FFFFFF" textAlign='center' fontSize={{ base: "2rem", md: "2.813rem" }} >
              Benefícios do RPA
            </Text>
          </Box>
          <Box>
            <Accordion allowMultiple >
              <AccordionItem border='none' py="10px" pt="50px">
                {({ isExpanded }) => (
                  <Box bg={isExpanded ? "#F61067" : "transparent"} borderRadius="10px">
                    <h2>
                      <AccordionButton >
                        <Image
                          height='70px'
                          src={Icon.src}
                          color='#FCFCFC'
                        />
                        <Center textAlign='left' >
                          <Text px="3rem" py='15px' color="#FCFCFC" fontWeight='500' lineHeight='2.5rem' fontSize={{ base: "1.1rem", md: "2rem" }}>
                            Escalabilidade
                          </Text>
                          {isExpanded ? (
                            <AiOutlineMinusCircle color="#FCFCFC" fontSize='1.688rem' />
                          ) : (
                            <AiOutlinePlusCircle color="#FCFCFC" fontSize='1.688rem' />
                          )}
                        </Center>
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Text color="#FCFCFC" fontWeight='400' lineHeight={{ base: "1.2rem", md: '1.625rem' }} w="80%" fontSize="1.4rem">
                        A automação de processos permite que sua empresa escale á níveis mais altos. O RPA é capaz de  aumentar a performance e seus resultados  em mais de 5x.
                      </Text>
                    </AccordionPanel>
                  </Box>
                )}
              </AccordionItem>
              <AccordionItem border='none' py="10px">
                {({ isExpanded }) => (
                  <Box bg={isExpanded ? "#F61067" : "transparent"} borderRadius="10px">
                    <h2>
                      <AccordionButton >
                        <Image
                          height='70px'
                          src={Icon.src}
                          color='#FCFCFC'
                        />
                        <Center textAlign='left' >
                          <Text px="3rem" py='15px' color="#FCFCFC" fontWeight='500' lineHeight='2.5rem' fontSize={{ base: "1.1rem", md: "2rem" }}>
                            Disponibilidade
                          </Text>
                          {isExpanded ? (
                            <AiOutlineMinusCircle color="#FCFCFC" fontSize='1.688rem' />
                          ) : (
                            <AiOutlinePlusCircle color="#FCFCFC" fontSize='1.688rem' />
                          )}
                        </Center>
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Text color="#FCFCFC" fontWeight='400' lineHeight={{ base: "1.2rem", md: '1.625rem' }} w="80%" fontSize="1.4rem">
                        O RPA fica disponível 24/7 , totalmente adaptável as suas necessidades e demandas de trabalho, nunca perdendo a performance e executando perfeitamente as tarefas que foi programado para executar.
                      </Text>
                    </AccordionPanel>
                  </Box>
                )}
              </AccordionItem>
              <AccordionItem border='none' py="10px">
                {({ isExpanded }) => (
                  <Box bg={isExpanded ? "#F61067" : "transparent"} borderRadius="10px">
                    <h2>
                      <AccordionButton >
                        <Image
                          height='70px'
                          src={Icon.src}
                          color='#FCFCFC'
                        />
                        <Center textAlign='left' >
                          <Text px="3rem" py='15px' color="#FCFCFC" fontWeight='500' lineHeight='2.5rem' fontSize={{ base: "1.1rem", md: "2rem" }}>
                            Foco no que realmente importa
                          </Text>
                          {isExpanded ? (
                            <AiOutlineMinusCircle color="#FCFCFC" fontSize='1.688rem' />
                          ) : (
                            <AiOutlinePlusCircle color="#FCFCFC" fontSize='1.688rem' />
                          )}
                        </Center>
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Text color="#FCFCFC" fontWeight='400' lineHeight={{ base: "1.2rem", md: '1.625rem' }} w="80%" fontSize="1.4rem">
                        Processos muito repetitivos levam a erros operacionais com maior facilidade. O RPA é capaz de reduzir esses erros a zero, melhorando a performance dos seus processos e permitindo que seus colaboradores se ocupem com tarefas mais importantes e estratégicas para impulsionar o seu negócio.
                      </Text>
                    </AccordionPanel>
                  </Box>
                )}
              </AccordionItem>
              <AccordionItem border='none' py="10px">
                {({ isExpanded }) => (
                  <Box bg={isExpanded ? "#F61067" : "transparent"} borderRadius="10px">
                    <h2>
                      <AccordionButton >
                        <Image
                          height='70px'
                          src={Icon.src}
                          color='#FCFCFC'
                        />
                        <Center textAlign='left' >
                          <Text px="3rem" py='15px' color="#FCFCFC" fontWeight='500' lineHeight='2.5rem' fontSize={{ base: "1.1rem", md: "2rem" }}>
                            Redução de custos vs Aumento de receita
                          </Text>
                          {isExpanded ? (
                            <AiOutlineMinusCircle color="#FCFCFC" fontSize='1.688rem' />
                          ) : (
                            <AiOutlinePlusCircle color="#FCFCFC" fontSize='1.688rem' />
                          )}
                        </Center>
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Text color="#FCFCFC" fontWeight='400' lineHeight={{ base: "1.2rem", md: '1.625rem' }} w="80%" fontSize="1.4rem">
                        Por ser tratar de um processo automatizado, o RPA consegue executar suas tarefas de forma perfeita, sem perder a qualidade e além de tudo com uma velocidade e uma acurácia muito maior do que um ser humano é capaz de executar, podendo reduzir os custos operacionais da sua empresa e consequentemente dar muito mais escala nos processos de trabalho gerando assim um aumento significativo de receita.
                      </Text>
                    </AccordionPanel>
                  </Box>
                )}
              </AccordionItem>
              <AccordionItem border='none' pt="10px" pb="40px">
                {({ isExpanded }) => (
                  <Box bg={isExpanded ? "#F61067" : "transparent"} borderRadius="10px">
                    <h2>
                      <AccordionButton >
                        <Image
                          height='70px'
                          src={Icon.src}
                          color='#FCFCFC'
                        />
                        <Center textAlign='left' >
                          <Text px="3rem" py='15px' color="#FCFCFC" fontWeight='500' lineHeight='2.5rem' fontSize={{ base: "1.1rem", md: "2rem" }}>
                            Customização
                          </Text>
                          {isExpanded ? (
                            <AiOutlineMinusCircle color="#FCFCFC" fontSize='1.688rem' />
                          ) : (
                            <AiOutlinePlusCircle color="#FCFCFC" fontSize='1.688rem' />
                          )}
                        </Center>
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Text color="#FCFCFC" fontWeight='400' lineHeight={{ base: "1.2rem", md: '1.625rem' }} w="80%" fontSize="1.4rem">
                        O RPA é totalmente customizável as suas necessidades e totalmente integrável a qualquer setor da sua empresa, permitindo levar a automatização para qualquer fluxo de trabalho, inclusive fluxos que utilizam softwares de terceiros.
                      </Text>
                    </AccordionPanel>
                  </Box>
                )}
              </AccordionItem>
            </Accordion>
          </Box>
        </Layout>
      </Box>
      {/* <Layout>
        <SimpleGrid columns={{ base: 2, md: 3 }} py={{ base: "40px", md: '60px' }} gap={{ base: 5, md: 55 }}>
          <Box>
            <Image
              height={{ base: "40px", md: '70px' }}
              src={atom.src}
            />
            <Text py='15px' color="#30233D" fontWeight='500' lineHeight='2.5rem' fontSize={{ base: "1.1rem", md: "1.688rem" }}>
              Escalabilidade
            </Text>
            <Text color="#776C82" fontWeight='400' lineHeight={{ base: "1.2rem", md: '1.625rem' }} fontSize={{ base: "0.8rem", md: '1rem' }}>
              A automação de processos permite que sua empresa escale á níveis mais altos. O RPA é capaz de  aumentar a performance e seus resultados  em mais de 5x.

            </Text>
          </Box>

          <Box>
            <Image
              height={{ base: "40px", md: '70px' }}
              src={atom.src}
            />
            <Text py='15px' color="#30233D" fontWeight='500' lineHeight='2.5rem' fontSize={{ base: "1.1rem", md: "1.688rem" }}>
              Disponibilidade
            </Text>
            <Text color="#776C82" fontWeight='400' lineHeight={{ base: "1.2rem", md: '1.625rem' }} fontSize={{ base: "0.8rem", md: '1rem' }}>
              O RPA fica disponível 24/7 , totalmente adaptável as suas necessidades e demandas de trabalho, nunca perdendo a performance e executando perfeitamente as tarefas que foi programado para executar.
            </Text>
          </Box>

          <Box>
            <Image
              height={{ base: "40px", md: '70px' }}
              src={atom.src}
            />
            <Text py='15px' color="#30233D" fontWeight='500' lineHeight='2.5rem' fontSize={{ base: "1.1rem", md: "1.688rem" }}>
              Foco no que realmente importa
            </Text>
            <Text color="#776C82" fontWeight='400' lineHeight={{ base: "1.2rem", md: '1.625rem' }} fontSize={{ base: "0.8rem", md: '1rem' }}>
              Processos muito repetitivos levam a erros operacionais com maior facilidade. O RPA é capaz de reduzir esses erros a zero, melhorando a performance dos seus processos e permitindo que seus colaboradores se ocupem com tarefas mais importantes e estratégicas para impulsionar o seu negócio.
            </Text>
          </Box>
        </SimpleGrid>
        <SimpleGrid columns={{ base: 2, md: 2 }} py={{ base: "40px", md: '60px' }} gap={{ base: 5, md: 55 }}>
          <Box>
            <Image
              height={{ base: "40px", md: '70px' }}
              src={atom.src}
            />
            <Text py='15px' color="#30233D" fontWeight='500' lineHeight='2.5rem' fontSize={{ base: "1.1rem", md: "1.688rem" }}>
              Redução de custos vs Aumento de receita
            </Text>
            <Text color="#776C82" fontWeight='400' lineHeight={{ base: "1.2rem", md: '1.625rem' }} fontSize={{ base: "0.8rem", md: '1rem' }}>
              Por ser tratar de um processo automatizado, o RPA consegue executar suas tarefas de forma perfeita, sem perder a qualidade e além de tudo com uma velocidade e uma acurácia muito maior do que um ser humano é capaz de executar, podendo reduzir os custos operacionais da sua empresa e consequentemente dar muito mais escala nos processos de trabalho gerando assim um aumento significativo de receita.
            </Text>
          </Box>

          <Box>
            <Image
              height={{ base: "40px", md: '70px' }}
              src={atom.src}
            />
            <Text py='15px' color="#30233D" fontWeight='500' lineHeight='2.5rem' fontSize={{ base: "1.1rem", md: "1.688rem" }}>
              Customização
            </Text>
            <Text color="#776C82" fontWeight='400' lineHeight={{ base: "1.2rem", md: '1.625rem' }} fontSize={{ base: "0.8rem", md: '1rem' }}>
              O RPA é totalmente customizável as suas necessidades e totalmente integrável a qualquer setor da sua empresa, permitindo levar a automatização para qualquer fluxo de trabalho, inclusive fluxos que utilizam softwares de terceiros.
            </Text>
          </Box>
        </SimpleGrid>
      </Layout> */}


      <Box display={{ base: 'none', md: 'block' }} pt="20px">
        <Text textAlign='center' color="#150433" fontSize={{ base: "2rem", md: "2.813rem" }} mb='100px'>
          Robôs capacitados a trabalhar com milhares de aplicações.
        </Text>
        <Box id='globalBox1'>
          <Flex id='globalBox2'>
            <Box id='globalBox3'>
              <Box id='globalBox4'>
                <Box id='boxA5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxA8'>
                        <Box id='boxA9'>
                          <Image
                            src='https://ssl.gstatic.com/images/branding/product/2x/hh_drive_36dp.png'
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxB8'>
                        <Box id='boxB9'>
                          <Image
                            src='https://cfl.dropboxstatic.com/static/images/favicon-vfl8lUR9B.ico'
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxC8'>
                        <Box id='boxC9'>
                          <Image
                            src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Icon_OneDrive_36x36_2x?wid=36&hei=36"
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxD8'>
                        <Box id='boxD9'>
                          <Image
                            src="https://www.philips.com.br/c-etc/philips/clientlibs/foundation-base/clientlibs-css/img/favicon/favicon-192x192.png"
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxE8'>
                        <Box id='boxE9'>
                          <Image
                            src="https://uploads-ssl.webflow.com/5fda3633a6028b353a58c9e5/60774e58665a53b51939e6a8_favicon-32x32.png"
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='boxA5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxA8'>
                        <Box id='boxA9'>
                          <Image
                            src='https://ssl.gstatic.com/images/branding/product/2x/hh_drive_36dp.png'
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxB8'>
                        <Box id='boxB9'>
                          <Image
                            src='https://cfl.dropboxstatic.com/static/images/favicon-vfl8lUR9B.ico'
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxC8'>
                        <Box id='boxC9'>
                          <Image
                            src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Icon_OneDrive_36x36_2x?wid=36&hei=36"
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxD8'>
                        <Box id='boxD9'>
                          <Image
                            src="https://www.philips.com.br/c-etc/philips/clientlibs/foundation-base/clientlibs-css/img/favicon/favicon-192x192.png"
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxE8'>
                        <Box id='boxE9'>
                          <Image
                            src="https://uploads-ssl.webflow.com/5fda3633a6028b353a58c9e5/60774e58665a53b51939e6a8_favicon-32x32.png"
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='boxA5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxA8'>
                        <Box id='boxA9'>
                          <Image
                            src='https://ssl.gstatic.com/images/branding/product/2x/hh_drive_36dp.png'
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxB8'>
                        <Box id='boxB9'>
                          <Image
                            src='https://cfl.dropboxstatic.com/static/images/favicon-vfl8lUR9B.ico'
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxC8'>
                        <Box id='boxC9'>
                          <Image
                            src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Icon_OneDrive_36x36_2x?wid=36&hei=36"
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxD8'>
                        <Box id='boxD9'>
                          <Image
                            src="https://www.philips.com.br/c-etc/philips/clientlibs/foundation-base/clientlibs-css/img/favicon/favicon-192x192.png"
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxE8'>
                        <Box id='boxE9'>
                          <Image
                            src="https://uploads-ssl.webflow.com/5fda3633a6028b353a58c9e5/60774e58665a53b51939e6a8_favicon-32x32.png"
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>


              <Box id='globalBox4'>
                <Box id='boxA5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxA8'>
                        <Box id='boxA9'>
                          <Image
                            src='https://ssl.gstatic.com/images/branding/product/2x/hh_drive_36dp.png'
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxB8'>
                        <Box id='boxB9'>
                          <Image
                            src='https://cfl.dropboxstatic.com/static/images/favicon-vfl8lUR9B.ico'
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxC8'>
                        <Box id='boxC9'>
                          <Image
                            src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Icon_OneDrive_36x36_2x?wid=36&hei=36"
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxD8'>
                        <Box id='boxD9'>
                          <Image
                            src="https://www.philips.com.br/c-etc/philips/clientlibs/foundation-base/clientlibs-css/img/favicon/favicon-192x192.png"
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxE8'>
                        <Box id='boxE9'>
                          <Image
                            src="https://uploads-ssl.webflow.com/5fda3633a6028b353a58c9e5/60774e58665a53b51939e6a8_favicon-32x32.png"
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='boxA5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxA8'>
                        <Box id='boxA9'>
                          <Image
                            src='https://ssl.gstatic.com/images/branding/product/2x/hh_drive_36dp.png'
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxB8'>
                        <Box id='boxB9'>
                          <Image
                            src='https://cfl.dropboxstatic.com/static/images/favicon-vfl8lUR9B.ico'
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxC8'>
                        <Box id='boxC9'>
                          <Image
                            src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Icon_OneDrive_36x36_2x?wid=36&hei=36"
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxD8'>
                        <Box id='boxD9'>
                          <Image
                            src="https://www.philips.com.br/c-etc/philips/clientlibs/foundation-base/clientlibs-css/img/favicon/favicon-192x192.png"
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxE8'>
                        <Box id='boxE9'>
                          <Image
                            src="https://uploads-ssl.webflow.com/5fda3633a6028b353a58c9e5/60774e58665a53b51939e6a8_favicon-32x32.png"
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='boxA5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxA8'>
                        <Box id='boxA9'>
                          <Image
                            src='https://ssl.gstatic.com/images/branding/product/2x/hh_drive_36dp.png'
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxB8'>
                        <Box id='boxB9'>
                          <Image
                            src='https://cfl.dropboxstatic.com/static/images/favicon-vfl8lUR9B.ico'
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxC8'>
                        <Box id='boxC9'>
                          <Image
                            src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Icon_OneDrive_36x36_2x?wid=36&hei=36"
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxD8'>
                        <Box id='boxD9'>
                          <Image
                            src="https://www.philips.com.br/c-etc/philips/clientlibs/foundation-base/clientlibs-css/img/favicon/favicon-192x192.png"
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxE8'>
                        <Box id='boxE9'>
                          <Image
                            src="https://uploads-ssl.webflow.com/5fda3633a6028b353a58c9e5/60774e58665a53b51939e6a8_favicon-32x32.png"
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='boxA5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxA8'>
                        <Box id='boxA9'>
                          <Image
                            src='https://ssl.gstatic.com/images/branding/product/2x/hh_drive_36dp.png'
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxB8'>
                        <Box id='boxB9'>
                          <Image
                            src='https://cfl.dropboxstatic.com/static/images/favicon-vfl8lUR9B.ico'
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxC8'>
                        <Box id='boxC9'>
                          <Image
                            src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Icon_OneDrive_36x36_2x?wid=36&hei=36"
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxD8'>
                        <Box id='boxD9'>
                          <Image
                            src="https://www.philips.com.br/c-etc/philips/clientlibs/foundation-base/clientlibs-css/img/favicon/favicon-192x192.png"
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>




            </Box>
            <Box id='globalBox3'>

              <Box id='globalBox4'>
                <Box id='boxA5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxA8'>
                        <Box id='boxA9'>
                          <Image
                            src='https://ssl.gstatic.com/images/branding/product/2x/hh_drive_36dp.png'
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxB8'>
                        <Box id='boxB9'>
                          <Image
                            src='https://cfl.dropboxstatic.com/static/images/favicon-vfl8lUR9B.ico'
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxC8'>
                        <Box id='boxC9'>
                          <Image
                            src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Icon_OneDrive_36x36_2x?wid=36&hei=36"
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxD8'>
                        <Box id='boxD9'>
                          <Image
                            src="https://www.philips.com.br/c-etc/philips/clientlibs/foundation-base/clientlibs-css/img/favicon/favicon-192x192.png"
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxE8'>
                        <Box id='boxE9'>
                          <Image
                            src="https://uploads-ssl.webflow.com/5fda3633a6028b353a58c9e5/60774e58665a53b51939e6a8_favicon-32x32.png"
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='boxA5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxA8'>
                        <Box id='boxA9'>
                          <Image
                            src='https://ssl.gstatic.com/images/branding/product/2x/hh_drive_36dp.png'
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxB8'>
                        <Box id='boxB9'>
                          <Image
                            src='https://cfl.dropboxstatic.com/static/images/favicon-vfl8lUR9B.ico'
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxC8'>
                        <Box id='boxC9'>
                          <Image
                            src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Icon_OneDrive_36x36_2x?wid=36&hei=36"
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxD8'>
                        <Box id='boxD9'>
                          <Image
                            src="https://www.philips.com.br/c-etc/philips/clientlibs/foundation-base/clientlibs-css/img/favicon/favicon-192x192.png"
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxE8'>
                        <Box id='boxE9'>
                          <Image
                            src="https://uploads-ssl.webflow.com/5fda3633a6028b353a58c9e5/60774e58665a53b51939e6a8_favicon-32x32.png"
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='boxA5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxA8'>
                        <Box id='boxA9'>
                          <Image
                            src='https://ssl.gstatic.com/images/branding/product/2x/hh_drive_36dp.png'
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxB8'>
                        <Box id='boxB9'>
                          <Image
                            src='https://cfl.dropboxstatic.com/static/images/favicon-vfl8lUR9B.ico'
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxC8'>
                        <Box id='boxC9'>
                          <Image
                            src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Icon_OneDrive_36x36_2x?wid=36&hei=36"
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxD8'>
                        <Box id='boxD9'>
                          <Image
                            src="https://www.philips.com.br/c-etc/philips/clientlibs/foundation-base/clientlibs-css/img/favicon/favicon-192x192.png"
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxE8'>
                        <Box id='boxE9'>
                          <Image
                            src="https://uploads-ssl.webflow.com/5fda3633a6028b353a58c9e5/60774e58665a53b51939e6a8_favicon-32x32.png"
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>


              <Box id='globalBox4'>
                <Box id='boxA5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxA8'>
                        <Box id='boxA9'>
                          <Image
                            src='https://ssl.gstatic.com/images/branding/product/2x/hh_drive_36dp.png'
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxB8'>
                        <Box id='boxB9'>
                          <Image
                            src='https://cfl.dropboxstatic.com/static/images/favicon-vfl8lUR9B.ico'
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxC8'>
                        <Box id='boxC9'>
                          <Image
                            src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Icon_OneDrive_36x36_2x?wid=36&hei=36"
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxD8'>
                        <Box id='boxD9'>
                          <Image
                            src="https://www.philips.com.br/c-etc/philips/clientlibs/foundation-base/clientlibs-css/img/favicon/favicon-192x192.png"
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxE8'>
                        <Box id='boxE9'>
                          <Image
                            src="https://uploads-ssl.webflow.com/5fda3633a6028b353a58c9e5/60774e58665a53b51939e6a8_favicon-32x32.png"
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='boxA5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxA8'>
                        <Box id='boxA9'>
                          <Image
                            src='https://ssl.gstatic.com/images/branding/product/2x/hh_drive_36dp.png'
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxB8'>
                        <Box id='boxB9'>
                          <Image
                            src='https://cfl.dropboxstatic.com/static/images/favicon-vfl8lUR9B.ico'
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxC8'>
                        <Box id='boxC9'>
                          <Image
                            src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Icon_OneDrive_36x36_2x?wid=36&hei=36"
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxD8'>
                        <Box id='boxD9'>
                          <Image
                            src="https://www.philips.com.br/c-etc/philips/clientlibs/foundation-base/clientlibs-css/img/favicon/favicon-192x192.png"
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxE8'>
                        <Box id='boxE9'>
                          <Image
                            src="https://uploads-ssl.webflow.com/5fda3633a6028b353a58c9e5/60774e58665a53b51939e6a8_favicon-32x32.png"
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='boxA5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxA8'>
                        <Box id='boxA9'>
                          <Image
                            src='https://ssl.gstatic.com/images/branding/product/2x/hh_drive_36dp.png'
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxB8'>
                        <Box id='boxB9'>
                          <Image
                            src='https://cfl.dropboxstatic.com/static/images/favicon-vfl8lUR9B.ico'
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxC8'>
                        <Box id='boxC9'>
                          <Image
                            src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Icon_OneDrive_36x36_2x?wid=36&hei=36"
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxD8'>
                        <Box id='boxD9'>
                          <Image
                            src="https://www.philips.com.br/c-etc/philips/clientlibs/foundation-base/clientlibs-css/img/favicon/favicon-192x192.png"
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxE8'>
                        <Box id='boxE9'>
                          <Image
                            src="https://uploads-ssl.webflow.com/5fda3633a6028b353a58c9e5/60774e58665a53b51939e6a8_favicon-32x32.png"
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='boxA5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxA8'>
                        <Box id='boxA9'>
                          <Image
                            src='https://ssl.gstatic.com/images/branding/product/2x/hh_drive_36dp.png'
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxB8'>
                        <Box id='boxB9'>
                          <Image
                            src='https://cfl.dropboxstatic.com/static/images/favicon-vfl8lUR9B.ico'
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxC8'>
                        <Box id='boxC9'>
                          <Image
                            src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Icon_OneDrive_36x36_2x?wid=36&hei=36"
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxD8'>
                        <Box id='boxD9'>
                          <Image
                            src="https://www.philips.com.br/c-etc/philips/clientlibs/foundation-base/clientlibs-css/img/favicon/favicon-192x192.png"
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>




            </Box>
            <Box id='globalBox3'>

              <Box id='globalBox4'>
                <Box id='boxA5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxA8'>
                        <Box id='boxA9'>
                          <Image
                            src='https://ssl.gstatic.com/images/branding/product/2x/hh_drive_36dp.png'
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxB8'>
                        <Box id='boxB9'>
                          <Image
                            src='https://cfl.dropboxstatic.com/static/images/favicon-vfl8lUR9B.ico'
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxC8'>
                        <Box id='boxC9'>
                          <Image
                            src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Icon_OneDrive_36x36_2x?wid=36&hei=36"
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxD8'>
                        <Box id='boxD9'>
                          <Image
                            src="https://www.philips.com.br/c-etc/philips/clientlibs/foundation-base/clientlibs-css/img/favicon/favicon-192x192.png"
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxE8'>
                        <Box id='boxE9'>
                          <Image
                            src="https://uploads-ssl.webflow.com/5fda3633a6028b353a58c9e5/60774e58665a53b51939e6a8_favicon-32x32.png"
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='boxA5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxA8'>
                        <Box id='boxA9'>
                          <Image
                            src='https://ssl.gstatic.com/images/branding/product/2x/hh_drive_36dp.png'
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxB8'>
                        <Box id='boxB9'>
                          <Image
                            src='https://cfl.dropboxstatic.com/static/images/favicon-vfl8lUR9B.ico'
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxC8'>
                        <Box id='boxC9'>
                          <Image
                            src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Icon_OneDrive_36x36_2x?wid=36&hei=36"
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxD8'>
                        <Box id='boxD9'>
                          <Image
                            src="https://www.philips.com.br/c-etc/philips/clientlibs/foundation-base/clientlibs-css/img/favicon/favicon-192x192.png"
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxE8'>
                        <Box id='boxE9'>
                          <Image
                            src="https://uploads-ssl.webflow.com/5fda3633a6028b353a58c9e5/60774e58665a53b51939e6a8_favicon-32x32.png"
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='boxA5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxA8'>
                        <Box id='boxA9'>
                          <Image
                            src='https://ssl.gstatic.com/images/branding/product/2x/hh_drive_36dp.png'
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxB8'>
                        <Box id='boxB9'>
                          <Image
                            src='https://cfl.dropboxstatic.com/static/images/favicon-vfl8lUR9B.ico'
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxC8'>
                        <Box id='boxC9'>
                          <Image
                            src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Icon_OneDrive_36x36_2x?wid=36&hei=36"
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxD8'>
                        <Box id='boxD9'>
                          <Image
                            src="https://www.philips.com.br/c-etc/philips/clientlibs/foundation-base/clientlibs-css/img/favicon/favicon-192x192.png"
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxE8'>
                        <Box id='boxE9'>
                          <Image
                            src="https://uploads-ssl.webflow.com/5fda3633a6028b353a58c9e5/60774e58665a53b51939e6a8_favicon-32x32.png"
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>


              <Box id='globalBox4'>
                <Box id='boxA5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxA8'>
                        <Box id='boxA9'>
                          <Image
                            src='https://ssl.gstatic.com/images/branding/product/2x/hh_drive_36dp.png'
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxB8'>
                        <Box id='boxB9'>
                          <Image
                            src='https://cfl.dropboxstatic.com/static/images/favicon-vfl8lUR9B.ico'
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxC8'>
                        <Box id='boxC9'>
                          <Image
                            src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Icon_OneDrive_36x36_2x?wid=36&hei=36"
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxD8'>
                        <Box id='boxD9'>
                          <Image
                            src="https://www.philips.com.br/c-etc/philips/clientlibs/foundation-base/clientlibs-css/img/favicon/favicon-192x192.png"
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxE8'>
                        <Box id='boxE9'>
                          <Image
                            src="https://uploads-ssl.webflow.com/5fda3633a6028b353a58c9e5/60774e58665a53b51939e6a8_favicon-32x32.png"
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='boxA5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxA8'>
                        <Box id='boxA9'>
                          <Image
                            src='https://ssl.gstatic.com/images/branding/product/2x/hh_drive_36dp.png'
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxB8'>
                        <Box id='boxB9'>
                          <Image
                            src='https://cfl.dropboxstatic.com/static/images/favicon-vfl8lUR9B.ico'
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxC8'>
                        <Box id='boxC9'>
                          <Image
                            src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Icon_OneDrive_36x36_2x?wid=36&hei=36"
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxD8'>
                        <Box id='boxD9'>
                          <Image
                            src="https://www.philips.com.br/c-etc/philips/clientlibs/foundation-base/clientlibs-css/img/favicon/favicon-192x192.png"
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxE8'>
                        <Box id='boxE9'>
                          <Image
                            src="https://uploads-ssl.webflow.com/5fda3633a6028b353a58c9e5/60774e58665a53b51939e6a8_favicon-32x32.png"
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='boxA5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxA8'>
                        <Box id='boxA9'>
                          <Image
                            src='https://ssl.gstatic.com/images/branding/product/2x/hh_drive_36dp.png'
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxB8'>
                        <Box id='boxB9'>
                          <Image
                            src='https://cfl.dropboxstatic.com/static/images/favicon-vfl8lUR9B.ico'
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxC8'>
                        <Box id='boxC9'>
                          <Image
                            src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Icon_OneDrive_36x36_2x?wid=36&hei=36"
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxD8'>
                        <Box id='boxD9'>
                          <Image
                            src="https://www.philips.com.br/c-etc/philips/clientlibs/foundation-base/clientlibs-css/img/favicon/favicon-192x192.png"
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxE8'>
                        <Box id='boxE9'>
                          <Image
                            src="https://uploads-ssl.webflow.com/5fda3633a6028b353a58c9e5/60774e58665a53b51939e6a8_favicon-32x32.png"
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='boxA5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxA8'>
                        <Box id='boxA9'>
                          <Image
                            src='https://ssl.gstatic.com/images/branding/product/2x/hh_drive_36dp.png'
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxB8'>
                        <Box id='boxB9'>
                          <Image
                            src='https://cfl.dropboxstatic.com/static/images/favicon-vfl8lUR9B.ico'
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxC8'>
                        <Box id='boxC9'>
                          <Image
                            src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Icon_OneDrive_36x36_2x?wid=36&hei=36"
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box id='globalBox4'>
                <Box id='globalBox5'>
                  <Box id='globalBox6'>
                    <Box id='globalBox7'>
                      <Box id='boxD8'>
                        <Box id='boxD9'>
                          <Image
                            src="https://www.philips.com.br/c-etc/philips/clientlibs/foundation-base/clientlibs-css/img/favicon/favicon-192x192.png"
                            alt="Carousel de imagens"
                            id="globalBox10"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

            </Box>
          </Flex>
        </Box>
      </Box>
      <Doubt />
      <Footer />
    </Box >
  );
}
