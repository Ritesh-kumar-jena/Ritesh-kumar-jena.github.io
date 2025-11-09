import { 
  Box,
  Heading,
  VStack,
  HStack,
  Text,
  Icon,
  Link,
  useColorModeValue
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const MotionVStack = motion.create(VStack);

function Contact({ id }) {
  const headingColor = useColorModeValue("teal.600", "teal.400");
  const textColor = useColorModeValue("gray.700", "gray.300");

  return (
    <Box id={id} minH="80vh" px={6} py={12}>
      <MotionVStack
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        spacing={8}
        maxW="500px"
        mx="auto"
      >
        <Heading textAlign="center" color={headingColor}>
          Contact Me
        </Heading>

        <Text textAlign="center" fontSize="lg" color={textColor}>
          I'd love to hear from you! Whether you have a project idea, a
          question, or just want to say hi — feel free to reach out.
        </Text>

        {/* EMAIL */}
        <MotionVStack
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: false }}
          w="100%"
        >
          <HStack spacing={4}>
            <Icon as={FaEnvelope} boxSize={6} color={headingColor} />
            <Link
              href="mailto:jenariteshkumar85@gmail.com"
              fontSize="lg"
              fontWeight="semibold"
              color={headingColor}
            >
              jenariteshkumar85@gmail.com
            </Link>
          </HStack>
        </MotionVStack>

        {/* PHONE */}
        <MotionVStack
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
          w="100%"
        >
          <HStack spacing={4}>
            <Icon as={FaPhone} boxSize={6} color={headingColor} />
            <Text fontSize="lg" fontWeight="semibold">
              +91 79781 16002
            </Text>
          </HStack>
        </MotionVStack>

        {/* GITHUB */}
        <MotionVStack
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false }}
          w="100%"
        >
          <HStack spacing={4}>
            <Icon as={FaGithub} boxSize={6} color={headingColor} />
            <Link
              href="https://github.com/Ritesh-kumar-jena"
              target="_blank"
              fontSize="lg"
              fontWeight="semibold"
              color={headingColor}
            >
              github.com/Ritesh-kumar-jena
            </Link>
          </HStack>
        </MotionVStack>

        {/* LINKEDIN */}
        <MotionVStack
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false }}
          w="100%"
        >
          <HStack spacing={4}>
            <Icon as={FaLinkedin} boxSize={6} color={headingColor} />
            <Link
              href="https://www.linkedin.com/in/ritesh-kumar-jena-aa6407270"
              target="_blank"
              fontSize="lg"
              fontWeight="semibold"
              color={headingColor}
            >
              linkedin.com/in/ritesh-kumar-jena-aa6407270
            </Link>
          </HStack>
        </MotionVStack>

      </MotionVStack>
    </Box>
  );
}

export default Contact;
