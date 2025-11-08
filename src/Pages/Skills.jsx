import { Box, Heading, SimpleGrid, VStack, Text, Image, useColorModeValue,useBreakpointValue } from "@chakra-ui/react";
import { motion} from "framer-motion";
import { useRef } from "react";
import Statistics from "../Component/Statistics";

const MotionBox = motion.div;
const MotionVStack = motion.create(VStack)

const techStack = [
  { name: "HTML5", img: "https://res.cloudinary.com/dy9gltg7s/image/upload/v1762161698/html.8664168d5bc90b1a24396f85aadbf623_rdfqbq.svg" },
  { name: "CSS3", img: "https://res.cloudinary.com/dy9gltg7s/image/upload/v1762161750/css.39769a8bd378bf410d6b381a8d88fa35_bgprbo.svg" },
  { name: "JavaScript", img: "https://res.cloudinary.com/dy9gltg7s/image/upload/v1762161822/javascript.4c1b5332c1b1057928f6f06cf972c91c_vo4358.svg" },
  { name: "React", img: "https://res.cloudinary.com/dy9gltg7s/image/upload/v1762161886/react.4e0c97009b885bfa75c5412262a46f5f_xrliau.svg" },
  { name: "Node.js", img: "https://res.cloudinary.com/dy9gltg7s/image/upload/v1762162012/nodejs.10c9e2aa0ca7edf36fceae25fec038a1_kjvhry.svg" },
  { name: "Express.js", img: "https://res.cloudinary.com/dy9gltg7s/image/upload/v1762162116/express.4925c0127df8857c18b38329795ce88f_yscifa.svg" },
  { name: "MongoDB", img: "https://res.cloudinary.com/dy9gltg7s/image/upload/v1762162164/mongodb.6835c61a518a732eb8318d43dfe8f700_yscg8a.svg" },
  { name: "Redux", img: "https://res.cloudinary.com/dy9gltg7s/image/upload/v1762162205/redux.7fe607aacc31f6e6199e70f16aae407e_vthz5s.svg" },
  { name: "Chakra UI", img: "https://res.cloudinary.com/dy9gltg7s/image/upload/v1762162268/chakra.15320604467d004df871_fqgxfu.png" },
  { name: "Tailwind CSS", img: "https://res.cloudinary.com/dy9gltg7s/image/upload/v1762162391/8xILRKD_xffwvx.png" },
  { name: "DSA", img: "https://res.cloudinary.com/dy9gltg7s/image/upload/v1762454244/brean-removebg-preview_otuwtx.png" },
  { name: "Prompting & AI", img: "https://res.cloudinary.com/dy9gltg7s/image/upload/v1762454312/prompt_nk9yey.jpg" },
  { name: "Context Architecture & RAG", img: "https://res.cloudinary.com/dy9gltg7s/image/upload/v1762454347/rag-high-level-flow_lhbfi4.webp" },
];

const tools = [
  { name: "Git", img: "https://res.cloudinary.com/dy9gltg7s/image/upload/v1762162694/git.c08353563539c6459b353f29d8dd7bf2_ougw70.svg" },
  { name: "npm", img: "https://res.cloudinary.com/dy9gltg7s/image/upload/v1762162840/npm.87689eab730642c86d2b01f3ef4a19e3_temgqo.svg" },
  { name: "Postman", img: "https://res.cloudinary.com/dy9gltg7s/image/upload/v1762162909/upxyafk9i6qgmhaak8e0.png" },
  { name: "Vite", img: "https://res.cloudinary.com/dy9gltg7s/image/upload/v1762456120/vite-js-logo-removebg-preview_qwsdnm.png" },
  { name: "VS Code", img: "https://res.cloudinary.com/dy9gltg7s/image/upload/v1762456068/visual-studio-code-removebg-preview_uir2ka.png" },
];

function Skills({ id }) {
  const ref = useRef(null);
  const headingColor = useColorModeValue("teal.600", "teal.400");
  const textColor = useColorModeValue("gray.800", "gray.700");
  const columnCount = useBreakpointValue({ base: 2, sm: 3, md: 4, lg: 5 }) 

  return (
    <>
      <Box ref={ref} id={id} minH="90vh" px={6} py={12}>
        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <Heading textAlign="center" mb={10} fontWeight="bold">
            My <Text as="span" color={headingColor}>Technical</Text> Skills
          </Heading>

          {/* ✅ TECH STACK SECTION */}
          <Heading fontSize="2xl" mb={6} color={headingColor} textAlign="center">
            Tech Stack
          </Heading>

          {/* ✅ Grid width limited to 75% */}
          <Box maxW="75%" mx="auto">
            <SimpleGrid
              columns={{ base: 2, sm: 3, md: 4, lg: 5 }}
              columnGap={4}
              rowGap={6}
              justifyItems="center"
              mb={8}
            >
              {techStack.map((skill,index) => {
                const rowIndex = Math.floor(index / columnCount)
                return(
                  <MotionVStack
                  key={skill.name + "-" + rowIndex}
                  bg="gray.400"
                  borderRadius="xl"
                  p={5}
                  w="120px"
                  h="120px"
                  justify="center"
                  align="center"
                  boxShadow="md"
                  initial={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.6, ease: "easeOut",delay: rowIndex * 0.25 }}
                  viewport={{ once: false, amount: 0.3  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  _hover={{
                    transform: "translateY(-6px)",
                    boxShadow: "xl",
                    bg: "gray.300",
                  }}
                >
                  <Image src={skill.img} objectFit="cover" alt={skill.name} boxSize="50px" />
                  <Text fontWeight="semibold" fontSize="sm" textAlign="center" color={textColor}>
                    {skill.name}
                  </Text>
                </MotionVStack>
                )
                
              })}
            </SimpleGrid>
          </Box>

          {/* ✅ TOOLS SECTION */}
          <Heading fontSize="2xl" mb={6} color={headingColor} textAlign="center">
            Tools
          </Heading>

          <Box maxW="75%" mx="auto">
            <SimpleGrid
              columns={{ base: 2, sm: 3, md: 4, lg: 5 }}
              columnGap={4}
              rowGap={4}
              justifyItems="center"
            >
              {tools.map((tool,index) => {
                const rowIndex = Math.floor(index / columnCount)
                return(<MotionVStack
                  key={tool.name + "-" +rowIndex}
                  bg="gray.400"
                  borderRadius="xl"
                  p={5}
                  w="110px"
                  h="110px"
                  justify="center"
                  align="center"
                  boxShadow="md"
                  initial={{ opacity: 0, x: -50 }}
                  viewport={{ once: false, amount: 0.3  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut",delay: rowIndex * 0.25 }}
                  _hover={{
                    transform: "translateY(-6px)",
                    boxShadow: "xl",
                    bg: "gray.300",
                  }}
                >
                  <Image src={tool.img} alt={tool.name} boxSize="50px" objectFit="cover" />
                  <Text fontWeight="semibold" fontSize="sm" textAlign="center" color={textColor}>
                    {tool.name}
                  </Text>
                </MotionVStack>
                )
                
             })}
            </SimpleGrid>
          </Box>
        </MotionBox>
      </Box>

      <Statistics />
    </>
  );
}

export default Skills;
