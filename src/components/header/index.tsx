import React from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Router from "next/router";
import Link from "next/link";
import Logo from "/public/assets/LogoHorizontal.png";
import router from "next/router";

export function Header() {
  const asPath = Router.asPath;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);
  const routesPath = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Quem somos",
      path: "/about",
    },
    {
      title: "Serviços",
      path: "/services",
    },
    {
      title: "Tecnologia",
      path: "/technology",
    },
    {
      title: "Contato",
      path: "/contact",
    },
  ];
  return (
    <Flex
      // w="full"
      justify={"space-between"}
      align="center"
      maxW="1400px"
      mx="auto"
      w={{ base: "95%", md: "90%", lg: "85%" }}
      zIndex='2'
      py="30px"
    // pos={"fixed"}
    // // top="0px"
    // right={0}
    // left={0}
    // zIndex={1500}
    // bg={scrollY > 0 ? "#150433a0" : "transparent"}
    >
      <Box>
        <Image
          src={Logo.src}
          w={{ base: "125px", md: "250px", xl: "250px" }}
          h={{ base: "27px", md: "54px", xl: "54px" }}
          alt="Logo do neuralX"
        />
      </Box>
      <Flex
        display={{ base: "none", lg: "flex" }}
        color={"#fff"}
        justify="space-between"
        align={"center"}
        maxW="500px"
        w="full"
      >
        {routesPath.map((item, i) => (
          <>{
            <>
              {item.title === 'Tecnologia' ?
                <>
                  <Box h="50px">
                    <Menu  >
                      <MenuButton >
                        <Text mb="5px" cursor={"pointer"}>
                          {item.title}
                        </Text>
                      </MenuButton>
                      <MenuList background={"#ffffff99"} >
                        <MenuItem color='#000000' onClick={() => router.push('/technology/big-data')}>Big Data</MenuItem>
                        <MenuItem color='#000000' onClick={() => router.push('/technology/computer-vision')}>Visão Computacional</MenuItem>
                        <MenuItem color='#000000' onClick={() => router.push('/technology/conversational-interface')}>Interface Conversacionais</MenuItem>
                        <MenuItem color='#000000' onClick={() => router.push('/technology/rpa')}>RPA</MenuItem>
                      </MenuList>
                      {item.path === asPath && (
                        <Box
                          w={item.path === "/" && asPath ? "80%" : "50%"}
                          mx={item.path === "/" && asPath ? "auto" : ""}
                          h="1px"
                          bg="#fff"
                        />
                      )}
                    </Menu>
                  </Box>
                </> : <>
                  {item.title === 'Serviços' ?
                    <>
                      <Box h="50px">
                        <Menu  >
                          <MenuButton >
                            <Text mb="5px" cursor={"pointer"}>
                              {item.title}
                            </Text>
                          </MenuButton>
                          <MenuList background={"#ffffff99"} >
                            <MenuItem color='#000000' onClick={() => router.push('/services/robotic-as-a-service')}>Robotic as a service</MenuItem>
                            <MenuItem color='#000000' onClick={() => router.push('/services/neural-analytics')}>Neural analytics</MenuItem>
                          </MenuList>
                          {item.path === asPath && (
                            <Box
                              w={item.path === "/" && asPath ? "80%" : "50%"}
                              mx={item.path === "/" && asPath ? "auto" : ""}
                              h="1px"
                              bg="#fff"
                            />
                          )}
                        </Menu>
                      </Box>
                    </> :
                    <>
                      <Link href={item.path} key={i}>
                        <Box h="50px">
                          <Text mb="5px" cursor={"pointer"}>
                            {item.title}
                          </Text>
                          {item.path === asPath && (
                            <Box
                              w={item.path === "/" && asPath ? "80%" : "50%"}
                              mx={item.path === "/" && asPath ? "auto" : ""}
                              h="1px"
                              bg="#fff"
                            />
                          )}
                        </Box>
                      </Link>
                    </>
                  }</>}

            </>
          }
          </>
        ))}
      </Flex>
      <Box display={{ base: "flex", lg: "none" }} zIndex={1000}>
        <HiOutlineMenuAlt2 onClick={onOpen} size={30} color="#ffff" />
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg={"#150433"} color="#fff">
          <DrawerCloseButton />
          <DrawerHeader alignItems={"center"}>
            <Flex align={"center"}>
              <Image src={Logo.src} alt="Icone Logo" w={{ base: "240px" }}
                h={{ base: "54px" }} />
            </Flex>
          </DrawerHeader>
          <DrawerBody>

            {routesPath.map((item, i) => (
              <>{<>
                {item.title === 'Tecnologia' ?
                  <>
                    <Box h="50px">
                      <Menu  >
                        <MenuButton >
                          <Text mb="5px" cursor={"pointer"}>
                            {item.title}
                          </Text>
                        </MenuButton>
                        <MenuList background={"#ffffff"} >
                          <MenuItem color='#000000' onClick={() => router.push('/technology/big-data')}>Big Data</MenuItem>
                          <MenuItem color='#000000' onClick={() => router.push('/technology/computer-vision')}>Visão Computacional</MenuItem>
                          <MenuItem color='#000000' onClick={() => router.push('/technology/conversational-interface')}>Interface Conversacionais</MenuItem>
                          <MenuItem color='#000000' onClick={() => router.push('/technology/rpa')}>RPA</MenuItem>
                        </MenuList>
                        {item.path === asPath && (
                          <Box
                            w={item.path === "/" && asPath ? "80%" : "50%"}
                            mx={item.path === "/" && asPath ? "auto" : ""}
                            h="1px"
                            bg="#fff"
                          />
                        )}
                      </Menu>
                    </Box>
                  </> : <>{
                    item.title === 'Serviços' ?
                      <> <Box h="50px">
                        <Menu  >
                          <MenuButton >
                            <Text mb="5px" cursor={"pointer"}>
                              {item.title}
                            </Text>
                          </MenuButton>
                          <MenuList background={"#ffffff"} >
                            <MenuItem color='#000000' onClick={() => router.push('/services/robotic-as-a-service')}>Robotic as a service</MenuItem>
                            <MenuItem color='#000000' onClick={() => router.push('/services/neural-analytics')}>Neural analytics</MenuItem>
                          </MenuList>
                          {item.path === asPath && (
                            <Box
                              w={item.path === "/" && asPath ? "80%" : "50%"}
                              mx={item.path === "/" && asPath ? "auto" : ""}
                              h="1px"
                              bg="#fff"
                            />
                          )}
                        </Menu>
                      </Box>
                      </> :
                      <>
                        <Link href={item.path} key={i}>
                          <Box h="50px">
                            <Text mb="5px" cursor={"pointer"}>
                              {item.title}
                            </Text>
                            {item.path === asPath && (
                              <Box
                                w={item.path === "/" && asPath ? "80%" : "50%"}
                                mx={item.path === "/" && asPath ? "auto" : ""}
                                h="1px"
                              />
                            )}
                          </Box>
                        </Link>
                      </>
                  }</>}

              </>
              }
              </>
            ))}
          </DrawerBody>
          <DrawerFooter />
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}