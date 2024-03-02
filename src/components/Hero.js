import { Link } from "react-router-dom";
import {
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Box,
  useMediaQuery,
} from "@chakra-ui/react";
import restaurantfood from "../assets/restaurantfood.jpg";

const Hero = () => {
  const [isSmallScreen] = useMediaQuery("(max-width: 600px)");

  return (
    <Stack
      bg={"#495E57"}
      h={"30vh"}
      w={"full"}
      direction={{ base: "column", md: "row" }}
      id="hero"
      alignItems={isSmallScreen ? "flex-start" : "center"}
      justifyContent={isSmallScreen ? "flex-start" : "center"}
    >
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={1} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "sm", md: "4xl", lg: "5xl" }}>
            <Text className="h1" as={"span"} color={"#F4CE14"}>
              Little Lemon
            </Text>
            <br />
            <Text className="h2" color={"white"} as={"span"}>
              Chicago
            </Text>
          </Heading>
          <Text color={"white"} fontSize={{ base: "md", lg: "lg" }}>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Link to={"/reservations"}>
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
                Reserve a Table
              </Box>
            </Link>
          </Stack>
        </Stack>
      </Flex>

      {!isSmallScreen && (
        <Flex
          flex={1}
          justify={"center"}
          align={"flex-end"}
          position={"relative"}
          w={"full"}
        >
          <Box
            mr={"0px"}
            mb={"-40px"}
            height={"300px"}
            rounded={"2xl"}
            width={"400px"}
            overflow={"hidden"}
          >
            <Image
              alt={"People having dinner at Little Lemon"}
              objectFit={"cover"}
              align={"center"}
              w={"100%"}
              h={"100%"}
              src={restaurantfood}
            />
          </Box>
        </Flex>
      )}
    </Stack>
  );
};

export default Hero;
