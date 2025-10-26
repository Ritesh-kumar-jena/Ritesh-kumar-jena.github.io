import { Box, Heading, SimpleGrid, VStack, Text, Icon } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

const skills = [
  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS3", icon: FaCss3Alt },
  { name: "JavaScript", icon: FaJs },
  { name: "React", icon: FaReact },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express.js", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
];

function Skills({ id }) {
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
          My Skills
        </Heading>

        <SimpleGrid columns={{ base: 2, sm: 3, md: 4 }} spacing={8}>
          {skills.map((skill) => (
            <VStack
              key={skill.name}
              p={4}
              borderWidth="1px"
              borderRadius="xl"
              shadow="md"
              _hover={{ transform: "scale(1.05)", transition: "0.3s" }}
            >
              <Icon as={skill.icon} boxSize={10} color="teal.400" />
              <Text fontWeight="bold">{skill.name}</Text>
            </VStack>
          ))}
        </SimpleGrid>
      </motion.div>
    </Box>
  );
}

export default Skills;
