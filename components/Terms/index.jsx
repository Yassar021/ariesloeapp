import { Box, Flex, Text, Container } from "@chakra-ui/react";

const Terms = () => {
  return (
    <Box pb="114px">
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
            Terms
          </Text>
          <Text
            mt="13px"
            fontSize={"36px"}
            fontWeight="700"
            color="#fff"
            lineHeight="54px"
          >
            Terms & Conditions
          </Text>
          <Text mt="25px" fontSize={"14px"} color="rgba(255, 255, 255, 0.6)">
            Updated at 2021-05-06
          </Text>
        </Box>
      </Flex>

      <Box my="90px" borderTop={"2px solid rgba(255, 255, 255, 0.1)"} />

      <Box maxW="650px" mx="auto">
        <Text fontSize={"16px"} fontWeight="500" color="#fff">
          By accessing and placing an order with Collosal, you confirm that you
          are in agreement with and bound by the terms of service contained in
          the Terms & Conditions outlined below. These terms apply to the entire
          website and any email or other type of communication between you and
          Collosal.
          <br />
          <br />
          Under no circumstances shall Collosal team be liable for any direct,
          indirect, special, incidental or consequential damages, including, but
          not limited to, loss of data or profit, arising out of the use, or the
          inability to use, the materials on this site, even if Collosal team or
          an authorized representative has been advised of the possibility of
          such damages. If your use of materials from this site results in the
          need for servicing, repair or correction of equipment or data, you
          assume any costs thereof.
          <br />
          <br />
          Collosal will not be responsible for any outcome that may occur during
          the course of usage of our resources. We reserve the rights to change
          prices and revise the resources usage policy in any moment.
        </Text>
        <Text mt="40px" fontSize={"30px"} fontWeight="700" color="#fff">
          License
        </Text>
        <Text mt="20px" fontSize={"16px"} fontWeight="500" color="#fff">
          Collosal grants you a revocable, non-exclusive, non- transferable,
          limited license to download, install and use the website strictly in
          accordance with the terms of this Agreement.
          <br />
          <br />
          These Terms & Conditions are a contract between you and Collosal (we,
          our, or us) grants you a revocable, non-exclusive, non- transferable,
          limited license to download, install and use the website strictly in
          accordance with the terms of this Agreement.
        </Text>
      </Box>
    </Box>
  );
};

export default Terms;
