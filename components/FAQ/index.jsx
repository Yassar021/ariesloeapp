import {
  Box,
  Flex,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Container,
} from "@chakra-ui/react";

export default function Faq() {
  return (
    <Container maxW="8xl">
      <Box pb="200px">
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
              FAQ
            </Text>
            <Text
              mt="13px"
              fontSize={"36px"}
              fontWeight="700"
              color="#fff"
              lineHeight="54px"
            >
              Frequently asked questions, maybe the same as yours
            </Text>
          </Box>
        </Flex>

        <Box my="90px" borderTop={"2px solid rgba(255, 255, 255, 0.1)"} />

        <Accordion bgColor="transparent" borderColor={"transparent"}>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  flex="1"
                  textAlign="left"
                  fontWeight="700"
                  fontSize="20px"
                  color="#fff"
                >
                  How is the payment system?
                </Box>
                <AccordionIcon color="#fff" />
              </AccordionButton>
            </h2>
            <AccordionPanel
              py={"10px"}
              fontSize="16px"
              color="rgba(255, 255, 255, 0.6)"
            >
              If the project has agreed, you will pay an advance, and when the
              progress reaches 50% you will make a second payment, and when the
              progress is 100% you will pay it off.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  flex="1"
                  textAlign="left"
                  fontWeight="700"
                  fontSize="20px"
                  color="#fff"
                >
                  Can I consult first?
                </Box>
                <AccordionIcon color="#fff" />
              </AccordionButton>
            </h2>
            <AccordionPanel
              py={"10px"}
              fontSize="16px"
              color="rgba(255, 255, 255, 0.6)"
            >
              If the project has agreed, you will pay an advance, and when the
              progress reaches 50% you will make a second payment, and when the
              progress is 100% you will pay it off.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  flex="1"
                  textAlign="left"
                  fontWeight="700"
                  fontSize="20px"
                  color="#fff"
                >
                  What if the project stops halfway?
                </Box>
                <AccordionIcon color="#fff" />
              </AccordionButton>
            </h2>
            <AccordionPanel
              py={"10px"}
              fontSize="16px"
              color="rgba(255, 255, 255, 0.6)"
            >
              If the project has agreed, you will pay an advance, and when the
              progress reaches 50% you will make a second payment, and when the
              progress is 100% you will pay it off.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  flex="1"
                  textAlign="left"
                  fontWeight="700"
                  fontSize="20px"
                  color="#fff"
                >
                  Will I get the source code?
                </Box>
                <AccordionIcon color="#fff" />
              </AccordionButton>
            </h2>
            <AccordionPanel
              py={"10px"}
              fontSize="16px"
              color="rgba(255, 255, 255, 0.6)"
            >
              If the project has agreed, you will pay an advance, and when the
              progress reaches 50% you will make a second payment, and when the
              progress is 100% you will pay it off.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Container>
  );
}
