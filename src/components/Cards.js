import {
  CardBody,
  HStack,
  Image,
  Text,
  Card,
  Stack,
} from "@chakra-ui/react";
import React from "react";

const Cards = ({ title, price, description, imageSrc }) => {
  return (
    <Card>
      <CardBody>
        <Image
          src={imageSrc}
          boxSize={{base: "150px", sm: "200px", md: "250px"}}
          objectFit="cover"
          m="auto"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <HStack spacing="20">
            <Text size="md" className="h2">{title}</Text>
            <Text color={"#EE9972"} className="highlight">${price}</Text>
          </HStack>

          <Text className="p">{description}</Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default Cards;
