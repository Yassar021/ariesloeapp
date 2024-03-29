import { Box } from "@chakra-ui/react";
import Head from "next/head";
import Navbar from "../components/Navbar";
// import Home from "../components/Home";
// import Service from "../components/Service/service";
import Testimonial from "../components/Testimonial";
// import Footer from "../components/Footer";
import Landing from "../components/LandingPage";
import Footer from "../components/Footer";
import KeyPoint from "../components/LandingPage/keyPoints"
import Reviews from "../components/LandingPage/reviews"


export default function Index() {
  return ( 
    <>
      <Head>
            <title>Aganta.id - Your Trusted Online Platform - Home</title>
            <meta name="description" content="Discover the best products and services with Aganta.id - Your trusted online platform for finding and comparing prices, reviews, and ratings. Shop smarter with us today!" />
            <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"/>
            <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"/>
            <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"/>
            <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"/>
            <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"/>
            <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>
            <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"/>
            <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"/>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
            <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
            <link rel="manifest" href="/manifest.json"/>
            <meta name="msapplication-TileColor" content="#ffffff"/>
            <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
            <meta name="theme-color" content="#ffffff"/>
      </Head>

      <Box bgColor='#0B0B22' pt='53px' px={{base:'20px',md:'40px',lg:'60px',xl:'120px','2xl':'120px'}}>
          <Navbar />
          <Landing />
      </Box>
      <KeyPoint />

      <Box bgColor='#0B0B22' pt='53px' px={{base:'20px',md:'40px',lg:'60px',xl:'120px','2xl':'120px'}}>
        <Reviews />
        <Footer />
      </Box>
      {/* <Service/>
      <Box bgColor='#0B0B22' px={{base:'20px',md:'40px',lg:'60px',xl:'120px','2xl':'120px'}} pb='60px'>
          <Testimonial />
          <Footer />
      </Box> */}
    </>
  )
}