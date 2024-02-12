import { Box, Flex, VStack, useBreakpointValue } from "@chakra-ui/react";
import LoginForm from "../components/homeForm";
import image from "../images/wallpaperflare.com_wallpaper.jpg";
import Footer from "../components/footer";

export const LoginFriends: React.FC = () => {
  const boxWidth = useBreakpointValue({ base: "90%", md: "70vw", lg: "30vw" });

  return (
    <Box backgroundImage={image}>
      <Flex justifyContent="center" alignItems="center" h="95vh">
        <VStack>
          <Box width={boxWidth} p={15}>
            <LoginForm />
          </Box>
        </VStack>
      </Flex>
      <Footer />
    </Box>
  );
};

export default LoginFriends;
