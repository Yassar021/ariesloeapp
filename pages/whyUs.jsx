import { Box } from "@chakra-ui/react"
import Footer from "../components/Footer"
import WhyUs from "../components/LandingPage/whyUs"
import Layout from "../components/Layout"
import Navbar from "../components/Navbar"

const WhyUsPage = () => {
    return ( 
        <Layout pageTitle={'Why Us'}>
            <Box pb='40px' bgColor='#0B0B22' pt='53px' px={{base:'20px',md:'40px',lg:'60px',xl:'120px','2xl':'120px'}}>
                <Navbar />
                <WhyUs />
                <Footer />
            </Box>
        </Layout>
    )
}

export default WhyUsPage