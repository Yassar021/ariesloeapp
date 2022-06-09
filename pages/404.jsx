import { Box, Button, Flex, Link, Text } from '@chakra-ui/react'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'


export default function Custom404() {
    return ( 
        <Layout pageTitle={'ERROR 404'}>
             <Box pb='40px' bgColor='#0B0B22' pt='53px' px={{base:'20px',md:'40px',lg:'60px',xl:'120px','2xl':'120px'}}>
                <Navbar />
                <Flex direction='column' mt='120px' mb='123px' alignItems={'center'} textAlign='center'>
                    <Text mt='90px' fontSize={'16px'} fontWeight={'600'} color='#FC165B' letterSpacing={'0.1em'}> Error</Text>
                    <Text mt='13px' fontSize={'36px'} fontWeight={'700'} color='#fff' letterSpacing={'0.1em'}>The page you are looking<br/> for is not on this website,<br/> please check again</Text>
                    <Text mt='24px' fontSize={'16px'} fontWeight={'600'} color='rgba(255, 255, 255, 0.6)' letterSpacing={'0.1em'}> The system cannot find the page you are looking for, maybe you <br/>have the wrong path or the page has been deleted.</Text>
                    <Link href="/">
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

