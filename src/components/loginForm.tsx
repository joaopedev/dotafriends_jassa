import React, { useState } from "react";
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
import png from "../images/dota-2-logo-A8CAC9B4C9-seeklogo.com.png";
import themeCinzel from "../utils/fontCinzel";
import axios from "axios";


export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const handleSendClick = async () => {
    try {
      const response = await axios.post(`http://localhost:3005/enviar-email`, {
        email: email
      });

      console.log("Resposta da API:", response.data);
    } catch (error) {
      console.error("Erro ao fazer a requisição:", error);
    }
  };

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
              <Text m={3} color="black">
                {" "}
                If you want a good friend to play DOTA 2 with, enter your email
                to receive an email and let's get started!
              </Text>
            </VStack>

            <FormLabel color="black" m={3}>
              Email:
            </FormLabel>
            <VStack>
              <Input
              textColor="black"
                borderColor="black"
                m={3}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </VStack>
          </FormControl>
          <Button mb={5} colorScheme="red" onClick={handleSendClick}>
            Send
          </Button>
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default LoginForm;
