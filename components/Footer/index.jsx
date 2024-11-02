import {
  Box,
  Container,
  Divider,
  Flex,
  HStack,
  Image,
  Text,
  Link,
  Center,
} from "@chakra-ui/react";

export default function Footer() {
  return (
    <>
      <Container maxW="5xl">
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
            md: "column",
            lg: "column",
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
          <Box my={{ md: "40px", lg: "auto" }} maxW={"450px"}>
            <Flex justifyContent={{ base: "center", md: "center", xl: "left" }}>
              <Link href="/" _hover={{ TextDecoder: "none" }}>
                <HStack mx="auto" spacing="12px">
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
            </Flex>
            <Text
              textAlign={"justify"}
              my="20px"
              fontSize={"16px"}
              fontWeight="400"
              color="rgba(255, 255, 255, 0.6)"
            >
              Several creative people gather in the same place - thats Aganta.
              We collaborate to produce the best results, loved by clients and
              comfortable for users.
            </Text>
            <Flex
              mb="20px"
              justifyContent={{ base: "center", md: "center", xl: "left" }}
            >
              <Flex gap="8px">
                <Link target="_blank" href="https://instagram.com/aganta.id">
                  <Image alt="instagram" src="/icon-social/instagram.png" />
                </Link>
                <Link target="_blank" href="https://wa.me/628996734208">
                  <Image alt="whatsapp" src="/icon-social/wa.png" />
                </Link>
                <Link target="_blank" href="https://www.tiktok.com/@aganta.id">
                  <Image alt="tiktok" src="/icon-social/tiktok.png" />
                </Link>
              </Flex>
            </Flex>
            {/* <Text fontSize={'16px'} fontWeight='400' color='rgba(255, 255, 255, 0.6)'>Design By Collosal LLC</Text> */}
          </Box>
          <Flex
            minW={"auto"}
            maxWidth={"450px"}
            gap={"40px"}
            direction={{ base: "column", md: "row" }}
            justifyContent={{ md: "space-between" }}
            textAlign={{ base: "center" }}
          >
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
              <Link
                _hover={{ TextDecoder: "none" }}
                href="/howwework"
              >
                <Text
                  mb="10px"
                  fontSize={"16px"}
                  fontWeight="400"
                  color="rgba(255, 255, 255, 0.6)"
                >
                  How We Work
                </Text>
              </Link>
              <Link _hover={{ TextDecoder: "none" }} href="/projects">
                <Text
                  mb="10px"
                  fontSize={"16px"}
                  fontWeight="400"
                  color="rgba(255, 255, 255, 0.6)"
                >
                  Projects
                </Text>
              </Link>
              {/* <Link href='/comingSoon'>
                        <Text mb='10px' fontSize={'16px'} fontWeight='400' color='rgba(255, 255, 255, 0.6)'>Send Quote</Text>
                    </Link> */}
              {/* <Link href='/comingSoon'>
                        <Text mb='10px' fontSize={'16px'} fontWeight='400' color='rgba(255, 255, 255, 0.6)'>Privacy Policy</Text>
                    </Link> */}
              {/* <Link href="/" _hover={{ TextDecoder: "none" }}>
                <Text
                  mb="10px"
                  fontSize={"16px"}
                  fontWeight="400"
                  color="rgba(255, 255, 255, 0.6)"
                >
                  Term of Service
                </Text>
              </Link> */}
              {/* <Link href='/comingSoon'>
                        <Text fontSize={'16px'} fontWeight='400' color='rgba(255, 255, 255, 0.6)'>Jobs</Text>
                    </Link> */}
            </Box>
            <Box mb="auto">
              <Text fontSize={"14px"} fontWeight="500" color="#fff">
                Services
              </Text>

              <Text
                mt="20px"
                mb="10px"
                fontSize={"16px"}
                fontWeight="400"
                color="rgba(255, 255, 255, 0.6)"
              >
                UI / UX Design
              </Text>

              <Text
                mb="10px"
                fontSize={"16px"}
                fontWeight="400"
                color="rgba(255, 255, 255, 0.6)"
              >
                Web Development
              </Text>

              <Text
                mb="10px"
                fontSize={"16px"}
                fontWeight="400"
                color="rgba(255, 255, 255, 0.6)"
              >
                Mobile Development
              </Text>

              <Text
                mb="10px"
                fontSize={"16px"}
                fontWeight="400"
                color="rgba(255, 255, 255, 0.6)"
              >
                Back End / Custom API
              </Text>

              <Text
                fontSize={"16px"}
                fontWeight="400"
                color="rgba(255, 255, 255, 0.6)"
              >
                Developer as Service
              </Text>

              <Text
                mt="10px"
                fontSize={"16px"}
                fontWeight="400"
                color="rgba(255, 255, 255, 0.6)"
              >
                Support and Maintenance
              </Text>
            </Box>
            <Box mb="auto" maxW={"200px"}>
              <Text fontSize={"14px"} fontWeight="500" color="#fff">
                Contact
              </Text>
              <Link
                href="https://mail:cv.agantateknologisolutif@gmail.com"
                _hover={{ TextDecoder: "none" }}
              >
                <Text
                  mt="20px"
                  mb="10px"
                  fontSize={"16px"}
                  fontWeight="400"
                  color="rgba(255, 255, 255, 0.6)"
                >
                  cv.agantateknologisolutif@gmail.com
                </Text>
              </Link>
              <Link
                _hover={{ TextDecoder: "none" }}
                href="https://wa.me/628996734208"
              >
                <Text
                  mb="10px"
                  fontSize={"16px"}
                  fontWeight="400"
                  color="rgba(255, 255, 255, 0.6)"
                >
                  +62 899-6734-208
                </Text>
              </Link>
              {/* <Link href='/comingSoon'>
                        <Text mb='10px' fontSize={'16px'} fontWeight='400' color='rgba(255, 255, 255, 0.6)'>Send Quote</Text>
                    </Link> */}
              {/* <Link href='/comingSoon'>
                        <Text mb='10px' fontSize={'16px'} fontWeight='400' color='rgba(255, 255, 255, 0.6)'>Privacy Policy</Text>
                    </Link> */}
              <Link
                href="https://goo.gl/maps/oaugeWMXqAdF7dpR6"
                _hover={{ TextDecoder: "none" }}
              >
                <Text
                  mb="10px"
                  fontSize={"16px"}
                  fontWeight="400"
                  color="rgba(255, 255, 255, 0.6)"
                >
                  Jl. Dato Ripanggentungang, Paccinongang, Kec. Somba Opu, Gowa
                  Regency, South Sulawesi
                </Text>
              </Link>
              {/* <Link href='/comingSoon'>
                        <Text fontSize={'16px'} fontWeight='400' color='rgba(255, 255, 255, 0.6)'>Jobs</Text>
                    </Link> */}
            </Box>
          </Flex>
          {/* <Box mb="auto">
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
          </Box> */}
        </Flex>
        <Center textAlign={"center"} pb="40px">
          <Text
            fontSize={"16px"}
            fontWeight="500"
            color="rgba(255, 255, 255, 0.6)"
          >
            © 2024 Aganta.id . All Rights Reserved.
          </Text>
        </Center>
      </Container>
    </>
  );
}
