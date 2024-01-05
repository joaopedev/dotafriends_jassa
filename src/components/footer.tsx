import { Box, Container, Stack, Text } from "@chakra-ui/react";

export const Footer: React.FC = () => {
  return (
    <Box>
      <Container as={Stack} maxW={"6xl"} py={4} align="center">
        <Text>© 2023 Joao Pedro Sousa. All rights reserved</Text>
      </Container>
    </Box>
  );
};

export default Footer;
