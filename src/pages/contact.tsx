import React from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  SimpleGrid,
  Center,
  GridItem,
} from "@chakra-ui/react";
import { Header, Layout } from "~/components";
import { BsArrowRight, BsEnvelope, BsPhone } from "react-icons/bs";
import contactImage from "../../public/assets/contactImage.png"
import mapPin from "../../public/assets/mapPin.png"
import contactBackground from "../../public/assets/contactBackground.png"
import { Footer } from "~/components/footer";
import { Doubt } from "~/components/doubt";
import { ContactForm } from "~/components/contactForm";

export default function Contact() {
  return (
    <Box w="full">
      <Box
        backgroundImage={contactImage.src}
        backgroundPosition="center"
        backgroundSize='cover'
        backgroundRepeat="no-repeat"
      >
        <Header />
        <Layout>
          <Box
            w={{ base: "80%", lg: "70%", xl: "50%" }}
          >
            <Box w={"full"} h='300px'>
              <Text fontSize='3.375rem' color="#F61067">
                Contato
              </Text>
              <Text fontSize='1.125rem' color="#F4F4ED" fontWeight="800" py="2rem">
                LOREM IPSUM LOREM IPSUM
              </Text>
            </Box>
          </Box>
        </Layout>
      </Box>
      <Layout>
        <SimpleGrid columns={2} py={{ base: "20px", md: "0" }}>
          <GridItem colSpan={{ base: 2, md: 1 }} >
            <Box pt={{ base: '30px', md: '144px' }} pl={{ base: "0", md: '147px' }} >
              <Box w={{ base: "100%", md: '50%' }} >
                <Text fontSize='1.688rem' fontWeight='500'>
                  Construímos ótimos<br /> negócios
                </Text>
                <SimpleGrid columns={10} pt="55px">
                  <GridItem colSpan={3}  >
                    <Center>
                      <Image
                        w={{ base: "40%", md: "" }}
                        src={mapPin.src}
                      />
                    </Center>
                  </GridItem>
                  <GridItem colSpan={7} >
                    <Box>
                      <Text color="#30233D" fontWeight="800" fontSize='1.125rem' lineHeight="1.813rem" pb="24px">
                        LOREM IPSUM
                      </Text>
                      <Text color="#776C82" fontWeight="500" fontSize='1.125rem' lineHeight="1.813rem">
                        Rua Lexington Street<br />
                        Apt 688<br />
                        Balenario Camboriu
                      </Text>
                    </Box>
                  </GridItem>
                </SimpleGrid>
              </Box>
              <Box w={{ base: "100%", md: '50%' }}>
                <SimpleGrid columns={10} pt="40px">
                  <GridItem colSpan={3} >
                    <Center>
                      <BsEnvelope color="#F61067" size={25} />
                    </Center>
                  </GridItem>
                  <GridItem colSpan={7} >
                    <Box>
                      <Text position="absolute" color="#30233D" fontWeight="800" fontSize='1.125rem' lineHeight="1.813rem" pb="24px">
                        Lem.luizmacedo@gmail.com
                      </Text>
                    </Box>
                  </GridItem>
                  <GridItem colSpan={3} pt="25px">
                    <Center>
                      <BsPhone color="#F61067" size={25} />
                    </Center>
                  </GridItem>
                  <GridItem colSpan={7} pt="25px">
                    <Box>
                      <Text position="absolute" color="#30233D" fontWeight="800" fontSize='1.125rem' lineHeight="1.813rem" pb="24px">
                        +55 (47) 997552206
                      </Text>
                    </Box>
                  </GridItem>
                </SimpleGrid>
              </Box>
            </Box>
          </GridItem>
          <GridItem colSpan={{ base: 0, md: 1 }} >
            <Box display={{ base: "none", md: "block" }}>
              <Image
                right='0'
                zIndex={-1}
                position='absolute'
                src={contactBackground.src}
              />
            </Box>
          </GridItem>
        </SimpleGrid>
      </Layout>
      <ContactForm />
      <Footer />
    </Box>
  );
}