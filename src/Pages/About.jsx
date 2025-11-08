import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Image,
  Divider,
  useColorModeValue,
  useBreakpointValue
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);
const MotionImage = motion.create(Image);
const MotionVStack = motion.create(VStack);

const About = ({ id }) => {
  const textColor = useColorModeValue("gray.700", "gray.300");
  const headingColor = useColorModeValue("teal.600", "teal.400");
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box
      id={id}
      minH="100vh"
      color="white"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={6}
      py={{ base: 10, md: 20 }}
    >
      <MotionBox
        maxW="6xl"
        w="full"
        textAlign={{ base: "center", md: "left" }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3  }}
      >
        {/* Section Heading */}
        <Heading as="h2" size="xl" mb={4} textAlign="center" color={headingColor}>
          About Me
        </Heading>

        <Divider borderColor={headingColor} maxW="120px" mx="auto" mb={10} />

        {/* Content Layout */}
        <HStack
          flexDir={{ base: "column", md: "column",lg:"row" }}
          spacing={{ base: 5, md: 16 }}
          justify="space-between"
          align="center"
        >
          {/* Left - Profile Image (slide in from left) */}
          <MotionImage
            src="https://res.cloudinary.com/dy9gltg7s/image/upload/v1762413385/fullstack_otvvss.gif"
            alt="Ritesh Kumar Jena"
            borderRadius="xl"
            w={{ base: "300px", md: "520px" }}
            h="auto"
            boxShadow="0 0 35px rgba(0, 255, 255, 0.25)"
            initial={{ opacity: 0, x: isMobile ? -60 : -100, scale: isMobile ? 0.95 : 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: isMobile ? 1.1 : 0.9, ease: "easeOut" }}
            viewport={{ once: false, amount: isMobile ? 0.25 : 0.4 }}
          />

          {/* Right - Text (slide in from right) */}
          <MotionVStack
            align={{ base: "center", md: "start" }}
            spacing={5}
            maxW="3xl"
            initial={{ opacity: 0, x: isMobile ? 60 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: isMobile ? 1.1 : 0.9, ease: "easeOut", delay: 0.15 }}
            viewport={{ once: false, amount: isMobile ? 0.25 : 0.5 }}
          >
            <Text fontSize="lg" color={textColor} lineHeight="taller">
              I’m{" "}
              <Text as="span" color={headingColor} fontWeight="bold">
                Ritesh Kumar Jena
              </Text>
              , a passionate and adaptable{" "}
              <Text as="span" fontWeight="semibold" color={headingColor}>
                Full Stack Developer
              </Text>{" "}
              with hands-on experience in building modern, responsive, and
              scalable web applications.
            </Text>

            <Text fontSize="md" color={textColor} lineHeight="taller">
              My expertise lies in the <b>MERN Stack</b> — MongoDB, Express,
              React, and Node.js. I love crafting seamless user experiences and
              designing clean, optimized backend logic. I also explore{" "}
              <b>AI integration</b> and <b>Prompt Engineering</b> to bring
              automation and intelligence into applications.
            </Text>

            <Text fontSize="md" color={textColor} lineHeight="taller">
              I enjoy collaborating in teams, solving real-world problems, and
              constantly learning new technologies. My goal is to contribute to
              impactful projects that blend technology, creativity, and
              innovation.
            </Text>
          </MotionVStack>
        </HStack>
      </MotionBox>
    </Box>
  );
};

export default About;
