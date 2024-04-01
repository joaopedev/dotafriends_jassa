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
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
} from "@chakra-ui/react";
import png from "../images/dota-2-logo-A8CAC9B4C9-seeklogo.com.png";
import axios from "axios";

export const HomeForm: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [email, setEmail] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const apiUrl = process.env.REACT_APP_API_URL;

  const handleSendClick = async () => {
    if (!isValidEmail(email)) {
      setErrorMessage("Por favor, insira um email válido.");
      onOpen();
      return;
    }

    try {
      const response = await axios.post(`${apiUrl}enviar-email`, {
        email: email,
      });
      
      if (response.status === 200) {
        setIsEmailSent(true);
        onOpen();
      } else {
        setErrorMessage("Erro ao enviar o email. Por favor, tente novamente mais tarde.");
        onOpen();
      }
    } catch (error) {
      setErrorMessage("Erro ao enviar o email. Por favor, tente novamente mais tarde.");
      onOpen();
    }
  };

  const closeModal = () => {
    onClose();
    setEmail("");
    setIsEmailSent(false);
    setErrorMessage("");
  };

  const modalHeader = isEmailSent
    ? "Email successfully sent!"
    : errorMessage
    ? "Error sending the e-mail."
    : "Invalid email.";

  const modalBody = isEmailSent
    ? "You will receive an email with instructions, let's play! :) "
    : errorMessage
    ? errorMessage
    : "Please enter a valid email.";

  return (
    <ChakraProvider>
      <Box boxShadow="md" maxH="30%" rounded="md" bg="White" maxW="60%" p={6}>
        <VStack spacing={3}>
          <Image m={3} maxW="30%" src={png} />
          <FormControl m={3}>
            <VStack>
              <FormLabel
                color="black"
                m={3}
                as="b"
                textAlign="center"
              >
                Welcome to Jassa DOTA 2 friends!
              </FormLabel>
              <Text  m={3} color="black" as="b" textAlign="center">
                If you want a good friend to play DOTA 2 with, enter your email
                to receive an email and let's get started!
              </Text>
            </VStack>
            <FormLabel as="b" color="black" m={3}>
              Email:
            </FormLabel>
            <VStack>
              <Input
                textColor="black"
                borderColor={errorMessage ? "red" : "black"}
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

      <Modal onClose={closeModal} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{modalHeader}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{modalBody}</ModalBody>
          <ModalFooter>
            <Button onClick={closeModal}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
};

export default HomeForm;
