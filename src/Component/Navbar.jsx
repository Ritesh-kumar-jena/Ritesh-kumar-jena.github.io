import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Button,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import ThemeToggleButton from './ThemeToggleButton';
import ResumeButton from './ResumeButton';

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const Links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Project', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <Box px={4} boxShadow="sm" position="sticky" top="0" zIndex="10" bg="cyan.400" >
      <Flex h={16} alignItems="center" justifyContent="space-between" maxW="1200px" mx="auto">
        {/* Left: Logo */}
        <Box fontWeight="bold" fontSize={{ base: 'lg', md: 'xl' }}>
          RiteshPortfolio
        </Box>

        {/* Hamburger menu (mobile) */}
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />

        {/* Center: Links (desktop) */}
        <HStack spacing={6} display={{ base: 'none', md: 'flex' }}>
          {Links.map((link) => (
            <Button
              as="a"
              href={link.href}
              key={link.name}
              variant="ghost"
              fontWeight="bold"
              _hover={{ color: 'red.600' }}
            >
              {link.name}
            </Button>
          ))}
        </HStack>

        {/* Right: Theme toggle */}
        <ResumeButton/>
        <ThemeToggleButton />
      </Flex>

      {/* Mobile menu */}
      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as="nav" spacing={4}>
            {Links.map((link) => (
              <Button
                as="a"
                href={link.href}
                key={link.name}
                variant="ghost"
                fontWeight="medium"
                onClick={onClose} // close menu after click
              >
                {link.name}
              </Button>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}

export default Navbar;
