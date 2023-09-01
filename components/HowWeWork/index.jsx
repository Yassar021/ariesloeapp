import { Box, Flex, Text, Stack, Image, Container } from "@chakra-ui/react";

const HowWeWork = () => {
  return (
    <Box>
      <Flex
        mt="101px"
        direction={{
          base: "column",
          md: "row",
          lg: "row",
          xl: "row",
          "2xl": "row",
        }}
        justifyContent="center"
        textAlign={{
          base: "center",
          md: "left",
          lg: "left",
          xl: "left",
          "2xl": "left",
        }}
      >
        <Box my="auto" textAlign={"center"}>
          <Text
            fontSize={"16px"}
            fontWeight={"600"}
            color="#16FCD2"
            letterSpacing={"0.1em"}
          >
            {" "}
            HOW WE WORK
          </Text>
          <Text
            mt="13px"
            fontSize={"36px"}
            fontWeight="700"
            color="#fff"
            lineHeight="54px"
          >
            We have a workflow that allows the job to be delivered well
          </Text>
        </Box>
      </Flex>
      <Box mt="90px" borderTop={"2px solid rgba(255, 255, 255, 0.1)"} />
      <Container maxW="8xl">
        <Stack
          direction={{
            base: "column-reverse",
            md: "column-reverse",
            lg: "row",
            xl: "row",
            "2xl": "row",
          }}
          alignItems={{
            base: "center",
            md: "center",
            lg: "left",
            xl: "left",
            "2xl": "left",
          }}
          spacing="66px"
          mt="124px"
        >
          <Image
            src="/step1.png"
            w="411px"
            h="408px"
            alt=""
            textAlign={{
              base: "center",
              md: "center",
              lg: "left",
              xl: "left",
              "2xl": "left",
            }}
          />
          <Box
            w={{
              base: "auto",
              md: "100%",
              lg: "100%",
              xl: "100%",
              "2xl": "100%",
            }}
            my="auto"
            textAlign={{
              base: "center",
              md: "center",
              lg: "left",
              xl: "left",
              "2xl": "left",
            }}
          >
            <Text
              fontSize={"16px"}
              fontWeight={"600"}
              color="#16FCD2"
              letterSpacing={"0.1em"}
            >
              STEP 1
            </Text>
            <Text
              mt="4px"
              fontSize={"30px"}
              fontWeight="700"
              color="#fff"
              lineHeight={"48px"}
            >
              Lets talk about your company problems first
            </Text>
            <Text
              mt="28px"
              fontSize={"16px"}
              fontWeight="500"
              color="rgba(255, 255, 255, 0.6)"
              lineHeight={"32px"}
            >
              After submitting the quote form, we will review the data, then we
              will contact you. You can discuss with our team regarding your
              problem and find a solution to that problem.
              <br />
              <br />
              In this step, you will discuss what application to build.
            </Text>
          </Box>
        </Stack>
        <Stack
          direction={{
            base: "column",
            md: "column",
            lg: "row",
            xl: "row",
            "2xl": "row",
          }}
          alignItems={{
            base: "center",
            md: "center",
            lg: "left",
            xl: "left",
            "2xl": "left",
          }}
          spacing="66px"
          my="166px"
        >
          <Box
            w={{
              base: "auto",
              md: "100%",
              lg: "100%",
              xl: "100%",
              "2xl": "100%",
            }}
            my="auto"
            textAlign={{
              base: "center",
              md: "center",
              lg: "left",
              xl: "left",
              "2xl": "left",
            }}
          >
            <Text
              fontSize={"16px"}
              fontWeight={"600"}
              color="#16FCD2"
              letterSpacing={"0.1em"}
            >
              STEP 2
            </Text>
            <Text
              mt="4px"
              fontSize={"30px"}
              fontWeight="700"
              color="#fff"
              lineHeight={"48px"}
            >
              Doing planning, design and development until everything is
              finished
            </Text>
            <Text
              mt="28px"
              fontSize={"16px"}
              fontWeight="500"
              color="rgba(255, 255, 255, 0.6)"
              lineHeight={"32px"}
            >
              When everything is agreed upon, our team will make plans related
              to the application that will be created. Starting from analysis,
              design, to development.
              <br />
              <br />
              In this step, the application is 100% complete.
            </Text>
          </Box>
          <Image
            src="/step2.png"
            w="411px"
            h="408px"
            alt=""
            textAlign={{
              base: "center",
              md: "center",
              lg: "left",
              xl: "left",
              "2xl": "left",
            }}
          />
        </Stack>
        <Stack
          direction={{
            base: "column-reverse",
            md: "column-reverse",
            lg: "row",
            xl: "row",
            "2xl": "row",
          }}
          alignItems={{
            base: "center",
            md: "center",
            lg: "left",
            xl: "left",
            "2xl": "left",
          }}
          spacing="66px"
          mb="166px"
        >
          <Image
            src="/step1.png"
            w="411px"
            h="408px"
            alt=""
            textAlign={{
              base: "center",
              md: "center",
              lg: "left",
              xl: "left",
              "2xl": "left",
            }}
          />
          <Box
            w={{
              base: "auto",
              md: "100%",
              lg: "100%",
              xl: "100%",
              "2xl": "100%",
            }}
            my="auto"
            textAlign={{
              base: "center",
              md: "center",
              lg: "left",
              xl: "left",
              "2xl": "left",
            }}
          >
            <Text
              fontSize={"16px"}
              fontWeight={"600"}
              color="#16FCD2"
              letterSpacing={"0.1em"}
            >
              STEP 3
            </Text>
            <Text
              mt="4px"
              fontSize={"30px"}
              fontWeight="700"
              color="#fff"
              lineHeight={"48px"}
            >
              The project is complete and we ship all the project assets, and
              access to the server
            </Text>
            <Text
              mt="28px"
              fontSize={"16px"}
              fontWeight="500"
              color="rgba(255, 255, 255, 0.6)"
              lineHeight={"32px"}
            >
              We will be responsible for delivering all the project assets to
              you, dont worry. These assets include, design files, source code,
              server access, and so on.
              <br />
              <br />
              In this step, everything is done and the contract ends.
            </Text>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default HowWeWork;
