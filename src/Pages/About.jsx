import { Box, Flex, Image, Text, Heading } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function About({ id }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Box ref={ref}  minH="90vh" px={6} py={12} id={id}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="center"
          gap={8}
        >
          <Image
            src="/MyProfile.jpg"
            alt="Ritesh"
            borderRadius="full"
            boxSize={{ base: "180px", md: "220px" }}
            shadow="lg"
          />
          <Box maxW="600px">
            <Heading mb={4}>About Me</Heading>
            <Text fontSize="lg" lineHeight="tall">
              Hi, I'm <b>Ritesh Kumar Jena</b> — a passionate Full-Stack Developer
              specializing in the <b>MERN stack</b>. I love building clean,
              responsive, and user-friendly web applications. My goal is to
              create products that bring real-world impact and great user
              experiences.
            </Text>
          </Box>
        </Flex>
      </motion.div>
    </Box>
  );
}

export default About;
