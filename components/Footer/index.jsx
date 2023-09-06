import {
  Box,
  Container,
  Divider,
  Flex,
  HStack,
  Image,
  Text,
  Link,
} from "@chakra-ui/react";

export default function Footer() {
  return (
    <>
      <Container maxW="8xl">
        {/* <Box py={{base:'22px',xl:'46px'}} h={{base:'440px',md:'284px',lg:'190px',xl:'190px','2xl':'190px'}} w='100%' borderTop={'2px solid rgba(255, 255, 255, 0.1)'} borderBottom={'2px solid rgba(255, 255, 255, 0.1)'}>
                <Flex direction={{base:'column',md:'column',lg:'row',xl:'row','2xl':'row'}} alignItems='center' textAlign={{base:'center',md:'center',lg:'left',xl:'left','2xl':'left'} } justifyContent='space-between'>
                    <Text fontSize={'30px'} fontWeight={'700'} color='#fff'>We have prepared everything, its time for you to tell the problem</Text>
                    <Stack direction={{base:'column',md:'row',lg:'row',xl:'row','2xl':'row'}}  spacing='23px' mt={{base:'40px',md:'40px',lg:'0px',xl:'0px','2xl':'0px'}} >
                        <Link href={'/comingSoon'}>
                            <Button
                                size='lg'
                                fontSize='16px'
                                fontWeight={'600'}
                                height='52px'
                                width='202px'
                                bgColor='#6016FC'
                                color='#fff'
                                _hover={{ bg: '#6016FC' }}
                                _active={{
                                bg: '#6016FC',
                                transform: 'scale(0.98)',
                                borderColor: '#bec3c9',
                            }}
                            >
                            Send Quote
                            </Button>
                        </Link>
                        <Link href="/comingSoon">
                            <Button
                                size='lg'
                                fontSize='16px'
                                fontWeight={'600'}
                                height='52px'
                                width='202px'
                                bgColor='rgba(255, 255, 255, 0.1)'
                                color='#fff'
                                _hover={{ bg: 'rgba(255, 255, 255, 0.1)' }}
                                _active={{
                                bg: 'rgba(255, 255, 255, 0.1)',
                                transform: 'scale(0.98)',
                                borderColor: '#bec3c9',
                                }}
                                >
                                Ask Us
                            </Button>
                        </Link>
                    </Stack>
                </Flex>
            </Box> */}
        <Divider />
        <Flex
          pb="65px"
          direction={{
            base: "column",
            md: "row",
            lg: "row",
            xl: "row",
            "2xl": "row",
          }}
          gap={{ base: "40px", md: "0px" }}
          justifyContent="space-between"
          mt="105px"
          alignItems={{
            base: "center",
            md: "left",
            lg: "left",
            xl: "left",
            "2xl": "left",
          }}
          textAlign={{
            base: "center",
            md: "left",
            lg: "left",
            xl: "left",
            "2xl": "left",
          }}
        >
          <Box mb="auto">
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
            <Text
              mt="21px"
              mb="10px"
              fontSize={"16px"}
              fontWeight="500"
              color="rgba(255, 255, 255, 0.6)"
            >
              Copyright © 2023
            </Text>
            {/* <Text fontSize={'16px'} fontWeight='400' color='rgba(255, 255, 255, 0.6)'>Design By Collosal LLC</Text> */}
          </Box>
          <Box mb="auto">
            <Text fontSize={"14px"} fontWeight="500" color="#fff">
              Services
            </Text>
            <Link href="/">
              <Text
                mt="20px"
                mb="10px"
                fontSize={"16px"}
                fontWeight="400"
                color="rgba(255, 255, 255, 0.6)"
              >
                UI / UX Design
              </Text>
            </Link>
            <Link href="/">
              <Text
                mb="10px"
                fontSize={"16px"}
                fontWeight="400"
                color="rgba(255, 255, 255, 0.6)"
              >
                Web Development
              </Text>
            </Link>
            <Link href="/">
              <Text
                mb="10px"
                fontSize={"16px"}
                fontWeight="400"
                color="rgba(255, 255, 255, 0.6)"
              >
                Mobile Development
              </Text>
            </Link>
            <Link href="/">
              <Text
                mb="10px"
                fontSize={"16px"}
                fontWeight="400"
                color="rgba(255, 255, 255, 0.6)"
              >
                Back End / Custom API
              </Text>
            </Link>
            <Link href="/">
              <Text
                fontSize={"16px"}
                fontWeight="400"
                color="rgba(255, 255, 255, 0.6)"
              >
                Developer as Service
              </Text>
            </Link>
            <Link href="/">
              <Text
                mt="10px"
                fontSize={"16px"}
                fontWeight="400"
                color="rgba(255, 255, 255, 0.6)"
              >
                Support and Maintenance
              </Text>
            </Link>
          </Box>
          <Box mb="auto">
            <Text fontSize={"14px"} fontWeight="500" color="#fff">
              Company
            </Text>
            <Link href="/about" _hover={{ TextDecoder: "none" }}>
              <Text
                mt="20px"
                mb="10px"
                fontSize={"16px"}
                fontWeight="400"
                color="rgba(255, 255, 255, 0.6)"
              >
                About
              </Text>
            </Link>
            <Link href={"/comingSoon"} _hover={{ TextDecoder: "none" }}>
              <Text
                mb="10px"
                fontSize={"16px"}
                fontWeight="400"
                color="rgba(255, 255, 255, 0.6)"
              >
                Contact
              </Text>
            </Link>
            {/* <Link href='/comingSoon'>
                        <Text mb='10px' fontSize={'16px'} fontWeight='400' color='rgba(255, 255, 255, 0.6)'>Send Quote</Text>
                    </Link> */}
            {/* <Link href='/comingSoon'>
                        <Text mb='10px' fontSize={'16px'} fontWeight='400' color='rgba(255, 255, 255, 0.6)'>Privacy Policy</Text>
                    </Link> */}
            <Link
              href="/calegta/privacy-policy"
              _hover={{ TextDecoder: "none" }}
            >
              <Text
                mb="10px"
                fontSize={"16px"}
                fontWeight="400"
                color="rgba(255, 255, 255, 0.6)"
              >
                Term of Service
              </Text>
            </Link>
            {/* <Link href='/comingSoon'>
                        <Text fontSize={'16px'} fontWeight='400' color='rgba(255, 255, 255, 0.6)'>Jobs</Text>
                    </Link> */}
          </Box>
          <Box mb="auto">
            <Text fontSize={"14px"} fontWeight="500" color="#fff">
              Resource
            </Text>
            <Link href="/comingSoon">
              <Text
                mt="20px"
                mb="10px"
                fontSize={"16px"}
                fontWeight="400"
                color="rgba(255, 255, 255, 0.6)"
              >
                Support
              </Text>
            </Link>
            <Link href="/comingSoon">
              <Text
                mb="10px"
                fontSize={"16px"}
                fontWeight="400"
                color="rgba(255, 255, 255, 0.6)"
              >
                Documentation
              </Text>
            </Link>
            <Link href="/comingSoon">
              <Text
                mb="10px"
                fontSize={"16px"}
                fontWeight="400"
                color="rgba(255, 255, 255, 0.6)"
              >
                UI Design
              </Text>
            </Link>
            <Link href="/comingSoon">
              <Text
                mb="10px"
                fontSize={"16px"}
                fontWeight="400"
                color="rgba(255, 255, 255, 0.6)"
              >
                License
              </Text>
            </Link>
            <Link href="/comingSoon">
              <Text
                mb="10px"
                fontSize={"16px"}
                fontWeight="400"
                color="rgba(255, 255, 255, 0.6)"
              >
                Site Map
              </Text>
            </Link>
            <Link href="/comingSoon">
              <Text
                mb="10px"
                fontSize={"16px"}
                fontWeight="400"
                color="rgba(255, 255, 255, 0.6)"
              >
                Blog
              </Text>
            </Link>
            <Link href="/comingSoon">
              <Text
                fontSize={"16px"}
                fontWeight="400"
                color="rgba(255, 255, 255, 0.6)"
              >
                FAQ
              </Text>
            </Link>
          </Box>
        </Flex>
      </Container>
    </>
  );
}
