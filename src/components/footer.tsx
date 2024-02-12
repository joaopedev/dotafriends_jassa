import { Box, Container, Stack, Text } from "@chakra-ui/react";

const getCurrentYear = () => {
  return new Date().getFullYear();
};

export const Footer: React.FC = () => {
  return (
    <Box>
      <Container as={Stack} maxW={"6xl"} py={4} align="center">
        <Text textColor="white">
          © {getCurrentYear()} Joao Pedro Sousa. All rights reserved.
        </Text>{" "}
      </Container>
    </Box>
  );
};

export default Footer;
