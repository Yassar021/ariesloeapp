import { Box } from "@chakra-ui/react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Service from "../components/Service/service";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";


export default function Index() {
  return ( 
    <>
      <Head>
        <title>Ariesloe - Home</title>
      </Head>

      <Box bgColor='#0B0B22' pt='53px' px={{md:'40px',lg:'60px',xl:'120px','2xl':'120px'}} pb='200px'>
          <Navbar />
          <Home />
          <Service />
          <Testimonial />
          <Footer />
      </Box>
    </>
  )
}