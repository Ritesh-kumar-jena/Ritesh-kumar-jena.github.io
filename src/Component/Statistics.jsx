import { Box, Heading, SimpleGrid, VStack, Text, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

const stats = [
  { number: "1500+", label: "Hours of Coding" },
  { number: "500+", label: "DSA Problems" },
  { number: "100+", label: "Hours of Soft Skills" },
];

export default function Statistics() {
    const headingColor = useColorModeValue("teal.600", "teal.400")
    const bgColor=useColorModeValue("gray.200", "gray.700")
    const textColor=useColorModeValue("black", "white")
  return (
    <Box id="statistics" minH="60vh" px={1} py={1} >
      {/* Title */}
      <Heading
        textAlign="center"
        mb={12}
        fontWeight="bold"
        fontSize="3xl"
        color={headingColor}
        textDecoration="underline"
      >
        Statistics
      </Heading>

      {/* Statistics Grid */}
      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        spacing={10}
        maxW="6xl"
        mx="auto"
      >
        {stats.map((item) => (
          <MotionBox
            key={item.label}
            bg={bgColor}
            p={10}
            borderRadius="xl"
            textAlign="center"
            boxShadow="md"
            color="black"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
           _hover={{
              scale: 1.05,
              backgroundColor: "#22d3ee",
            }}
          >
            <Text fontSize="3xl" fontWeight="bold" color={textColor}>
              {item.number}
            </Text>

            <Text mt={2} fontSize="md" opacity={0.9} color={textColor}>
              {item.label}
            </Text>
          </MotionBox>
        ))}
      </SimpleGrid>
    </Box>
  );
}
