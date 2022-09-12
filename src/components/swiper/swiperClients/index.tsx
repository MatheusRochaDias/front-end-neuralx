import { Box, Image, TabPanels, TabPanel, ScaleFade, Collapse, SlideFade, Tabs, Slider, SliderThumb, SliderFilledTrack, SliderMark, SliderTrack, Flex, Slide, Center, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import Logo from "/public/assets/LogoHorizontal.png";


export default function SwiperClients() {
  const [currentClient, setCurrentClient] = useState(0)
  
  const buttonMinus = () => {
    setCurrentClient(currentClient - 1)
    { currentClient === 0 && setCurrentClient(3) }
  }

  
  const buttonPlus = () => {
    setCurrentClient(currentClient + 1)
    { currentClient === 2 && setCurrentClient(0) }
  }

  setTimeout(() => setCurrentClient(currentClient + 1), 30000)
  { currentClient === 2 && setCurrentClient(0) }
  return (
    <Box overflowX="hidden" paddingBottom="100px" display={{ base: "none", md: "block" }}>

      <Heading
        textAlign={"center"}
        color="#fff"
        w={{ base: "100%", lg: "40%" }}
        mx="auto"
        mb={{ base: "20px", lg: "50px" }}
        fontSize="2.813rem"
        fontWeight="500"
      >
        Nossos Parceiros
      </Heading>
      <Flex>
        <Center cursor="pointer" onClick={buttonMinus}>
          <BsArrowLeftCircle size={40} color="#FFF" />
        </Center>
        <Center w="100%" >
          {currentClient === 0 &&
            <SlideFade offsetX='100%' in={currentClient === 0} >
              <Center gap="40">
                <Box>
                  <Image
                    src={"https://wedev.software/wp-content/uploads/2021/06/logo-branco-1.svg"}
                    w="250px"
                    h="54px"
                    alt="Logo do WeDevSoftware"
                  />
                </Box>
                <Box>
                  <Image
                    src={"https://mellro.com/images/logo_color.png"}
                    w="250px"
                    h="54px"
                    alt="Logo Mellro"
                  />
                </Box>
              </Center>
            </SlideFade >
          }
          {currentClient === 1 &&
            <SlideFade offsetX='100%' in={currentClient === 1} >
              <Center gap="40">
                <Box>
                  <Image
                    src={"https://mlxyjcueu5ka.i.optimole.com/tRhEIvs-w3gX9CT1/w:568/h:122/q:auto/https://wedev.group/wp-content/uploads/2022/02/logo-wedev-group-normal.svg"}
                    w="250px"
                    h="54px"
                    alt="Logo WeDev Group"
                  />
                </Box>
                <Box>
                  <Image
                    src={"https://iholdbank.digital/wp-content/uploads/2021/07/Logo-iHold-Light.svg"}
                    w="250px"
                    h="54px"
                    alt="Logo IHold"
                  />
                </Box>
              </Center>
            </SlideFade >
          }
                </Center>
        <Center cursor="pointer">
          <BsArrowRightCircle size={40} color="#FFF" onClick={buttonPlus} />
        </Center>
      </Flex>
    </Box>
  );
}
