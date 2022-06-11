import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Layout } from "~/components";
import Router from "next/router";
import Link from "next/link";
import Logo from "/public/assets/Neural.png";

export function Header() {
  const asPath = Router.asPath;
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
    >
      <Box>
        <Image src={Logo.src} w="80px" h="80px" />
      </Box>
      <Flex
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
    </Flex>
  );
}
