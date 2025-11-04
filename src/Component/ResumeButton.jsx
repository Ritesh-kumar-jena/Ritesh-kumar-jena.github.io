import { Button} from '@chakra-ui/react';


function ResumeButton({ variant = "ghost", colorScheme = "teal", size = "md" }) {

 const handleClick=()=>{
    const resumeUrl = '/Ritesh-Kumar-Jena-Resume.pdf';
    window.open(resumeUrl, '_blank')

    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Ritesh_Resume.pdf';
    link.click();
 }
  return (
    <Button 
    onClick={handleClick}
      variant={variant}
      colorScheme={colorScheme}
      size={size}
      fontWeight="bold"
      _hover={{
        transform: "scale(1.05)",
      }}
      transition="all 0.3s ease"
   >
    Resume
    </Button>
  );
}

export default ResumeButton;
