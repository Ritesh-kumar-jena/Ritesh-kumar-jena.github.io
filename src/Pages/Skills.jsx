import { Box, Heading, SimpleGrid, VStack, Text, Icon } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaNpm } from "react-icons/fa";
import { SiMongodb, SiExpress,SiRedux,SiTailwindcss,SiChakraui, SiPostman } from "react-icons/si";
import { GiBrain, GiArtificialIntelligence } from "react-icons/gi";
import { MdOutlineArchitecture } from "react-icons/md";

const skills = [
  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS3", icon: FaCss3Alt },
  { name: "JavaScript", icon: FaJs },
  { name: "React", icon: FaReact },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express.js", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Redux", icon: SiRedux },
  { name: "Chakra UI", icon: SiChakraui },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Postman", icon: SiPostman },
  { name: "npm", icon: FaNpm },
  { name: "Git", icon: FaGitAlt },
  { name: "DSA", icon: GiBrain },
  { name: "Prompting & AI", icon: GiArtificialIntelligence },
  { name: "Context Architecture & RAG", icon: MdOutlineArchitecture }
];

function Skills({ id }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Box ref={ref} id={id} minH="90vh" px={6} py={12}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <Heading textAlign="center" mb={10} fontWeight="bold">
          My <Text as="span" color="red.500">Technical</Text> Skills
        </Heading>

        <SimpleGrid
          columns={{ base: 2, sm: 3, md: 4,lg:6}}
          spacingX={1}
          spacingY={5}
          justifyItems="center"
        >
          {skills.map((skill) => (
            <VStack
              key={skill.name}
              bg="gray.300"
              borderRadius="xl"
              p={4}
              w="110px"
              h="110px"
              justify="center"
              align="center"
              boxShadow="md"
              transition="all 0.3s"
              _hover={{
                transform: "translateY(-6px)",
                boxShadow: "xl",
                bg: "gray.400",
              }}
            >
              <Icon as={skill.icon} boxSize={10} color="teal.400" />
              <Text fontWeight="semibold" fontSize="sm" textAlign="center">
                {skill.name}
              </Text>
            </VStack>
          ))}
        </SimpleGrid>
      </motion.div>
    </Box>
  );
}

export default Skills;

