import {
  useDisclosure,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Hide,
  HStack,
  Image,
  Link,
  Stack,
  Text,
  VStack,
  Container,
} from "@chakra-ui/react";
import React from "react";

function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button
        ref={btnRef}
        fontFamily="Poppins"
        bgColor="#0E1035"
        color="#fff"
        w="auto"
        h="48px"
        onClick={onOpen}
      >
        <Stack>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 6.23029H21"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M9.49023 12H21.0002"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M3 12H5.99"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M3 17.7697H21"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </Stack>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bgColor="#0B0B22">
          <DrawerCloseButton color="#fff" />
          <DrawerHeader color={"#fff"}></DrawerHeader>

          <DrawerBody>
            <VStack spacing="50px">
              {/* <Link href='/comingSoon'><Text fontSize={'16px'} color='#fff'>Services</Text></Link> */}

              <Link href="/about">
                <Text fontSize={"16px"} color="#fff">
                  About
                </Text>
              </Link>
              <Link href="/projects">
                <Text fontSize={"16px"} color="#fff">
                  Projects
                </Text>
              </Link>
              <Link href="/howwework">
                <Text fontSize={"16px"} color="#fff">
                  How We Work
                </Text>
              </Link>
            </VStack>

            <Link href="https://wa.me/628996734208">
              <Button
                ml="80px"
                mt="50px"
                size="lg"
                fontSize="14px"
                height="39px"
                width="112px"
                bgColor="#011627"
                color="#fff"
                _hover="#011627"
                _active={{
                  bg: "#011627",
                  transform: "scale(0.98)",
                  borderColor: "#bec3c9",
                }}
              >
                Contact
              </Button>
            </Link>
          </DrawerBody>

          <DrawerFooter>
            <Button
              variant="outline"
              mr={3}
              onClick={onClose}
              border="none"
              color="#fff"
              bgColor="#FC165B"
            >
              Close
            </Button>
            {/* <Button colorScheme='blue'>Save</Button> */}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

const Navbar = () => {
  return (
    <Container maxW="8xl">
      <Box>
        <Flex justifyContent={"space-between"}>
          <Link href="/" _hover={{ TextDecoder: "none" }}>
            <HStack spacing="12px">
              <Image src="/aganta2.png" w="42px" h="42px" alt="logo" />
              <Text
                letterSpacing={"0.1em"}
                fontSize={"24px"}
                fontWeight={"700"}
                color="#fff"
              >
                Aganta
              </Text>
            </HStack>
          </Link>

          <Flex
            display={{
              base: "inline",
              md: "inline",
              lg: "none",
              xl: "none",
              "2xl": "none",
            }}
          >
            <DrawerExample />
          </Flex>

          <Hide below="lg">
            <HStack spacing="50px">
              {/* <Link _hover={{TextDecoder:'none'}} href='/comingSoon'><Text fontSize={'16px'} color='#fff'>Services</Text></Link> */}
              <Link _hover={{ TextDecoder: "none" }} href="/about">
                <Text fontSize={"16px"} color="#fff">
                  About
                </Text>
              </Link>
              <Link _hover={{ TextDecoder: "none" }} href="/projects">
                <Text fontSize={"16px"} color="#fff">
                  Projects
                </Text>
              </Link>
              <Link _hover={{ TextDecoder: "none" }} href="/howwework">
                <Text fontSize={"16px"} color="#fff">
                  How We Work
                </Text>
              </Link>
            </HStack>

            <Link
              _hover={{ TextDecoder: "none" }}
              href="https://wa.me/628996734208"
            >
              <Button
                size="lg"
                fontSize="14px"
                height="39px"
                width="112px"
                bgColor="rgba(255, 255, 255, 0.1)"
                color="#fff"
                _hover={{ bg: "rgba(255, 255, 255, 0.1)" }}
                _active={{
                  bg: "rgba(255, 255, 255, 0.1)",
                  transform: "scale(0.98)",
                  borderColor: "#bec3c9",
                }}
              >
                Contact
              </Button>
            </Link>
          </Hide>
        </Flex>
      </Box>
    </Container>
  );
};

export default Navbar;
