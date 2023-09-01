import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import CardBlog from "./cardBlog";

const Blog = () => {
  return (
    <Box pb="103px">
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
          md: "center",
          lg: "center",
          xl: "center",
          "2xl": "center",
        }}
      >
        <Box>
          <Text
            fontSize={"16px"}
            fontWeight={"600"}
            color="#16FCD2"
            letterSpacing={"0.1em"}
          >
            BLOG
          </Text>
          <Text
            mt="13px"
            fontSize={"36px"}
            fontWeight="700"
            color="#fff"
            lineHeight="54px"
          >
            Get precise knowledge wherever you are
          </Text>
        </Box>
      </Flex>

      <Box my="90px" borderTop={"2px solid rgba(255, 255, 255, 0.1)"} />

      <Container maxW="8xl">
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={{ base: "60px", md: "40px" }}
        >
          <CardBlog
            image={"/a-blog.png"}
            title={"SEO tricks that can increase the traffic of your website"}
            desc={
              "People have been using wrong SEO techniques on their websites."
            }
            profilepic={"blog-profile.png"}
            name={"Jane Cooper"}
            date={"Mar 18"}
            time={"5 min read"}
          />
          <CardBlog
            image={"/b-blog.png"}
            title={"10 Figma Plugins that will increase your productivity"}
            desc={"All these plugins are free and you can use them forever"}
            profilepic={"blog-profile.png"}
            name={"Alex Berner"}
            date={"Mar 11"}
            time={"11 min read"}
          />
          <CardBlog
            image={"/c-blog.png"}
            title={"How to deploy a Node JS application to a VPS"}
            desc={
              "Step by step setting up the server and deploying the application"
            }
            profilepic={"blog-profile.png"}
            name={"Anne Grane"}
            date={"Mar 10"}
            time={"10 min read"}
          />
          <CardBlog
            image={"/d-blog.png"}
            title={"How to compress image size without losing quality"}
            desc={"Small images can speed up website load times"}
            profilepic={"blog-profile.png"}
            name={"Ban Steward"}
            date={"Feb 18"}
            time={"20 min read"}
          />
          <CardBlog
            image={"/e-blog.png"}
            title={"Why is Google still not recognizing my website?"}
            desc={"Improve the SEO techniques that you have used so far"}
            profilepic={"blog-profile.png"}
            name={"Rob Arace"}
            date={"Feb 9"}
            time={"11 min read"}
          />
          <CardBlog
            image={"/f-blog.png"}
            title={"Monitor your application when errors occur in production"}
            desc={"Get accurate error messages when the application crashes"}
            profilepic={"blog-profile.png"}
            name={"Don Rohiman"}
            date={"Feb 20"}
            time={"10 min read"}
          />
        </SimpleGrid>
      </Container>

      <Center mt="90px">
        <Link href="/blogDetail">
          <Button
            size="lg"
            fontSize="16px"
            fontWeight={"600"}
            height="52px"
            width="193px"
            bgColor="rgba(255, 255, 255, 0.1)"
            color="#fff"
            _hover="rgba(255, 255, 255, 0.1)"
            _active={{
              bg: "rgba(255, 255, 255, 0.1)",
              transform: "scale(0.98)",
              borderColor: "#bec3c9",
            }}
          >
            Load More
          </Button>
        </Link>
      </Center>
    </Box>
  );
};

export default Blog;
