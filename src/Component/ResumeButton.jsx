import { Button} from '@chakra-ui/react';


function ResumeButton() {

 const handelclick=()=>{
    const resumeUrl = '/Ritesh-Kumar-Jena-Resume.pdf';
    window.open(resumeUrl, '_blank')

    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Ritesh_Resume.pdf';
    link.click();
 }
  return (
    <Button 
    onClick={handelclick}
     variant="ghost"
     size={{ base: 'sm', md: 'md', lg: 'lg' }}
     m={{ base: 1, md: 2 }}
     fontWeight="bold"
     _hover={{ color: 'red.600' }}
   >
    Resume
    </Button>
  );
}

export default ResumeButton;
