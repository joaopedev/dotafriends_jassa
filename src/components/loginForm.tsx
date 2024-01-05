import React, { useState, useEffect } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Box,
  Image,
  Text,
  ChakraProvider,
} from "@chakra-ui/react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import png from "../images/dota-2-logo-A8CAC9B4C9-seeklogo.com.png";
import themeCinzel from "../utils/fontCinzel";

export const LoginForm: React.FC = () => {
  const { login, isAuthenticated } = useAuth();
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState(false);
  console.log(emailError);

  const handleLogin = () => {
    if (isAuthenticated) {
      navigate("/home", { state: { email } });
    } else {
      if (email) {
        login(email);
        setEmailError(false);
      } else {
        setEmailError(true);
      }
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home", { state: { email } });
    }
  }, [isAuthenticated, navigate, email]);

  return (
    <ChakraProvider theme={themeCinzel}>
    <Box boxShadow="md" rounded="md" bg="White" maxW="100%" p={6}>
      <VStack spacing={3}>
        <Image m={3} maxW="30%" src={png} />
        <FormControl m={3}>
          <VStack>
            <FormLabel color="black" m={3}>
              Welcome to Jassa DOTA 2 friends!
            </FormLabel>
            <Text m={3} color="black"> If you want a good friend to play DOTA 2 with, enter your email to receive an email and let's get started!</Text>
          </VStack>

          <FormLabel color="black" m={3}>Email:</FormLabel>
          <VStack>
          <Input
          borderColor="black"
            m={3}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          </VStack>
        </FormControl>
        <Button mb={5} colorScheme="red" onClick={handleLogin}>
          Send
        </Button>
      </VStack>
    </Box>
    </ChakraProvider>
  );
};

export default LoginForm;
