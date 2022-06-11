import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import FAQ from "../components/FAQ"

import { Box } from "@chakra-ui/react";

export default function FaqPage() {
    return ( 
        <Layout pageTitle={'FAQ'} >
            <Box pb='40px' bgColor='#0B0B22' pt='53px' px={{base:'20px',md:'40px',lg:'60px',xl:'120px','2xl':'120px'}}>
                <Navbar />
                <FAQ />
                <Footer />
            </Box>
        </Layout>
    )
}