import { Box, Link, VStack, HStack, Image, Text } from '@chakra-ui/react';
import logo from "../assets/logo.svg";
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {

    const handleClick = (anchor) => () => {
    const id = `${anchor}`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (

    <Box as="footer" role="contentinfo" mx="auto" maxW="7xl" py="12" px={{ base: '4', md: '8' }}>
      <Image src={logo} alt="Company Logo" h="10" mb="10" />
      <HStack spacing="8">
        <VStack spacing="1" align="start">
          <Link as={RouterLink} to="/" onClick={handleClick("hero")}>Home</Link>
          <Link as={RouterLink} to="/menu">Menu</Link>
          <Link as={RouterLink} to="/reservations">Reservations</Link>
        </VStack>

        <VStack spacing="1" align="start">
          <Text fontWeight="bold">Contact</Text>
          <Text>Address</Text>
          <Text>Phone Number</Text>
          <Text>Email</Text>
        </VStack>

        <VStack spacing="1" align="start">
          <Text fontWeight="bold">Socials</Text>
          <Link href="">Facebook</Link>
          <Link href="">Instagram</Link>
          <Link href="">Twitter</Link>
        </VStack>
      </HStack>
    </Box>
  );
};

export default Footer;
