import Footer from "../components/Footer";
import HowWeWork from "../components/HowWeWork";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import { Box } from "@chakra-ui/react";

export default function HowweworkPage() {
  return (
    <Layout pageTitle={"How We Work"}>
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
        <HowWeWork />
        <Footer />
      </Box>
    </Layout>
  );
}
