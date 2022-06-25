import React from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Icon,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Layout } from "~/components";
import Router from "next/router";
import Link from "next/link";
import Logo from "/public/assets/Neural.png";

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
  const scrollY = window.scrollY;
  return (
    <Flex
      // w="full"
      justify={"space-between"}
      align="center"
      maxW="1400px"
      mx="auto"
      w={{ base: "95%", md: "90%", lg: "85%" }}
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
          w={{ base: "60px", lg: "80px", xl: "100px" }}
          h={{ base: "60px", lg: "90px", xl: "120px" }}
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
              <Image src={Logo.src} alt="Icone Logo" w="80px" h="60px" />
            </Flex>
          </DrawerHeader>

          <DrawerBody>
            {routesPath.map((item, index) => (
              <Flex
                align="center"
                // w="80%"
                p="8px"
                borderRadius={"5px"}
                my="5px"
                key={index}
                color={item.path === asPath ? "#ffffff" : "#fff"}
                bg={item.path === asPath ? "#5E239D" : "transparent"}
              >
                <Box ml="10px" fontSize={"18px"}>
                  <Link href={item.path}>{item.title}</Link>
                </Box>
              </Flex>
            ))}
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}
