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
import peopleServicesPage from "../../../../public/assets/peopleServicesPage.png"
import graphServicePage from "../../../../public/assets/graphServicePage.png"
import backgroundPartServices from "../../../../public/assets/backgroundPartServices.png"
import Icon from "../../../../public/assets/Icon.png"
import atom from "../../../../public/assets/atom.png"
import balance from "../../../../public/assets/balance.png"
import brain from "../../../../public/assets/brain.png"
import { Footer } from "~/components/footer";
import { Doubt } from "~/components/doubt";

export default function Services() {
  return (
    <Box w="full">
      <Box
        id="saas"
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
              <Text fontSize={{ base: "30px", md: "2.813rem", lg: "65px" }}>
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
        <Box
          pt={{ base: "0", md: "3rem" }}
          w={{ base: "100%", xl: "85%" }}
          mx={{ base: "0", md: "20px" }}
        >
          <Text color="#F61067" fontWeight='800' letterSpacing='0.375rem' fontSize='0.75rem'>
            SERVIÇO          </Text>
          <Text color="#30233D" fontSize={{ base: "2rem", md: "2.813rem" }} >
            Software 1
          </Text>

          <Text my="20px" color="#30233D" fontSize={{ base: "1.1rem", md: "1.688rem" }}  >
            Apparently we had reached a great height in the<br /> atmosphere, for the sky was a dead black, and the stars<br />had ceased to twinkle.   </Text>
        </Box>
      </Layout>
      <Layout>
        <SimpleGrid columns={3} py={{ base: "40px", md: '60px' }} gap={{ base: 5, md: 0 }}>
          <Box>
            <Image
              height={{ base: "40px", md: '70px' }}
              src={atom.src}
            />
            <Text py='15px' color="#30233D" fontWeight='500' lineHeight='2.5rem' fontSize={{ base: "1.1rem", md: "1.688rem" }}>
              Lorem ipsum
            </Text>
            <Text color="#776C82" fontWeight='400' lineHeight={{ base: "1.2rem", md: '1.625rem' }} fontSize={{ base: "0.8rem", md: '1rem' }}>
              Eget nulla facilisi etiam dignissim diam quis<br /> enim lobortis scelerisque. Eu feugiat pretium<br /> nibh ipsum consequat nisl vel pretium.
            </Text>
          </Box>
          <Box>
            <Image
              height={{ base: "40px", md: '70px' }}
              src={balance.src}
            />
            <Text py='15px' color="#30233D" fontWeight='500' lineHeight='2.5rem' fontSize={{ base: "1.1rem", md: "1.688rem" }}>
              Lorem ipsum
            </Text>
            <Text color="#776C82" fontWeight='400' lineHeight={{ base: "1.2rem", md: '1.625rem' }} fontSize={{ base: "0.8rem", md: '1rem' }}>
              Eget nulla facilisi etiam dignissim diam quis<br /> enim lobortis scelerisque. Eu feugiat pretium<br /> nibh ipsum consequat nisl vel pretium.
            </Text>
          </Box>
          <Box>
            <Image
              height={{ base: "40px", md: '70px' }}
              src={brain.src}
            />
            <Text py='15px' color="#30233D" fontWeight='500' lineHeight='2.5rem' fontSize={{ base: "1.1rem", md: "1.688rem" }}>
              Lorem ipsum
            </Text>
            <Text color="#776C82" fontWeight='400' lineHeight={{ base: "1.2rem", md: '1.625rem' }} fontSize={{ base: "0.8rem", md: '1rem' }}>
              Eget nulla facilisi etiam dignissim diam quis<br /> enim lobortis scelerisque. Eu feugiat pretium<br /> nibh ipsum consequat nisl vel pretium.
            </Text>
          </Box>
        </SimpleGrid>
      </Layout>
      <Box bg='#FFFFFF' h='244px' py='70px' display={{ base: "none", md: "block" }} >
        <Flex>
          <Layout>
            <Box
              w={{ base: "100%", xl: "85%" }}
              mx={{ base: "0", md: "20px" }}>
            </Box>
          </Layout>
          <Image
            right='0'
            position='absolute'
            height='1146px'
            width='411px'
            src={peopleServicesPage.src}
          />
        </Flex>
      </Box>
      <Box bg='#5E239D' h='324px'  >
        <Layout>
          <Flex w={{ base: "100%", xl: "100%" }}
            mx={{ base: "0", md: "20px" }}
            h='324px'
          >
            <Center gap={{ base: 20, md: 128 }}>
              <Text color="#FCFCFC" fontWeight='500' fontSize={{ base: '1.4rem', md: '1.688rem' }}>
                Contábil
              </Text>

              <Text color="#FCFCFC" fontWeight='400' fontSize={{ base: '1rem', md: '1.125rem' }}>
                Id consectetur purus ut faucibus pulvinar <br />elementum integer enim. A arcu cursus<br /> vitae congue mauris rhoncus aenean.
              </Text>
            </Center>
          </Flex>
        </Layout>
      </Box>
      <Box bg='#30124E' h='324px'>
        <Layout>
          <Flex w={{ base: "100%", xl: "100%" }}
            mx={{ base: "0", md: "20px" }}
            h='324px'
          >
            <Center gap={{ base: 20, md: 128 }}>
              <Text color="#FCFCFC" fontWeight='500' fontSize={{ base: '1.4rem', md: '1.688rem' }}>
                Jurídico
              </Text>
              <Text color="#FCFCFC" fontWeight='400' fontSize={{ base: '1rem', md: '1.125rem' }}>
                Id consectetur purus ut faucibus pulvinar <br />elementum integer enim. A arcu cursus<br /> vitae congue mauris rhoncus aenean.
              </Text>
            </Center>
          </Flex>
        </Layout>
      </Box>
      <Box bg='#150433' h='324px'>
        <Layout>
          <Flex w={{ base: "100%", xl: "100%" }}
            mx={{ base: "0", md: "20px" }}
            h='324px'
          >
            <Center gap={{ base: 20, md: 128 }}>
              <Text color="#FCFCFC" fontWeight='500' fontSize={{ base: '1.4rem', md: '1.688rem' }}>
                Lorem ipsum
              </Text>
              <Text color="#FCFCFC" fontWeight='400' fontSize={{ base: '1rem', md: '1.125rem' }}>
                Id consectetur purus ut faucibus pulvinar <br />elementum integer enim. A arcu cursus<br /> vitae congue mauris rhoncus aenean.
              </Text>
            </Center>
          </Flex>
        </Layout>
      </Box>
      <Box backgroundImage={backgroundPartServices.src} backgroundColor='#5E239D' py={{base:"30px", md:"0"}}>
        <Center h={{ base: "100%", md: '730px' }}>
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={10}>
            <Box border='1px' py='50px' px='36px' borderColor='#FFFFFF33' _hover={{ bg: "#F61067" }} cursor='pointer'>
              <Image
                height='70px'
                src={Icon.src}
                color='#FCFCFC'
              />
              <Text py='15px' color="#FCFCFC" fontWeight='500' lineHeight='2.5rem' fontSize='1.688rem'>
                Lorem ipsum
              </Text>
              <Text color="#FCFCFC" fontWeight='400' lineHeight='1.625rem' fontSize='1rem'>
                Eget nulla facilisi etiam dignissim diam quis<br /> enim lobortis scelerisque. Eu feugiat pretium<br /> nibh ipsum consequat nisl vel pretium.
              </Text>
            </Box>
            <Box border='1px' py='50px' px='36px' borderColor='#FFFFFF33' _hover={{ bg: "#F61067" }} cursor='pointer'>
              <Image
                height='70px'
                src={Icon.src}
                color='#FCFCFC'
              />
              <Text py='15px' color="#FCFCFC" fontWeight='500' lineHeight='2.5rem' fontSize='1.688rem'>
                Lorem ipsum
              </Text>
              <Text color="#FCFCFC" fontWeight='400' lineHeight='1.625rem' fontSize='1rem'>
                Eget nulla facilisi etiam dignissim diam quis<br /> enim lobortis scelerisque. Eu feugiat pretium<br /> nibh ipsum consequat nisl vel pretium.
              </Text>
            </Box>
            <Box border='1px' py='50px' px='36px' borderColor='#FFFFFF33' _hover={{ bg: "#F61067" }} cursor='pointer'>
              <Image
                height='70px'
                src={Icon.src}
                color='#FCFCFC'
              />
              <Text py='15px' color="#FCFCFC" fontWeight='500' lineHeight='2.5rem' fontSize='1.688rem'>
                Lorem ipsum
              </Text>
              <Text color="#FCFCFC" fontWeight='400' lineHeight='1.625rem' fontSize='1rem'>
                Eget nulla facilisi etiam dignissim diam quis<br /> enim lobortis scelerisque. Eu feugiat pretium<br /> nibh ipsum consequat nisl vel pretium.
              </Text>
            </Box>
          </SimpleGrid>
        </Center>
      </Box>
      <Box bg='#5E239D' pt='60px'>
        <Text color="#F61067" textAlign='center' fontWeight='800' letterSpacing='0.375rem' fontSize='0.75rem'>
          LOREM IPSUMaa
        </Text>
        <Text color="#FFFFFF" textAlign='center' fontSize={{ base: "2rem", md: "2.813rem" }} py='12px'>
          Lorem ipsum dolor sit amet, conse<br />
          ctetur adipiscing elit
        </Text>
        <Layout>
          <Center py='50px'>
            <Image
              w={{base:"100%",md:'1152px'}}
              height={{base:"100%", md:'339px'}}
              src={graphServicePage.src}
            />
          </Center>
        </Layout>
        <Doubt />
        <Footer />
      </Box>
    </Box>
  );
}
