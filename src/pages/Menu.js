import React from "react";
import Header from "../components/Header";
import menu1 from "../assets/menu1.png";
import menu2 from "../assets/menu2.png";
import { Image, Center, VStack, useBreakpointValue } from "@chakra-ui/react";
import Footer from "../components/Footer";

const Menu = () => {
  return (
    <>
      <Header />
      <Center mt={useBreakpointValue({ base: 4, md: 32 })}>
        <VStack spacing={useBreakpointValue({ base: 4, md: 8 })}>
          <Image alt="Image by pikisuperstar on Freepik" src={menu1} />
          <Image alt={"Image by pikisuperstar on Freepik"} src={menu2} />
        </VStack>
      </Center>
      <Center>
        <Footer />
      </Center>
    </>
  );
};

export default Menu;
