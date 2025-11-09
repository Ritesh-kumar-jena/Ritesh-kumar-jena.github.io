import { Box, Heading, Text, VStack, HStack, Image, Button, Link, IconButton} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ResumeButton from "../Component/ResumeButton";

 const MotionBox = motion.create(Box);;

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
      py={{ base: 10, md: 20 }}
    >
      <HStack
        flexDir={{ base: "column-reverse", md: "row" }}
        justify="space-between"
        align="center"
        maxW="6xl"
        spacing={{ base: 8, md: 16 }}
      >
        {/* ---------- LEFT CONTENT ---------- */}
        <VStack align="start" spacing={6}>
          {/*  Greeting */}
          <MotionBox
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Text fontSize="xl" color="teal.200" fontWeight="medium">
              Hello, It’s Me {" "}
              <motion.span 
              style={{ display: "inline-block", transformOrigin: "70% 70%",fontSize: "2.2rem"}}
              animate={{rotate: [0, 20, -10, 20, -6, 10, 0],}} // wave movement 
              transition={{ duration: 1.5,ease: "easeInOut",repeat: Infinity,repeatDelay: 2,}} // keeps waving forever
              >
                👋
             </motion.span>
            </Text>
          </MotionBox>

          {/*  Name */}
          <MotionBox
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Heading as="h1" size="2xl" lineHeight="short">
              Ritesh Kumar Jena
            </Heading>
          </MotionBox>

          {/*  Typewriter Titles */}
          <MotionBox
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Text fontSize="2xl" fontWeight="bold">
              And I’m a{" "}
              <Text as="span" color="teal.300">
                <Typewriter
                  words={[
                    "Full Stack Developer",
                    "MERN Stack Developer",
                    "Backend Developer",
                    "Frontend Developer",
                    "Web Developer",
                    "AI Prompt Engineer",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={60}
                  delaySpeed={1500}
                />
              </Text>
            </Text>
          </MotionBox>

          {/*  Description */}
          <MotionBox
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Text
              fontSize="md"
              color="gray.300"
              lineHeight="taller"
              fontFamily="'Poppins', sans-serif"
              maxW="3xl"
            >
              Creative thinker focused on solving modern business challenges through
              technical innovation. Skilled in developing production-ready web
              applications using HTML, CSS, JavaScript, React, Node.js, Express, and
              MongoDB — with an emphasis on delivering impressive user experiences.
            </Text>
          </MotionBox>

          {/*  Resume Button */}
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <HStack spacing={4}>
              <ResumeButton variant="solid" colorScheme="teal" size="lg" />
              <Button
                colorScheme="teal"
                variant="outline"
                size="lg"
                as="a"
                href="#projects"
              >
                View Projects
              </Button>
            </HStack>
            
            {/*  Social Icons */}
              <HStack spacing={4} pt={4}>
                <Link
                  href="https://github.com/Ritesh-kumar-jena"
                  isExternal
                >
                  <IconButton
                    aria-label="GitHub"
                    icon={<FaGithub />}
                    bg="#6e5494"
                    borderRadius="full"
                    color="white"
                    boxSize="45px"
                    fontSize="22px"
                    _hover={{ transform: "scale(1.1)" ,boxShadow: "0 0 10px rgba(110,84,148,0.5)"}}
                  />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/ritesh-kumar-jena-aa6407270"
                  isExternal
                >
                  <IconButton
                    aria-label="LinkedIn"
                    icon={<FaLinkedin />}
                    bg="#0077B5"
                    color="white"
                    borderRadius="full"
                    boxSize="45px"
                    fontSize="22px"
                    _hover={{  transform: "scale(1.1)",boxShadow: "0 0 10px rgba(0,119,181,0.5)" }}
                  />
                </Link>
              </HStack>
          </MotionBox>
        </VStack>

        {/* ---------- RIGHT IMAGE ---------- */}
        <MotionBox
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Image
            borderRadius="full"
            boxSize={{ base: "220px", md: "300px" }}
            src="/MyProfile.png"
            alt="Ritesh Kumar Jena"
            objectFit="cover"
            objectPosition="center 25%"
            boxShadow="0 0 25px rgba(255, 255, 255, 0.15)"
            border="4px solid white"
            _hover={{
              transform: "scale(1.05)",
              transition: "0.4s ease",
            }}
          />
        </MotionBox>
      </HStack>
    </Box>
  );
};

export default Home;
