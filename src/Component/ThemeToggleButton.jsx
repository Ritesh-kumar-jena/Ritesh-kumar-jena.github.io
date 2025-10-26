import { IconButton, useColorMode } from '@chakra-ui/react';
import { LuMoon, LuSun } from 'react-icons/lu'

function ThemeToggleButton() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton 
    onClick={toggleColorMode}
     icon={colorMode === 'light' ? <LuMoon /> : <LuSun />}
     aria-label="Toggle dark mode"
     variant="ghost"
     size={{ base: 'sm', md: 'md', lg: 'lg' }}
     m={{ base: 1, md: 2 }}
    />
  );
}

export default ThemeToggleButton;
