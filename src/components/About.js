import { VStack, Text, Image, Box } from "@chakra-ui/react";
import "../styles/Main.css";
import people from "../assets/people.jpg"
import people_two from "../assets/people_two.jpg"

const About = () => {
  return (
    <Box
    display="grid"
    gridTemplateColumns={["repeat(1, 1fr)", "repeat(12, 1fr)"]}
    marginTop={"50px"}
    marginBottom={"50px"}
    id="about"
    >
        <VStack paddingTop={"50px"} gridColumn={["1/ span 1", "3/ span 4"]}>
          <Text as="h1" className="h1">Little Lemon</Text>
          <Text as="h2" className="h2">Chicago</Text>
          <Text as="p" className="p">
            Little Lemon is a charming neighborhood bistro that serves simple
            food and classic cocktails in a lively but casual environment. The
            restaurant features a locally-sourced menu with daily specials.
          </Text>
        </VStack>
        <Box gridColumn={["1/ span 1", "7/ span 2"]} padding={["2", "0"]} display="flex" justifyContent="center" alignItems="center">
          <Image marginLeft={20} src={people} alt="Image description" borderRadius="lg" objectFit="cover" boxSize="auto"/>
        </Box>
        <Box gridColumn={["1/ span 1", "10/ span 2"]} padding={["2", "0"]} display="flex" justifyContent="center" alignItems="center">
          <Image src={people_two} alt="Image description" borderRadius="lg" objectFit="cover" boxSize="auto"/>
        </Box>
    </Box>
  );
};

export default About;
