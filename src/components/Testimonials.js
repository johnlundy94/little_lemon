import { Box, Text, useBreakpointValue} from "@chakra-ui/react";
import Testimonial from "./Testimonial";
import "../styles/Highlights.css";
import "../styles/Testimonials.css";

const testimonials = [
  {
    name: "Frank",
    rating: 5,
    review: "Excellent cuizines",
    imageSrc: () => require("../assets/photo.jpg"),
  },
  {
    name: "Ella",
    rating: 5,
    review: "Salads are to die for!!!",
    imageSrc: () => require("../assets/photo.jpg"),
  },
  {
    name: "Stephanie",
    rating: 5,
    review: "Service was impeccable!",
    imageSrc: () => require("../assets/photo.jpg"),
  },
  {
    name: "Jose",
    rating: 5,
    review: "Had a blast with my friends here",
    imageSrc: () => require("../assets/photo.jpg"),
  },
];

const Testimonials = () => {
  const gridColumn = useBreakpointValue({ base: "repeat(1,1fr)", md: "repeat(4,1fr)" });
  const marginSize = useBreakpointValue({ base: "20px", md: "300px" });

  return (
    <div className="testimonials">
      <Text
        className="h1"
        as="h1"
        display="flex"
        justifyContent="center"
        paddingTop={"50px"}
      >
        Testimonials
      </Text>
      <section className="cards_container">
        <Box
          display="grid"
          gridTemplateColumns={gridColumn}
          gridGap={10}
          marginTop={"50px"}
          marginLeft={marginSize}
          marginRight={marginSize}
          marginBottom={"100px"}
        >
          {testimonials.map((testimonial) => (
            <Testimonial
              key={testimonial.name}
              name={testimonial.name}
              rating={testimonial.rating}
              review={testimonial.review}
              photo={testimonial.imageSrc()}
            />
          ))}
        </Box>
      </section>
    </div>
  );
};

export default Testimonials;