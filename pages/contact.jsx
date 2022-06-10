import Contact from "../components/Contact"
import Layout from "../components/Layout"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Box } from "@chakra-ui/react"

const ContactPage = () => {
    return ( 
        <Layout pageTitle={'Contact'} >
            <Box pb='40px' bgColor='#0B0B22' pt='53px' px={{base:'20px',md:'40px',lg:'60px',xl:'120px','2xl':'120px'}}>
                <Navbar />
                <Contact />
                <Footer />
            </Box>
        </Layout>
    )
}

export default ContactPage