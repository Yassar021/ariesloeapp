import React, { useState } from "react";
import Layout from "../../../components/Layout";
import {
  Box,
  Container,
  VStack,
  Center,
  Divider,
  Heading,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Image,
  Flex,
  Spacer,
  Button,
} from "@chakra-ui/react";

function DeleteAccount() {
  const [isLoading, setLoading] = useState(false);
  const [isDone, setDone] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setDone(true);
    }, 2500);
  };
  return (
    <>
      <Layout pageTitle={"Delete Account for CalegTa"}>
        <Container maxWidth={"6xl"} pb="40px" pt="53px">
          <Flex>
            <Box>
              <Image boxSize="100px" src="/ms-icon-310x310.png" />
            </Box>
            <Spacer />
            <Box>
              <Image boxSize="100px" src="/calegta.png" />
            </Box>
          </Flex>
          <Divider p={"2"} />
          <Box p="2">
            <Heading as="h1" size="xl" noOfLines={1}>
              Delete Account Request
            </Heading>
          </Box>

          <Container width={"50%"}>
            {isDone ? (
              <Center>
                <Heading as="h3" size="xl" noOfLines={1}>
                  Thank You
                </Heading>
              </Center>
            ) : (
              <>
                <p>Please fill this form, and our team will be in touch</p>
                <VStack>
                  <FormControl>
                    <FormLabel>Email address</FormLabel>
                    <Input disabled={isLoading} type="email" />
                    <FormHelperText>
                      We&apos;ll never share your email.
                    </FormHelperText>
                  </FormControl>

                  <FormControl>
                    <FormLabel>Phone Number</FormLabel>
                    <Input disabled={isLoading} type="phone" />
                    <FormHelperText>
                      We&apos;ll never share your phone number.
                    </FormHelperText>
                  </FormControl>

                  <Button
                    mt={4}
                    colorScheme="teal"
                    isLoading={isLoading}
                    isDisabled={isLoading}
                    onClick={handleSubmit}
                    type="submit"
                  >
                    Submit
                  </Button>
                </VStack>
              </>
            )}
          </Container>
        </Container>
      </Layout>
    </>
  );
}

export default DeleteAccount;
