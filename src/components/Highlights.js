// Highlights component
import { Box, Button, Heading, useBreakpointValue, Container  } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Cards from "./Cards";
import "../styles/Highlights.css";

const projects = [
  {
    title: "Greek salad",
    price: 12.99,
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary crutons.",
    getImageSrc: () => require("../assets/greek_salad.jpg"),
  },
  {
    title: "Bruchetta",
    price: 5.99,
    description:
      "Our Bruschetta is made from grilled bred that has been smeared with garlic and seasoned with salt and live oil.",
    getImageSrc: () => require("../assets/bruchetta.jpg"),
  },
  {
    title: "Lemon Dessert",
    price: 5.0,
    description:
      "This comes straight from grandmas recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    getImageSrc: () => require("../assets/lemon_dessert.jpg"),
  },
];

const Highlights = () => {
  const gridColumn = useBreakpointValue({ base: "repeat(1,1fr)", md: "repeat(3,1fr)" });

  return (
    <Container maxWidth="container.xl" centerContent>
      <Box
        display="flex"
        flexDirection={"column"}
        justifyContent="space-between"
        alignItems={"center"}
        marginTop={{ base: "40px", md: "100px" }}
        marginBottom={{ base: "20px", md: "50px" }}
      >
        <Heading
          as="h1"
          id="projects-section"
          className="h1"
          textAlign={{ base: "center", md: "left" }}
          marginBottom={{ base: "20px", md: "20px" }}
        >
          This weeks specials!
        </Heading>
        <Link to={"/menu"}>
          <Box
            as="button"
            rounded={"full"}
            bg={"#F4CE14"}
            _hover={{
              bg: "transparent",
            }}
            _focus={{
              outline: "2px solid #F4CE14",
            }}
            px={8}
            py={3}
            fontWeight="bold"
            color="black"
            fontSize="md"
          >
            View Our Menu
          </Box>
        </Link>
      </Box>
      <section className="cards_container">
        <Box
          display="grid"
          gridTemplateColumns={gridColumn}
          gridGap={10}
          marginTop={"50px"}
          marginBottom={"50px"}
        >
          {projects.map((project) => (
            <Cards
              key={project.title}
              title={project.title}
              price={project.price}
              description={project.description}
              imageSrc={project.getImageSrc()}
              alt={project.title}
            />
          ))}
        </Box>
      </section>
    </Container>
  );
};

export default Highlights;

