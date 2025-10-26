import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  Image,
  Button,
  HStack,
} from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "LinkUp – Professional Networking App",
    desc: "A LinkedIn-inspired networking platform built with MERN stack.",
    img: "/assets/linkup.png",
    github: "https://github.com/Ritesh-kumar-jena/LinkUp",
    live: "https://linkup.vercel.app",
  },
  {
    title: "Financial Time Machine",
    desc: "A finance data projection tool using Chakra UI and Node backend.",
    img: "/assets/financemachine.png",
    github: "https://github.com/Ritesh-kumar-jena/Financial-Time-Machine",
    live: "https://financial-time-machine.vercel.app",
  },
  {
    title: "QuoteSage – Daily Quote App",
    desc: "React app showing random quotes with theme toggle and favorites.",
    img: "/assets/quotesage.png",
    github: "https://github.com/Ritesh-kumar-jena/QuoteSage",
    live: "https://quotesage.vercel.app",
  },
];

function Project({id}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Box ref={ref} id={id} minH="90vh" px={6} py={12}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Heading textAlign="center" mb={10}>
          My Projects
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {projects.map((p) => (
            <VStack
              key={p.title}
              borderWidth="1px"
              borderRadius="2xl"
              shadow="lg"
              overflow="hidden"
              align="start"
              _hover={{ transform: "scale(1.03)", transition: "0.3s" }}
            >
              <Image src={p.img} alt={p.title} w="100%" h="180px" objectFit="cover" />
              <Box p={4}>
                <Text fontWeight="bold" fontSize="xl" mb={2}>
                  {p.title}
                </Text>
                <Text mb={3}>{p.desc}</Text>
                <HStack spacing={4}>
                  <Button as="a" href={p.github} target="_blank" colorScheme="teal" size="sm">
                    GitHub
                  </Button>
                  <Button as="a" href={p.live} target="_blank" colorScheme="cyan" size="sm">
                    Live Demo
                  </Button>
                </HStack>
              </Box>
            </VStack>
          ))}
        </SimpleGrid>
      </motion.div>
    </Box>
  );
}

export default Project;
