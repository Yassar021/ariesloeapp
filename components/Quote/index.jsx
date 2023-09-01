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

const Quote = () => {
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
            SEND QUOTE
          </Text>
          <Text
            mt="13px"
            fontSize={"36px"}
            fontWeight="700"
            color="#fff"
            lineHeight="54px"
          >
            Tell us about your problem and how <br /> we can help
          </Text>
          <Text
            mb="47px"
            mt="24px"
            fontSize={"16px"}
            fontWeight="500"
            color="rgba(255, 255, 255, 0.6)"
            lineHeight="32px"
          >
            We are happy to help you, tell us what is the problem with your
            company, and we are ready
            <br /> to answer these problems. It usually takes a few minutes for
            us to respond.
          </Text>
          <Link href="/quote">
            <Button
              size="lg"
              fontSize="16px"
              fontWeight={"600"}
              height="52px"
              width="162px"
              bgColor="rgba(255, 255, 255, 0.1)"
              color="#fff"
              _hover={{ bg: "rgba(255, 255, 255, 0.1)" }}
              _active={{
                bg: "rgba(255, 255, 255, 0.1)",
                transform: "scale(0.98)",
                borderColor: "#bec3c9",
              }}
            >
              Ask Us
            </Button>
          </Link>
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
                htmlFor="company"
                color="rgba(255, 255, 255, 0.6)"
                fontFamily={"Noto Sans"}
              >
                Company
              </FormLabel>
              <Input
                borderRadius={"3px"}
                borderColor={"rgba(255, 255, 255, 0.6)"}
                id="company"
                color="rgba(255, 255, 255, 0.6)"
              />
            </FormControl>
          </Box>
          <Box mb="28px">
            <FormControl isRequired>
              <FormLabel
                htmlFor="problem"
                color="rgba(255, 255, 255, 0.6)"
                fontFamily={"Noto Sans"}
              >
                Tell Us Your Problem
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
              Send Quote
            </Button>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Quote;
