import { Box, Text,Link,Button,Flex, } from "@chakra-ui/react"
import Footer from "../components/Footer"
import Layout from "../components/Layout"
import Navbar from "../components/Navbar"

const ComingSoon = () => {
    return (
        <Layout pageTitle={'Coming Soon'}>
             <Box pb='40px' bgColor='#0B0B22' pt='53px' px={{base:'20px',md:'40px',lg:'60px',xl:'120px','2xl':'120px'}}>
                <Navbar />
                <Flex direction='column' mt='120px' mb='123px' alignItems={'center'} textAlign='center'>
                    <Text mt='90px' fontSize={'16px'} fontWeight={'600'} color='#FEA55F' letterSpacing={'0.1em'}> Coming Soon</Text>
                    <Text mt='13px' fontSize={'36px'} fontWeight={'700'} color='#fff' letterSpacing={'0.1em'}>Sorry, The page you are looking<br/> for is not available now,<br/> because still development.</Text>
                    <Link href="/" _hover={{textDecoration: 'none'}}>
                            <Button
                                mt='30px'
                                size='lg'
                                fontSize='16px'
                                fontWeight={'600'}
                                height='52px'
                                width='219px'
                                bgColor='rgba(255, 255, 255, 0.1)'
                                color='#fff'
                                _hover={{ bg: 'rgba(255, 255, 255, 0.1)' }}
                                _active={{
                                bg: 'rgba(255, 255, 255, 0.1)',
                                transform: 'scale(0.98)',
                                borderColor: '#bec3c9',
                                }}
                                >
                                Back To Home
                            </Button>
                        </Link>
                </Flex>
                <Footer />
            </Box>
        </Layout>
    )
}

export default ComingSoon