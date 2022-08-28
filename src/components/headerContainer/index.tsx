import { Box, Text } from "@chakra-ui/react";
import { Header } from "../header";
import { Layout } from "../layout";

interface headerContainerProps {
  id: string;
  firstText: string;
  secondText: string
}

export default function HeaderContainer({ id, firstText, secondText }: headerContainerProps) {
  return (
    <Box>
      <Box
        id={id}
        h={{ base: "350px", md: "400px", lg: "600px", xl: "600px" }}
        borderEndStartRadius={{ base: "100 px", sm: "200px", lg: "40%" }}
      >
        <Header />
        <Layout>
          <Box
            w={{ base: "80%", lg: "70%", xl: "50%" }}
          >
            <Box w={"full"}>
              <Text fontSize={{ base: "1.875rem", md: "2.8125rem", lg: "4rem" }}>
                <Text color={"#fff"}>
                  {firstText}
                  <span style={{ color: "#F61067" }}>
                    {secondText}
                  </span>
                </Text>
              </Text>
            </Box>
          </Box>
        </Layout>
      </Box>
    </Box>
  )
}