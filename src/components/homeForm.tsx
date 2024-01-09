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
import themeCinzel from "../utils/fontCinzel";
import axios from "axios";

export const HomeForm: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [email, setEmail] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleSendClick = async () => {
    try {
      const response = await axios.post(
        `http://localhost:3005/enviar-email`,
        {
          email: email,
        }
      );

      if (response.data.success) {
        setIsEmailSent(true);
      } else {
        setIsEmailSent(false);
      }
    } catch (error) {
      setIsEmailSent(false);
    } finally {
      onOpen();
    }
  };

  const modalHeader =
  isEmailSent || !isEmailSent
    ? "Email enviado com sucesso!"
    : "Email inválido ou não foi possível enviar o email.";

const modalBody =
  isEmailSent
    ? "Você receberá um email com as instruções, bora jogar! :)"
    : "Verifique se o email é válido ou tente novamente mais tarde.";

    return (
      <ChakraProvider theme={themeCinzel}>
        <Box boxShadow="md" rounded="md" bg="White" maxW="100%" p={6}>
          <VStack spacing={3}>
            <Image m={3} maxW="30%" src={png} />
            <FormControl m={3}>
              <VStack>
                <FormLabel color="black" fontWeight="bold" m={3}>
                  Welcome to Jassa DOTA 2 friends!
                </FormLabel>
                <Text m={3} color="black" fontWeight="bold">
                  {" "}
                  If you want a good friend to play DOTA 2 with, enter your email
                  to receive an email and let's get started!
                </Text>
              </VStack>
  
              <FormLabel color="black" m={3} fontWeight="bold">
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
  
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{modalHeader}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>{modalBody}</ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </ChakraProvider>
    );
  };

export default HomeForm;
