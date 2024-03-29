import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";

const CardTesti = ({ image, name, company, message }) => {
  return (
    <Box
      borderRadius="3px"
      w={{ base: "100%", md: "387px", lg: "100%", xl: "100%", xl: "100%" }}
      h={{ base: "500", md: "447px", lg: "556px", xl: "447px", xl: "447px" }}
      bgColor={"rgba(255, 255, 255, 0.05)"}
      py={{ base: "30px", md: "60px" }}
      px={"47px"}
    >
      <Image mx="auto" src={image} width="90" height="90" alt="profile" />
      <Text mt="18" fontSize="18px" fontWeight="700" color="#fff">
        {name}
      </Text>
      <Text
        mt="8px"
        fontSize="18px"
        fontWeight="500"
        color="rgba(255, 255, 255, 0.6)"
      >
        {company}.
      </Text>
      <Text
        mt="32px"
        fontSize="16px"
        fontWeight="500"
        color="#fff"
        lineHeight="32px"
      >
        {message}.
      </Text>
    </Box>
  );
};

export default CardTesti;
