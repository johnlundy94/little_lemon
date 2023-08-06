import {
  CardBody,
  Heading,
  HStack,
  Image,
  Text,
  Card,
  Stack,
  Button,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Reviews = ({ title, price, description, imageSrc }) => {
  return (
    <Card>
      <CardBody>
        <Image src={imageSrc} alt={title} />
        <Stack mt="6" spacing="3">
          <HStack spacing="20">
            <Heading size="md">{title}</Heading>
            <Text color={"#EE9972"}>${price}</Text>
          </HStack>

          <Text>{description}</Text>
          <Button leftIcon={<FontAwesomeIcon icon={faCartShopping} size="1x" />}>
            Order a delivery
          </Button>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default Reviews;
