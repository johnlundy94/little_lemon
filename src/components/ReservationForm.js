import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  VStack,
  FormErrorMessage,
  useBreakpointValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Text,
} from "@chakra-ui/react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import moment from "moment";
import Footer from "./Footer";
import db from "../config/firebase";
import { collection, addDoc } from "firebase/firestore";

const occasions = [{ occasion: "Birthday" }, { occasion: "Anniversary" }];

const saveReso = async (formData) => {
  try {
    await addDoc(collection(db, "reservations"), formData);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const validationSchema = Yup.object().shape({
  date: Yup.date().min(
    moment().format("YYYY-MM-DD"),
    "Date cannot be in the past"
  ),
  selectedTime: Yup.string().required("Time is required"),
  guests: Yup.number().min(1, "Guests must be at least 1"),
  occasion: Yup.string().required("Occasion is required"),
});

const ReservationForm = ({
  times, selectedTime, setSelectedDate
}) => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState(null);

  const initialValues = { date: "", selectedTime, guests: "", occasion: "" };

  const onSubmit = async (values) => {
    try {
      await saveReso(values);
      setFormData(values);
      setShowModal(true);
      setSelectedDate(values.date);
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  const currentDateTime = moment().format("YYYY-MM-DDTHH:mm");

  return (
    <>
      <Center>
        <VStack
          w={useBreakpointValue({ base: "100%", md: "1024px" })}
          p={useBreakpointValue({ base: 4, md: 32 })}
          alignItems="flex-start"
        >
          <Heading as="h1" className="h1" id="contactme-section">
            Reserve a table
          </Heading>
          <Box p={useBreakpointValue({ base: 2, md: 6 })} rounded="md" w="100%">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {(props) => (
                <Form>
                  <VStack spacing={4}>
                    <Field name="date">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={form.errors.date && form.touched.date}
                        >
                          <FormLabel htmlFor="date">Choose date</FormLabel>
                          <Input
                            {...field}
                            id="date"
                            type="date"
                            min={currentDateTime}
                            onChange={(event) => {
                              setSelectedDate(event.target.value);
                              field.onChange(event);
                            }}
                          />
                          <ErrorMessage
                            name="date"
                            component={FormErrorMessage}
                          />
                        </FormControl>
                      )}
                    </Field>
                    <Field name="selectedTime">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={
                            form.errors.selectedTime &&
                            form.touched.selectedTime
                          }
                        >
                          <FormLabel htmlFor="selectedTime">
                            Choose time
                          </FormLabel>
                          <Select
                            {...field}
                            id="selectedTime"
                            min={currentDateTime}
                          >
                            {times.map((time) => (
                              <option
                                value={time.time}
                                key={time.time}
                                disabled={time.disabled}
                              >
                                {time.time}
                              </option>
                            ))}
                          </Select>
                          <ErrorMessage
                            name="selectedTime"
                            component={FormErrorMessage}
                          />
                        </FormControl>
                      )}
                    </Field>
                    <Field name="guests">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={form.errors.guests && form.touched.guests}
                        >
                          <FormLabel htmlFor="guests">
                            Number of guests
                          </FormLabel>
                          <Input
                            {...field}
                            id="guests"
                            type="number"
                            placeholder="1"
                            min={"1"}
                            max={"10"}
                          />
                          <ErrorMessage
                            name="guests"
                            component={FormErrorMessage}
                          />
                        </FormControl>
                      )}
                    </Field>
                    <Field name="occasion">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={
                            form.errors.occasion && form.touched.occasion
                          }
                        >
                          <FormLabel htmlFor="occasion">Occasion </FormLabel>
                          <Select
                            {...field}
                            id="occasion"
                            aria-describedby="error-occasion"
                          >
                            <option value="" disabled>
                              Please select an option
                            </option>
                            {occasions.map((occasion) => (
                              <option
                                value={occasion.occasion}
                                key={occasion.occasion}
                              >
                                {occasion.occasion}
                              </option>
                            ))}
                          </Select>
                          <ErrorMessage
                            name="occasion"
                            component={FormErrorMessage}
                            id="error-occasion"
                          />
                        </FormControl>
                      )}
                    </Field>

                    <Button
                      type="submit"
                      width="full"
                      disabled={!props.isValid || props.isSubmitting}
                    >
                      Submit
                    </Button>
                  </VStack>
                </Form>
              )}
            </Formik>
          </Box>
        </VStack>
      </Center>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Below is information about your reservation. We will see you then!
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {formData && (
              <VStack alignItems="flex-start" spacing={2}>
                <Text>Date: {formData.date}</Text>
                <Text>Time: {formData.selectedTime}</Text>
                <Text>Guests: {formData.guests}</Text>
                <Text>Occasion: {formData.occasion}</Text>
              </VStack>
            )}
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => setShowModal(false)}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Center>
        <Footer />
      </Center>
    </>
  );
};

export default ReservationForm;
