import { Box, Text, HStack, IconButton, useColorModeValue, Link } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("gray.100", "gray.900")}
      color={useColorModeValue("gray.700", "gray.300")}
      py={6}
      mt={10}
      textAlign="center"
      borderTop="1px solid"
      borderColor={useColorModeValue("gray.300", "gray.700")}
    >
      <HStack justify="center" spacing={6} mb={3}>
        <Link href="https://github.com/Ritesh-kumar-jena" isExternal>
          <IconButton
            aria-label="GitHub"
            icon={<FaGithub />}
            variant="ghost"
            size="lg"
            _hover={{ color: "teal.400" }}
          />
        </Link>
        <Link href="https://www.linkedin.com/in/ritesh-kumar-jena-aa6407270" isExternal>
          <IconButton
            aria-label="LinkedIn"
            icon={<FaLinkedin />}
            variant="ghost"
            size="lg"
            _hover={{ color: "teal.400" }}
          />
        </Link>
        <Link href="mailto:jenariteshkumar85@gmail.com">
          <IconButton
            aria-label="Email"
            icon={<FaEnvelope />}
            variant="ghost"
            size="lg"
            _hover={{ color: "teal.400" }}
          />
        </Link>
      </HStack>

      <Text fontSize="sm">
        © {new Date().getFullYear()} Ritesh Kumar Jena. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
