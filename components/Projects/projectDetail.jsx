import {
  Box,
  Container,
  Flex,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import ProjectDetailPage from "./cardProjectDetail";
import CardProject from "./cardProjects";

const ProjectDetail = () => {
  return (
    <Box pb="200px">
      <Container maxW="8xl">
        <ProjectDetailPage
          name={"BUMDES Mobile App"}
          image={"/bumdes-app.jpg"}
          desc={
            "Established in 1963, MIMS is a multi-channel provider of drug information, medical education and services connecting healthcare communities. Our work empowers healthcare professionals to improve patient outcomes by facilitating knowledge exchange and better decision-making. Today, MIMS is present in 12 countries across Asia Pacific with approximately two million healthcare professional subscribers to its drug & resource portal, digital and print publications."
          }
          category={"Development"}
          client={"Acme, Inc"}
          tech={"Flutter, Firebase"}
        />

        <Box my="90px" borderTop={"2px solid rgba(255, 255, 255, 0.1)"} />

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
          <Box>
            <Text
              fontSize={"16px"}
              fontWeight={"600"}
              color="#16FCD2"
              letterSpacing={"0.1em"}
            >
              Another Project You Can See
            </Text>
            {/* <Text mt='13px' fontSize={'36px'} fontWeight='700' color='#fff' lineHeight='54px'>We have completed many <br/> amazing projectsthat you will not believe</Text> */}
          </Box>
          <SimpleGrid mt="71px" columns={{ base: 1, md: 2 }} spacing="20px">
            <CardProject
              image={"/a-project.png"}
              title={"The Mobile App Landing Page"}
              desc={"A landing page for mobile app"}
            />
            <CardProject
              image={"/project.png"}
              title={"The Desktop App Landing Page"}
              desc={"A landing page for Desktop app"}
            />
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectDetail;
