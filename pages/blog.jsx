import Layout from "../components/Layout";
import Blog from "../components/Blog";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Box } from "@chakra-ui/react";

export default function BlogPage() {
  return (
    <Layout pageTitle={"Blog"}>
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
        <Blog />
        <Footer />
      </Box>
    </Layout>
  );
}
