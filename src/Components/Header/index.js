import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Image,
  Link,
  Flex,
  Spacer,
  Center,
  Box,
  Icon,
  Text,
  IconButton,
  Container,
} from "@chakra-ui/react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import Logo from './img/angelopaneLogo.png';

function Header() {
  return (
    <Box bg="gray.200" py={2}>
      <Flex maxW="1200px" mx="auto" px={4} alignItems="center" justifyContent="space-between">
        <Flex alignItems="center">
          <IconButton colorScheme="blue" aria-label="Facebook" icon={<Icon as={LinkedInIcon} />} mr={2} />
          <IconButton colorScheme="blue" aria-label="Twitter" icon={<Icon as={GitHubIcon} />} mr={2} />
          <IconButton colorScheme="blue" aria-label="Instagram" icon={<Icon as={MailIcon} />} />
        </Flex>

        <Link>
        <Image src={Logo} ></Image>
        </Link>

        <Box>
        <Breadcrumb paddingLeft={0}>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">Docs</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">Breadcrumb</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        </Box>
      </Flex>
    </Box>
   
  );
}
export default Header;
