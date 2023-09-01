import About from "../components/About";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import { Box } from "@chakra-ui/react";

const AboutPage = () => {
  return (
    <Layout pageTitle={"About Us"}>
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
        <About />
        <Footer />
      </Box>
    </Layout>
  );
};

export default AboutPage;
