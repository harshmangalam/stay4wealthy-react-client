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
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import axios from "axios";

const schema = yup.object().shape({
  name: yup.string().required(),
  phone: yup.string().required(),
  password: yup.string().required(),
  address: yup.string().required(),
  pincode: yup.string().required(),
});

function Signup({ history }) {
  const toast = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BASEURL}/auth/signup`,
        data
      );

      toast({
        title: "Signup Message",
        description: res.data.message,
        status: "success",
        duration: 4000,
        isClosable: true,
      });

      history.push("/login");
    } catch (error) {
      if (error?.response?.data?.message) {
        toast({
          title: "Signup Error",
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
          Stay4Wealthy
        </Text>

        <Box my="8">
          <form onSubmit={handleSubmit(onSubmit)}>
            <VStack>
              <FormControl isInvalid={errors.name}>
                <FormLabel htmlFor="name"></FormLabel>
                <Input
                  id="name"
                  placeholder="Customer Name"
                  {...register("name")}
                />
                <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.phone}>
                <FormLabel htmlFor="phone"></FormLabel>
                <Input
                  id="phone"
                  placeholder="Phone Number"
                  {...register("phone")}
                />
                <FormErrorMessage>{errors.phone?.message}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.password}>
                <FormLabel htmlFor="password"></FormLabel>
                <Input
                  type="password"
                  id="password"
                  placeholder="Password"
                  {...register("password")}
                />
                <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.address}>
                <FormLabel htmlFor="address"></FormLabel>
                <Input
                  id="address"
                  placeholder="Address"
                  {...register("address")}
                />
                <FormErrorMessage>{errors.address?.message}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.pincode}>
                <FormLabel htmlFor="pincode"></FormLabel>
                <Input
                  id="pincode"
                  placeholder="Pin Code"
                  {...register("pincode")}
                />
                <FormErrorMessage>{errors.pincode?.message}</FormErrorMessage>
              </FormControl>

              <Button
                isLoading={isSubmitting}
                w="full"
                type="submit"
                colorScheme="twitter"
              >
                Sign up
              </Button>
            </VStack>

            <Box my="4">
              <Text fontSize="xs" color="gray.500">
                By signing up, you agree to our Terms , Data Policy and Cookies
                Policy.
              </Text>
            </Box>
          </form>
        </Box>
      </Box>

      <Box p="4" borderWidth="1px" my="4">
        <HStack justifyContent="center">
          <Text fontSize="sm">Have an Account ?</Text>
          <Link to="/login">
            <Text color="blue.500">Login</Text>
          </Link>
        </HStack>
      </Box>
    </Box>
  );
}

export default Signup;
