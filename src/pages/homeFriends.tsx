import { Box, Container, VStack, Text, Stack } from "@chakra-ui/react";
import LoginForm from "../components/homeForm";
import image from "../images/wallpaperflare.com_wallpaper.jpg";

export const LoginFriends: React.FC = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <Box
      backgroundImage={`url(${image})`}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      minH="100vh"
    >
      <VStack>
        <VStack mt={12}>
          <LoginForm />
        </VStack>
      </VStack>
      <Box mt={12}>
        <Container as={Stack} maxW={"6xl"} py={4} align="center">
          <Text textAlign="center" textColor="white">
            © {getCurrentYear()} Joao Pedro Sousa. All rights reserved.
          </Text>
        </Container>
      </Box>
    </Box>
  );
};

export default LoginFriends;
