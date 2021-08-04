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
  phone: yup.string().required(),
  password: yup.string().required(),
});

function Login() {
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
        `${process.env.REACT_APP_BASEURL}/auth/login`,
        data
      );

      window.location.reload();
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
          Stay4Wealthy
        </Text>

        <Box my="8">
          <form onSubmit={handleSubmit(onSubmit)}>
            <VStack>
              <FormControl isInvalid={errors.phone}>
                <FormLabel htmlFor="phone"></FormLabel>
                <Input id="phone" placeholder="Phone" {...register("phone")} />
                <FormErrorMessage>
                  {errors.phone && errors.phone.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.password}>
                <FormLabel htmlFor="password"></FormLabel>
                <Input
                  type="password"
                  id="password"
                  placeholder="Password"
                  {...register("password")}
                />
                <FormErrorMessage>
                  {errors.password && errors.password.message}
                </FormErrorMessage>
              </FormControl>

              <Button
                isLoading={isSubmitting}
                w="full"
                type="submit"
                colorScheme="twitter"
              >
                Log in
              </Button>
            </VStack>
          </form>
        </Box>
      </Box>

      <Box p="4" borderWidth="1px" my="4">
        <HStack justifyContent="center">
          <Text fontSize="sm">Don`t have an Account ?</Text>
          <Link to="/signup">
            <Text color="blue.500">Signup</Text>
          </Link>
        </HStack>
      </Box>
    </Box>
  );
}

export default Login;
