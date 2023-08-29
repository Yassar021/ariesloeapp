import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  HStack,
  Link,
  Select,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import CardProject from "./cardProjects";

const Projects = () => {
  return (
    <Box pb="90px">
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
            PROJECTS
          </Text>
          <Text
            mt="13px"
            fontSize={{ base: "22px", md: "36px" }}
            fontWeight="700"
            color="#fff"
            lineHeight="54px"
          >
            We have completed many <br /> amazing projects that you will not
            believe
          </Text>
        </Box>
      </Flex>

      <Box my="90px" borderTop={"2px solid rgba(255, 255, 255, 0.1)"} />

      <Container maxW="8xl">
        <Box
          mt="110px"
          textAlign={{
            base: "center",
            md: "center",
            lg: "center",
            xl: "center",
            "2xl": "center",
          }}
          alignContent="center"
        >
          <SimpleGrid mt="71px" columns={{ base: 1, md: 2 }} spacing="20px">
            <CardProject
              image={"/bumdes-app.jpg"}
              title={"BUMDES Mobile App"}
              desc={
                "Bumdes App is an application for selling land products in a district using flutter as the main programming language"
              }
            />
            <CardProject
              image={"/nature-web.png"}
              title={"Nature Health App"}
              desc={
                "Nature Health is a web application that functions to determine the type of disease in a plant with AI"
              }
            />
            <CardProject
              image={"/ArahSatuAbadi.png"}
              title={"Arah Satu Abadi Web App"}
              desc={
                "Arah Satu Abadi is a company engaged in the rental of garden plots and villas using laravel as the main language"
              }
            />
            <CardProject
              image={"/simpeka.png"}
              title={"Simpeka Web Dashboard"}
              desc={
                "simpeka is a web app that is engaged in collecting data used in the TOEFL program at Haluleo universities using Laravel as the main language"
              }
            />
            <CardProject
              image={"/kedai-kilometer.png"}
              title={"Kedai Booking Web App"}
              desc={
                "Kedai Kilometer App is Booking App for Coffee Shop we are using Next JS and Laravel"
              }
            />
            <CardProject
              image={"/panrita-lopi-marine.png"}
              title={"Maintenance Web App"}
              desc={
                "Pinisi Ara is company profile from South Sulawesi for selling a Boat we called PHINISI BOAT the Technology they use is Wordpress "
              }
            />
            <CardProject
              image={"/genbi-uinam.png"}
              title={"Information System GenBI UINAM"}
              desc={
                "GenBI is a forum for recipients of scholarships given to certain universities in Indonesia in developing their potential.  "
              }
            />
            <CardProject
              image={"/dispopar-enrekang.png"}
              title={"Information System Tourism of Enrekang"}
              desc={
                "Tourism Enrekang is information system tourism manage by Enrekang district, South Sulawesi.  "
              }
            />
            <CardProject
              image={"/lettuce-app.png"}
              title={"Find disease of lettuce!"}
              desc={
                "Lettuce app is your solution if you have a problem with your plant."
              }
            />
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;
