import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Link,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import Layout from "../Layout";

const Contact = () => {
  return (
    <Box pb="120px">
      <Flex
        mt="90px"
        direction={{
          base: "column",
          md: "row",
          lg: "row",
          xl: "row",
          "2xl": "row",
        }}
        justifyContent="space-evenly"
        textAlign={{
          base: "center",
          md: "left",
          lg: "left",
          xl: "left",
          "2xl": "left",
        }}
      >
        <Box my="auto">
          <Text
            fontSize={"16px"}
            fontWeight={"600"}
            color="#16FCD2"
            letterSpacing={"0.1em"}
          >
            {" "}
            Contact
          </Text>
          <Text
            mt="13px"
            fontSize={"36px"}
            fontWeight="700"
            color="#fff"
            lineHeight="54px"
          >
            We love receiving messages from you, we are <br />
            waiting for it.
          </Text>
          <HStack spacing="28px" mt="50px">
            <Stack>
              <svg
                width="70"
                height="70"
                viewBox="0 0 70 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="70"
                  height="70"
                  rx="3"
                  fill="white"
                  fillOpacity="0.05"
                />
                <path
                  d="M38.8125 26.25C40.0335 26.4882 41.1555 27.0853 42.0351 27.9649C42.9147 28.8445 43.5118 29.9666 43.75 31.1875L38.8125 26.25ZM38.8125 21.25C41.3491 21.5318 43.7145 22.6677 45.5203 24.4713C47.3262 26.2748 48.4651 28.6388 48.75 31.175L38.8125 21.25ZM47.5 41.15V44.9C47.5015 45.2481 47.4301 45.5927 47.2907 45.9117C47.1512 46.2307 46.9467 46.517 46.6901 46.7523C46.4336 46.9877 46.1308 47.1669 45.801 47.2784C45.4712 47.3899 45.1218 47.4313 44.775 47.4C40.9286 46.9821 37.2338 45.6677 33.9875 43.5625C30.9673 41.6433 28.4067 39.0827 26.4875 36.0625C24.375 32.8015 23.0603 29.0887 22.65 25.225C22.6188 24.8793 22.6599 24.531 22.7707 24.202C22.8814 23.8731 23.0595 23.5709 23.2935 23.3145C23.5275 23.0582 23.8123 22.8534 24.1298 22.7132C24.4473 22.5729 24.7905 22.5003 25.1375 22.5H28.8875C29.4942 22.494 30.0823 22.7088 30.5422 23.1044C31.0022 23.5 31.3026 24.0493 31.3875 24.65C31.5458 25.8501 31.8394 27.0284 32.2625 28.1625C32.4307 28.6099 32.4671 29.0961 32.3674 29.5636C32.2677 30.0311 32.0361 30.4601 31.7 30.8L30.1125 32.3875C31.892 35.5169 34.4831 38.1081 37.6125 39.8875L39.2 38.3C39.5399 37.9639 39.969 37.7323 40.4364 37.6326C40.9039 37.5329 41.3901 37.5693 41.8375 37.7375C42.9716 38.1607 44.15 38.4542 45.35 38.6125C45.9572 38.6982 46.5118 39.004 46.9082 39.4719C47.3046 39.9397 47.5153 40.537 47.5 41.15Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Stack>
            <Box>
              <Text
                fontSize={"16px"}
                fontWeight="500"
                color="rgba(255, 255, 255, 0.6)"
              >
                Phone
              </Text>
              <Text fontSize={"20px"} fontWeight="700" color="#fff">
                +62 899-6734-208
              </Text>
            </Box>
          </HStack>
          <HStack spacing="28px" mt="30px">
            <Stack>
              <svg
                width="70"
                height="70"
                viewBox="0 0 70 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="70"
                  height="70"
                  rx="3"
                  fill="white"
                  fillOpacity="0.05"
                />
                <path
                  d="M25 25H45C46.375 25 47.5 26.125 47.5 27.5V42.5C47.5 43.875 46.375 45 45 45H25C23.625 45 22.5 43.875 22.5 42.5V27.5C22.5 26.125 23.625 25 25 25Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M47.5 27.5L35 36.25L22.5 27.5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Stack>
            <Box>
              <Text
                fontSize={"16px"}
                fontWeight="500"
                color="rgba(255, 255, 255, 0.6)"
              >
                Email
              </Text>
              <Text fontSize={"20px"} fontWeight="700" color="#fff">
                cv.agantateknologisolutif@gmail.com
              </Text>
            </Box>
          </HStack>
        </Box>
        <Box
          mt={{ base: "40px", md: "0px", lg: "0px", xl: "0px", "2xl": "0px" }}
          w={{
            base: "100%",
            md: "394px",
            lg: "412px",
            xl: "412px",
            "2xl": "412px",
          }}
          h="508px"
          bgColor={"rgba(255, 255, 255, 0.05)"}
          px="34px"
          py="40px"
          borderRadius="5px"
        >
          <HStack>
            <Box>
              <FormControl isRequired>
                <FormLabel
                  htmlFor="name"
                  color="rgba(255, 255, 255, 0.6)"
                  fontFamily={"Noto Sans"}
                >
                  Name
                </FormLabel>
                <Input
                  borderRadius={"3px"}
                  borderColor={"rgba(255, 255, 255, 0.6)"}
                  id="name"
                  color="rgba(255, 255, 255, 0.6)"
                />
              </FormControl>
            </Box>
            <Box>
              <FormControl isRequired>
                <FormLabel
                  htmlFor="email"
                  color="rgba(255, 255, 255, 0.6)"
                  fontFamily={"Noto Sans"}
                >
                  Email
                </FormLabel>
                <Input
                  borderRadius={"3px"}
                  borderColor={"rgba(255, 255, 255, 0.6)"}
                  id="email"
                  color="rgba(255, 255, 255, 0.6)"
                />
              </FormControl>
            </Box>
          </HStack>
          <Box my="28px">
            <FormControl isRequired>
              <FormLabel
                htmlFor="subject"
                color="rgba(255, 255, 255, 0.6)"
                fontFamily={"Noto Sans"}
              >
                Subject
              </FormLabel>
              <Input
                borderRadius={"3px"}
                borderColor={"rgba(255, 255, 255, 0.6)"}
                id="subject"
                color="rgba(255, 255, 255, 0.6)"
              />
            </FormControl>
          </Box>
          <Box mb="28px">
            <FormControl isRequired>
              <FormLabel
                htmlFor="message"
                color="rgba(255, 255, 255, 0.6)"
                fontFamily={"Noto Sans"}
              >
                Message
              </FormLabel>
              <Textarea
                pb="100px"
                color="#fff"
                borderRadius={"3px"}
                borderColor={"rgba(255, 255, 255, 0.6)"}
              />
            </FormControl>
          </Box>
          <Link>
            <Button
              size="lg"
              fontSize="16px"
              fontWeight={"600"}
              height="52px"
              width={{
                base: "100%",
                md: "342px",
                lg: "342px",
                xl: "342px",
                "2xl": "342px",
              }}
              bgColor="#6016FC"
              color="#fff"
              _hover={{ bg: "#6016FC" }}
              _active={{
                bg: "#6016FC",
                transform: "scale(0.98)",
                borderColor: "#bec3c9",
              }}
            >
              Send Message
            </Button>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Contact;
