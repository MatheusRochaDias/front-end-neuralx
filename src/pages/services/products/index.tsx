import React from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";
import { Layout } from "~/components";
import { Footer } from "~/components/footer";
import { Doubt } from "~/components/doubt";
import HeaderContainer from "~/components/headerContainer";
import Photo11 from "../../../../public/assets/Photo11.png"
import Photo12 from "../../../../public/assets/Photo12.png"

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
      <HeaderContainer id="products" firstText="Ganhe agilidade em " secondText="seus processos internos" />
      <Layout>
        <Flex
          w="full"
          justify={"space-between"}
          mt={{ base: "0", md: "50px" }}
          mb={{ base: "30", xl: "150px" }}
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
            <Text my="20px" color="#30233D" fontSize={"1.125rem"}>
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
                src={Photo11.src}
                width={{ base: "70%", lg: "full" }}
                h={{ base: "90%", lg: "80%" }}
                alt="IA"
              />
            </Box>
            <Flex
              justify={"center"}
              flexDir="column"
              align="center"
              h={{ base: "200px", sm: "300px", lg: "100%" }}
              ml={{
                base: "-125px",
                sm: "-215px",
                lg: "-35px",
                xl: "-70px",
              }}
              w={{ base: "", sm: "300px", xl: "45%" }}
            >
              <Image
                src={Photo12.src}
                width={{ base: "70%", lg: "100%" }}
                h={{ base: "90%", lg: "100%" }}
                alt="IA"
              />
            </Flex>
          </Flex>
        </Flex>
      </Layout>


      

      <Doubt />
      <Footer />
    </Box >
  );
}
