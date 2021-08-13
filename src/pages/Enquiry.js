import {
  Box,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  HStack,
  Input,
  Text,
  VStack,
  useToast,
  Textarea,
} from "@chakra-ui/react";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import axios from "axios";

const schema = yup.object().shape({
  name: yup.string().required(),
  phone: yup.string().required(),
  question: yup.string().required(),
  address: yup.string().required(),
});

function Enquiry() {
  const toast = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BASEURL}/enquiry`,
        data
      );
      reset({ name: "", phone: "", question: "", address: "" });

      toast({
        title: "Enquiry Message",
        description: res.data.message,
        status: res.data.status,
        duration: 4000,
        isClosable: true,
      });
    } catch (error) {
      if (error?.response?.data?.message) {
        toast({
          title: "Login Error",
          description: error.response.data.message,
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      }
    }
  };

  return (
    <Box maxW="md" mx="auto">
      <Box px="10" py="4" borderWidth="1px">
        <Text fontSize="xx-large" textAlign="center">
          Enquiry Form
        </Text>

        <Box my="8">
          <form onSubmit={handleSubmit(onSubmit)}>
            <VStack>
              <FormControl isInvalid={errors.name}>
                <FormLabel htmlFor="name"></FormLabel>
                <Input id="name" placeholder="Name" {...register("name")} />
                <FormErrorMessage>
                  {errors.name && errors.name.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.phone}>
                <FormLabel htmlFor="phone"></FormLabel>
                <Input id="phone" placeholder="Phone" {...register("phone")} />
                <FormErrorMessage>
                  {errors.phone && errors.phone.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.address}>
                <FormLabel htmlFor="address"></FormLabel>
                <Input
                  id="address"
                  placeholder="Address"
                  {...register("address")}
                />
                <FormErrorMessage>
                  {errors.address && errors.address.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.question}>
                <FormLabel htmlFor="question"></FormLabel>
                <Textarea
                  id="question"
                  placeholder="Question"
                  {...register("question")}
                />
                <FormErrorMessage>
                  {errors.question && errors.question.message}
                </FormErrorMessage>
              </FormControl>

              <Button
                isLoading={isSubmitting}
                w="full"
                type="submit"
                colorScheme="twitter"
              >
                Enquiry
              </Button>
            </VStack>
          </form>
        </Box>
      </Box>
    </Box>
  );
}

export default Enquiry;
