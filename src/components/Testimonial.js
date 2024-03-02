import {
  CardBody,
  Heading,
  HStack,
  Image,
  Text,
  Card,
  Stack,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Testimonial = ({ rating, name, photo, review }) => {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      height="100%"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "60px", sm: "60px" }}
        src={photo}
        alt={`${name}'s profile photo`}
      />

      <Stack flex="1">
        <CardBody>
          <Heading size="md">{name}</Heading>
          <HStack>
            <FontAwesomeIcon icon={faStar} size="1x" />
            <Text>{rating}</Text>
            <VisuallyHidden>
              This user has a rating of {rating} stars
            </VisuallyHidden>
          </HStack>
          <Text py="2">{review}</Text>
        </CardBody>
      </Stack>
    </Card>
  );
};

export default Testimonial;
