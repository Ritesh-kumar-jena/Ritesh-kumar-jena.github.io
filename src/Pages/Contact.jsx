import {
  Box,
  Heading,
  VStack,
  HStack,
  Text,
  IconButton,
  Link,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact({ id }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Box ref={ref} id={id} minH="90vh" px={6} py={12}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Heading textAlign="center" mb={8}>
          Contact Me
        </Heading>

        {/* Contact Section */}
        <VStack
          spacing={8}
          align="center"
          justify="center"
          maxW="500px"
          mx="auto"
        >
          <Text textAlign="center" fontSize="lg">
            I'd love to hear from you! Whether you have a project idea, a
            question, or just want to say hi — feel free to reach out.
          </Text>

          {/* Social Links */}
          <HStack spacing={6}>
            <IconButton
              as={Link}
              href="https://github.com/Ritesh-kumar-jena"
              target="_blank"
              aria-label="GitHub"
              icon={<FaGithub />}
              size="lg"
              variant="ghost"
            />
            <IconButton
              as={Link}
              href="https://linkedin.com/in/ritesh-kumar-jena"
              target="_blank"
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
              size="lg"
              variant="ghost"
            />
            <IconButton
              as={Link}
              href="mailto:riteshkumarjena123@gmail.com"
              aria-label="Email"
              icon={<FaEnvelope />}
              size="lg"
              variant="ghost"
            />
          </HStack>

          {/* Contact Form (optional static form) */}
          <Box w="100%">
            <VStack spacing={4}>
              <Input placeholder="Your Name" variant="filled" />
              <Input placeholder="Your Email" type="email" variant="filled" />
              <Textarea
                placeholder="Your Message"
                variant="filled"
                rows={5}
              />
              <Button colorScheme="teal" w="100%">
                Send Message
              </Button>
            </VStack>
          </Box>

          <Text fontSize="sm" mt={6} opacity={0.7}>
            or email me directly at{" "}
            <Link
              href="mailto:riteshkumarjena123@gmail.com"
              color="teal.400"
              fontWeight="bold"
            >
              riteshkumarjena123@gmail.com
            </Link>
          </Text>
        </VStack>
      </motion.div>
    </Box>
  );
}

export default Contact;
