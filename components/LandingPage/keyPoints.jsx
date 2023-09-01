import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function KeyPoint() {
  return (
    <Box
      pb="120px"
      bgColor="#221048"
      px={{ base: "20px", md: "60px" }}
      alignItems="center"
      textAlign={"center"}
    >
      <Container maxW="8xl">
        <Flex direction={"column"} alignItems="center" textAlign={"center"}>
          <Text
            mt="90px"
            fontSize={"32px"}
            fontWeight={"700"}
            color="#16FCD2"
            letterSpacing={"0.1em"}
          >
            Key Points
          </Text>
          <Text
            mt="13px"
            fontSize={"24px"}
            fontWeight={"500"}
            color="#fff"
            letterSpacing={"0.1em"}
          >
            Several creative people gather in the same place - thats Aganta. We
            collaborate to produce the best results, loved by clients and
            comfortable for users.
          </Text>

          <SimpleGrid
            columns={{ md: 1, lg: 2, xl: 3, "2xl": 3 }}
            spacing="40px"
            mt="70px"
          >
            <Box textAlign={{ md: "center", lg: "left" }}>
              <Stack
                m={{ base: "auto", md: "auto", lg: "0px" }}
                maxW="60"
                alignContent={{ base: "center", md: "center", lg: "left" }}
                alignItems={{ base: "center", md: "center", lg: "start" }}
              >
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.1299 13.8H11.5C11.7357 13.8 11.8536 13.8 11.9268 13.8732C12 13.9464 12 14.0643 12 14.3V18.7299C12 19.6205 12 20.0659 12.1962 20.1091C12.3925 20.1523 12.5795 19.7482 12.9537 18.9399L15.6851 13.0402C16.2768 11.7621 16.5726 11.1231 16.2777 10.6615C15.9828 10.2 15.2786 10.2 13.8701 10.2H12.5C12.2643 10.2 12.1464 10.2 12.0732 10.1268C12 10.0536 12 9.9357 12 9.7V5.27013C12 4.37946 12 3.93413 11.8038 3.89091C11.6075 3.8477 11.4205 4.25182 11.0463 5.06006L8.31493 10.9597C7.72321 12.2379 7.42735 12.8769 7.72228 13.3385C8.01721 13.8 8.72143 13.8 10.1299 13.8Z"
                    fill="white"
                  />
                </svg>
              </Stack>
              <Text
                my="20px"
                fontSize={"28px"}
                fontWeight={"700"}
                color="#fff"
                letterSpacing={"0.1em"}
              >
                Fast Development
              </Text>
              <Text
                my="20px"
                fontSize={"16px"}
                fontWeight={"500"}
                color="rgba(255, 255, 255, 0.6)"
                letterSpacing={"0.1em"}
              >
                Helping you to build Fast Apps.
              </Text>
            </Box>
            <Box textAlign={{ md: "center", lg: "left" }}>
              <Stack
                m={{ base: "auto", md: "auto", lg: "0px" }}
                maxW="60"
                alignContent={{ base: "center", md: "center", lg: "left" }}
                alignItems={{ base: "center", md: "center", lg: "start" }}
              >
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.3939 5.74002L13.1818 3.50624C12.4271 3.18282 11.5729 3.18282 10.8182 3.50624L5.60608 5.74002C5.2384 5.8976 5 6.25914 5 6.65917V11.9121C5 13.8498 5.93579 15.6682 7.51257 16.7945L10.8375 19.1694C11.5329 19.6661 12.4671 19.6661 13.1625 19.1694L16.4874 16.7945C18.0642 15.6682 19 13.8498 19 11.9121V6.65917C19 6.25914 18.7616 5.8976 18.3939 5.74002ZM15.7809 9.62469C16.1259 9.19343 16.056 8.56414 15.6247 8.21913C15.1934 7.87412 14.5641 7.94404 14.2191 8.37531L10.9171 12.5029L9.70711 11.2929C9.31658 10.9024 8.68342 10.9024 8.29289 11.2929C7.90237 11.6834 7.90237 12.3166 8.29289 12.7071L9.89788 14.3121C10.53 14.9443 11.5714 14.8866 12.1298 14.1885L15.7809 9.62469Z"
                    fill="white"
                  />
                </svg>
              </Stack>
              <Text
                my="20px"
                fontSize={"28px"}
                fontWeight={"700"}
                color="#fff"
                letterSpacing={"0.1em"}
              >
                Secure and Safe Coding
              </Text>
              <Text
                my="20px"
                fontSize={"16px"}
                fontWeight={"500"}
                color="rgba(255, 255, 255, 0.6)"
                letterSpacing={"0.1em"}
              >
                Build secure apps with the best code quality. Security is our
                first goal.
              </Text>
            </Box>
            <Box textAlign={{ md: "center", lg: "left" }}>
              <Stack
                m={{ base: "auto", md: "auto", lg: "0px" }}
                maxW="60"
                alignContent={{ base: "center", md: "center", lg: "left" }}
                alignItems={{ base: "center", md: "center", lg: "start" }}
              >
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.1056 3.44721L5.78885 6.10557C5.00831 6.49585 4.61803 6.69098 4.61803 7C4.61803 7.30902 5.00831 7.50415 5.78885 7.89443L11.1056 10.5528C11.5445 10.7722 11.7639 10.882 12 10.882C12.2361 10.882 12.4555 10.7722 12.8944 10.5528L18.2111 7.89443C18.9917 7.50415 19.382 7.30902 19.382 7C19.382 6.69098 18.9917 6.49585 18.2111 6.10557L12.8944 3.44721C12.4555 3.22776 12.2361 3.11803 12 3.11803C11.7639 3.11803 11.5445 3.22776 11.1056 3.44721Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.02204 10.4893C7.62591 10.8135 8.33704 11.169 9.15542 11.5782L10.2111 12.1061C11.089 12.545 11.5279 12.7644 12 12.7644C12.4721 12.7644 12.911 12.545 13.7889 12.1061L14.8446 11.5782C15.663 11.169 16.3741 10.8135 16.978 10.4893L18.2112 11.1059C18.9917 11.4961 19.382 11.6913 19.382 12.0003C19.382 12.3093 18.9917 12.5044 18.2112 12.8947L12.8944 15.5531C12.4555 15.7725 12.2361 15.8822 12 15.8822C11.7639 15.8822 11.5445 15.7725 11.1056 15.5531L11.1056 15.5531L5.78886 12.8947C5.00832 12.5044 4.61804 12.3093 4.61804 12.0003C4.61804 11.6913 5.00832 11.4961 5.78886 11.1059L7.02204 10.4893Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.02157 15.4893C7.62555 15.8135 8.33684 16.1692 9.15544 16.5785L10.2112 17.1063C11.089 17.5452 11.5279 17.7647 12 17.7647C12.4722 17.7647 12.9111 17.5452 13.7889 17.1063L14.8446 16.5785C15.6632 16.1692 16.3745 15.8135 16.9785 15.4893L18.2112 16.1056C18.9917 16.4959 19.382 16.691 19.382 17C19.382 17.3091 18.9917 17.5042 18.2112 17.8945L12.8944 20.5528C12.4555 20.7723 12.2361 20.882 12 20.882C11.7639 20.882 11.5445 20.7723 11.1056 20.5528L11.1056 20.5528L5.78886 17.8945C5.00832 17.5042 4.61804 17.3091 4.61804 17C4.61804 16.691 5.00832 16.4959 5.78886 16.1056L7.02157 15.4893Z"
                    fill="white"
                  />
                </svg>
              </Stack>
              <Text
                my="20px"
                fontSize={"28px"}
                fontWeight={"700"}
                color="#fff"
                letterSpacing={"0.1em"}
              >
                Support and Maintenance
              </Text>
              <Text
                my="20px"
                fontSize={"16px"}
                fontWeight={"500"}
                color="rgba(255, 255, 255, 0.6)"
                letterSpacing={"0.1em"}
              >
                Not just build an app, but we also provide support and
                maintenance services with various support levels.
              </Text>
            </Box>
          </SimpleGrid>
        </Flex>
      </Container>
    </Box>
  );
}
