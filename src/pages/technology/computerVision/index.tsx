import React from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import { Header, Layout } from "~/components";
import { BsArrowRight } from "react-icons/bs";
import imgCarousel from "../../../../public/assets/imgCarousel.png"
import atom from "../../../../public/assets/atom.png"
import { Footer } from "~/components/footer";
import { Doubt } from "~/components/doubt";

export default function ComputerVision() {
  return (
    <Box w="full">
      <Box
        id="computerVision"
        h={{ base: "700px", md: "650px", lg: "800px", xl: "900px" }}
        borderEndStartRadius={{ base: "100px", sm: "200px", lg: "40%" }}
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
        <Box
          py={{base:"1rem", md:"3rem"}}
          w={{ base: "100%", xl: "85%" }}
          mx={{ base: "0", md: "20px" }}
        >
          <Text color="#F61067" fontWeight='800' letterSpacing='0.375rem' fontSize='0.75rem'>
            TECNOLOGIA
          </Text>
          <Text color="#30233D" fontSize={{ base: "2rem", md: "2.813rem" }} >
            Visão Computacional
          </Text>
          <Text my="20px" color="#30233D" fontSize={{base:"1rem", md:"1.688rem"}} >
            Apparently we had reached a great height in the<br /> atmosphere, for the sky was a dead black, and the stars<br />had ceased to twinkle.   </Text>
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
            Eget nunc scelerisque viverra mauris in aliquam. </Text>
          <Text
            fontSize='1rem'
            textAlign="right"
            fontWeight="400"
            color="#FCFCFC"
          >
            Magna sit amet purus gravida. Sit amet porttitor<br /> eget dolor morbi non.<br />
            Lectus vestibulum mattis ullamcorper velit sed<br /> ullamcorper.<br />
            Diam phasellus vestibulum lorem sed risus ultricies<br /> tristique nulla. Dui faucibus in ornare quam viverra.<br /><br />

          </Text>
        </Box>
      </Flex>
      <Flex display={{ base: "none", md: "flex" }} maxW="1400px" mx="auto" w={{ base: "100%", xl: "85%" }} h="full" pb='80px'>
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
                src={imgCarousel.src}
                width={{ base: "300px", lg: "410px", xl: "80%" }}
                h={{ base: "450px", lg: "100%" }}
                maxH="500px"
                minH={"500px"}
                alt="IA"
              />
            </Flex>
          </Flex>
        </Box>
        <Flex
          ml="80px"
          bg="#30124E"
          w="full"
          mb={{ base: "-100px", lg: "-100px", xl: "-100px" }}
          color="#fff"
          p={{ base: "50px 10px", md: "50px 20px", lg: "0" }}
          align="center"
        >
          <Box
            mt={{ base: "0", lg: "-100px" }}
            w={{ base: "full", xl: "75%" }}
            ml={{ base: "0", xl: "0" }}
            justifyContent='left'
          >
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
              Eget nunc scelerisque viverra mauris in aliquam.<br /> Dignissim sodales ut eu sem integer vitae. Libero <br />nunc consequat interdum varius.
            </Text>
            <Text
              fontSize='1rem'
              textAlign="right"
              fontWeight="400"
              color="#FCFCFC"
            >
              Magna sit amet purus gravida. Sit amet porttitor<br /> eget dolor morbi non.<br /><br />
              Lectus vestibulum mattis ullamcorper velit sed<br /> ullamcorper.<br /><br />
              Diam phasellus vestibulum lorem sed risus ultricies<br /> tristique nulla. Dui faucibus in ornare quam viverra.<br /><br />
              Posuere ac ut consequat semper viverra.
            </Text>
          </Box>
        </Flex>
      </Flex>
      <Layout>
        <Box
          pt="5rem"
          w={{ base: "100%", xl: "100%" }}
          mx={{ base: "0", md: "0px" }}
        >
          <Text color="#F61067" fontWeight='800' letterSpacing='0.375rem' fontSize='0.75rem'>
            LOREM IPSUM
          </Text>
          <Text color="#30233D" fontSize={{ base: "2rem", md: "2.813rem" }} >
            Benefícios
          </Text>
        </Box>
        <SimpleGrid columns={3} py={{ base: "40px", md: '60px' }} gap={{ base: 5, md: 50 }}>
          <Box>
            <Image
              height={{ base: "40px", md: '70px' }}
              src={atom.src}
            />
            <Text py='15px' color="#30233D" fontWeight='500' lineHeight='2.5rem' fontSize={{ base: "1.1rem", md: "1.688rem" }}>
              Webdesign
            </Text>
            <Text color="#776C82" fontWeight='400' lineHeight={{ base: "1.2rem", md: '1.625rem' }} fontSize={{ base: "0.8rem", md: '1rem' }}>
              Eget nulla facilisi etiam dignissim diam quis<br /> enim lobortis scelerisque. Eu feugiat pretium<br /> nibh ipsum consequat nisl vel pretium.
            </Text>
          </Box>

          <Box>
            <Image
              height={{ base: "40px", md: '70px' }}
              src={atom.src}
            />
            <Text py='15px' color="#30233D" fontWeight='500' lineHeight='2.5rem' fontSize={{ base: "1.1rem", md: "1.688rem" }}>
              Webdev
            </Text>
            <Text color="#776C82" fontWeight='400' lineHeight={{ base: "1.2rem", md: '1.625rem' }} fontSize={{ base: "0.8rem", md: '1rem' }}>
              Eget nulla facilisi etiam dignissim diam quis<br /> enim lobortis scelerisque. Eu feugiat pretium<br /> nibh ipsum consequat nisl vel pretium.
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

          <Box>
            <Image
              height={{ base: "40px", md: '70px' }}
              src={atom.src}
            />
            <Text py='15px' color="#30233D" fontWeight='500' lineHeight='2.5rem' fontSize={{ base: "1.1rem", md: "1.688rem" }}>
              Webdesign
            </Text>
            <Text color="#776C82" fontWeight='400' lineHeight={{ base: "1.2rem", md: '1.625rem' }} fontSize={{ base: "0.8rem", md: '1rem' }}>
              Eget nulla facilisi etiam dignissim diam quis<br /> enim lobortis scelerisque. Eu feugiat pretium<br /> nibh ipsum consequat nisl vel pretium.
            </Text>
          </Box>

          <Box>
            <Image
              height={{ base: "40px", md: '70px' }}
              src={atom.src}
            />
            <Text py='15px' color="#30233D" fontWeight='500' lineHeight='2.5rem' fontSize={{ base: "1.1rem", md: "1.688rem" }}>
              Webdev
            </Text>
            <Text color="#776C82" fontWeight='400' lineHeight={{ base: "1.2rem", md: '1.625rem' }} fontSize={{ base: "0.8rem", md: '1rem' }}>
              Eget nulla facilisi etiam dignissim diam quis<br /> enim lobortis scelerisque. Eu feugiat pretium<br /> nibh ipsum consequat nisl vel pretium.
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
      <Doubt />
      <Footer />
    </Box>
  );
}