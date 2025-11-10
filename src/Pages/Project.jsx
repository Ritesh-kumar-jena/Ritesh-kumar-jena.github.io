import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  Image,
  Button,
  HStack,
  useColorModeValue,
  useBreakpointValue
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionVStack = motion.create(VStack);

const projects = [
  {
    title: " E-Commerce Platform – Beauty & Skincare",
    desc: "Developed a full-stack, fully responsive e-commerce web application inspired by Nykaa using React and Chakra UI, and built the backend with Node.js and Express. Implemented dynamic categories, live search, dark mode, and React Router navigation, and designed key UI pages including Wishlist, Cart, Orders, and Payment.",
    TechStack: "React, Chakra UI, React Router, Axios, Context API, HTML, CSS, JavaScript, Node.js, Express.js, MongoDB",
    Role: "Individual Project",
    img: "https://res.cloudinary.com/dy9gltg7s/image/upload/v1762704320/Screenshot_2025-11-09_213122_h89rh1.png",
    github: "https://github.com/Ritesh-kumar-jena/Nykaa",
    live: "https://n-y-k-a-a-platform-by-ritesh.netlify.app/",
  },
  {
    title: " Real Estate Property Listing Ul",
    desc: "Developed a modern real estate listing interface using React, Vite, and Tailwind CSS, featuring property listings, detail pages, dark mode, favorites, Google Maps integration, and an image carousel. Optimized navigation and performance with React Router and Vite.",
    TechStack: "React, Vite, Tailwind CSS, React Router, Context API",
    Role: "Individual Project",
    img: "https://res.cloudinary.com/dy9gltg7s/image/upload/v1760206658/Screenshot_2025-10-11_234140_xnacfm.png",
    github: "https://github.com/Ritesh-kumar-jena/Real-Estate-Property-Listing-UI",
    live: "https://real-estate-property-listing-ritesh.netlify.app/",
  },
  {
    title: "City Weather Map",
    desc: "City Weather Map is an interactive and responsive weather app that lets users search any city and view real-time weather details, including temperature, min/max values, clouds, wind speed, sunrise/sunset, a 5-day forecast, and an automatically updated Google Map for the selected location.",
    TechStack: "HTML5, CSS3, JavaScript, OpenWeatherMap API, Google Maps Embed API",
    Role: "Individual Project",
    img: "https://res.cloudinary.com/dy9gltg7s/image/upload/v1762710829/Screenshot_2025-11-09_232156_qgtt0a.png",
    github: "https://github.com/Ritesh-kumar-jena/city-weather-map",
    live: "https://city-weather-map-by-ritesh.netlify.app/",
  }

];

function Project({ id }) {

  const headingColor = useColorModeValue("teal.600", "teal.400");
  const columnCount = useBreakpointValue({ base: 1, md: 2, lg: 3 });

  return (
    <Box id={id} minH="90vh" px={6} py={6}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Heading textAlign="center" mb={10} color={headingColor}>
          My Projects
        </Heading>
      </motion.div>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        {projects.map((p, index) => {
          const rowIndex = Math.floor(index / columnCount); // find which row this card is in

          return (
            <MotionVStack
              key={p.title + "-" + index}
              borderWidth="1px"
              borderRadius="2xl"
              shadow="lg"
              overflow="hidden"
              align="start"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: rowIndex * 0.16,
              }}
              position="relative"
              transitionProperty="all"
              _hover={{
                transform: "scale(1.03)",
                boxShadow: "0 0 18px rgba(0, 255, 255, 0.6)",
                borderColor: "cyan",
              }}
            >
              {/*  Image zoom container */}
              <Box w="100%" h="180px" overflow="hidden">
                <Image
                  src={p.img}
                  alt={p.title}
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  transition="0.4s ease"
                  _hover={{ transform: "scale(1.12)" }} //  image zoom 
                />
              </Box>

              <Box p={4}>
                <Text fontWeight="bold" fontSize="xl" mb={2} color={headingColor}>
                  {p.title}
                </Text>

                <Text mb={3}>{p.desc}</Text>
                <Text fontSize="sm" mt={2}>
                  <Text as="b" color={headingColor}>Tech Stack: </Text>
                  {p.TechStack}
                </Text>

                <Text fontSize="sm" mt={1} mb={3}>
                  <Text as="b" color={headingColor}>Role: </Text>
                  {p.Role}
                </Text>

                <HStack spacing={4}>
                  <Button
                    as="a"
                    href={p.github}
                    target="_blank"
                    colorScheme="teal"
                    size="sm"
                  >
                    GitHub
                  </Button>

                  <Button
                    as="a"
                    href={p.live}
                    target="_blank"
                    colorScheme="cyan"
                    size="sm"
                  >
                    Live Demo
                  </Button>
                </HStack>
              </Box>
            </MotionVStack>
          );
        })}
      </SimpleGrid>
    </Box>
  );
}

export default Project;
