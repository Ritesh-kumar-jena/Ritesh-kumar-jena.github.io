import { Box, Heading, Text, Button, VStack, HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

const Home = ({ id }) => {
  return (
    <Box
      id={id}
      minH="100vh"
      bgGradient="linear(to-b, gray.900, gray.800)"
      color="white"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={6}
    >
      <HStack
        flexDir={{ base: "column-reverse", md: "row" }}
        justify="space-between"
        maxW="6xl"
        spacing={12}
      >
        {/* Left Content */}
        <VStack align="start" spacing={6}>
          <MotionBox
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Heading as="h1" size="2xl" lineHeight="short">
              Hi, I’m <Text as="span" color="teal.300">Ritesh Kumar Jena</Text>
            </Heading>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Text fontSize="xl" color="gray.300">
              A passionate Full Stack Developer skilled in MERN Stack and building modern, responsive web applications.
            </Text>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <HStack spacing={4}>
              <Button as={Link} to="/projects" colorScheme="teal" size="lg">
                View Projects
              </Button>
              <Button as={Link} to="/contact" variant="outline" colorScheme="teal" size="lg">
                Contact Me
              </Button>
            </HStack>
          </MotionBox>
        </VStack>

        {/* Right Side Image */}
        <MotionBox
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <Image
            borderRadius="full"
            boxSize={{ base: "220px", md: "300px" }}
            src="/MyProfile.jpg"
            alt="Ritesh Kumar Jena"
            objectFit="cover"
            boxShadow="lg"
             _hover={{ transform: "scale(1.02)", shadow: "md" }}
             cursor="grab"
          />
        </MotionBox>
      </HStack>
    </Box>
  );
};

export default Home;
