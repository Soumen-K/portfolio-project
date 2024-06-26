import React, {useEffect} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const formSchema = Yup.object().shape({
  firstName: Yup.string().required(),
  email: Yup.string().required().email(),
  comment: Yup.string().required(),
  // type: Yup.string().required(),
 });

const LandingSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      type: '',
      comment: ''
    },
    onSubmit: (values) => {
      submit(values)
    },
    validationSchema: formSchema,
  });

  useEffect(() => {
    if (response !==null && 'type' in response) {
      onOpen(response.type, response.message);
      if(response.type === 'success') {
        formik.resetForm()
      }
      
    }
  }, [response])
 

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={('firstName' in formik.errors)}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                />
                {
                  ('firstName' in formik.errors) && (
                    <FormErrorMessage>{formik.errors.firstName }</FormErrorMessage>
                  )
                }
              </FormControl>
              <FormControl isInvalid={('email' in formik.errors)}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                {
                  ('email' in formik.errors) && (
                    <FormErrorMessage>{formik.errors.email }</FormErrorMessage>
                  )
                }
              </FormControl>
              <FormControl isInvalid={('type' in formik.errors)}>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" name="type" onChange={formik.handleChange} value={formik.values.type}>
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
                 {
                  ('type' in formik.errors) && (
                    <FormErrorMessage>{formik.errors.comment }</FormErrorMessage>
                  )
                }
              </FormControl>
              <FormControl isInvalid={('comment' in formik.errors)}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  onChange={formik.handleChange}
                  value={formik.values.comment}
                />
                {
                  ('comment' in formik.errors) && (
                    <FormErrorMessage>{formik.errors.comment }</FormErrorMessage>
                  )
                }
              </FormControl>
              <Button type="submit" colorScheme="purple" width="full" isLoading={isLoading}>
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
