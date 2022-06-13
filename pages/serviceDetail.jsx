import { Box } from "@chakra-ui/react"
import Footer from "../components/Footer"
import Layout from "../components/Layout"
import Navbar from "../components/Navbar"
import ServiceDetail from "../components/Service/serviceDetail"

const ServiceDetailPage = () => {
    return ( 
        <Box>
            <Layout pageTitle={"Service Detail"}>
                <Box pb='40px' bgColor='#0B0B22' pt='53px' px={{base:'20px',md:'40px',lg:'60px',xl:'120px','2xl':'120px'}}>
                    <Navbar />
                    <ServiceDetail />
                    <Footer />
                </Box>
            </Layout>
        </Box>
    )
}

export default ServiceDetailPage