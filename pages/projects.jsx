import { Box } from "@chakra-ui/react";
import Layout from "../components/Layout";
import Projects from "../components/Projects";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ProjectsPage() {
  return (
    <Layout pageTitle={"Projects"}>
      <Box
        pb="40px"
        bgColor="#0B0B22"
        pt="53px"
        px={{
          base: "20px",
          md: "40px",
          lg: "60px",
          xl: "120px",
          "2xl": "120px",
        }}
      >
        <Navbar />
        <Projects />
        <Footer />
      </Box>
    </Layout>
  );
}
