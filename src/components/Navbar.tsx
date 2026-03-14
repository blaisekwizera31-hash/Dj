import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { Flex, HStack, Heading } from "@chakra-ui/react";
const Navbar = () => {
  return (
    <>
      <Flex align="center" p="4">
        <Heading as = "h2" >Dominic Waverly</Heading>
        <HStack gap="6" ml="auto" pe="6">
          <a href="https://www.instagram.com/blaiseikb" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={20} />
        </a>
        <a href="https://www.facebook.com/ikbblaise" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={20} />
        </a>
        <a href="https://x.com/@blaiseikb" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={20} />
        </a>
        </HStack>
      </Flex>
    </>
  );
};
export default Navbar;
