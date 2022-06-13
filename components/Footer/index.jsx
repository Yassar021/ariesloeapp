import { Box, Button, Flex, HStack, Image, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Footer() {
    return ( 
        <>
        <Box py='46px' h={{base:'440px',md:'284px',lg:'190px',xl:'190px','2xl':'190px'}} w='100%' borderTop={'2px solid rgba(255, 255, 255, 0.1)'} borderBottom={'2px solid rgba(255, 255, 255, 0.1)'}>
            <Flex direction={{base:'column',md:'column',lg:'row',xl:'row','2xl':'row'}} alignItems='center' textAlign={{base:'center',md:'center',lg:'left',xl:'left','2xl':'left'} } justifyContent='space-between'>
                <Text fontSize={'30px'} fontWeight={'700'} color='#fff'>We have prepared everything, its time for you to tell the problem</Text>
                <Stack direction={{base:'column',md:'row',lg:'row',xl:'row','2xl':'row'}}  spacing='23px' mt={{base:'40px',md:'40px',lg:'0px',xl:'0px','2xl':'0px'}} >
                    <Link href={'/quote'}>
                        <Button
                            size='lg'
                            fontSize='16px'
                            fontWeight={'600'}
                            height='52px'
                            width='202px'
                            bgColor='#6016FC'
                            color='#fff'
                            _hover={{ bg: '#6016FC' }}
                            _active={{
                            bg: '#6016FC',
                            transform: 'scale(0.98)',
                            borderColor: '#bec3c9',
                        }}
                        >
                        Send Quote
                        </Button>
                    </Link>
                    <Link href="/contact">
                        <Button
                            size='lg'
                            fontSize='16px'
                            fontWeight={'600'}
                            height='52px'
                            width='202px'
                            bgColor='rgba(255, 255, 255, 0.1)'
                            color='#fff'
                            _hover={{ bg: 'rgba(255, 255, 255, 0.1)' }}
                            _active={{
                            bg: 'rgba(255, 255, 255, 0.1)',
                            transform: 'scale(0.98)',
                            borderColor: '#bec3c9',
                            }}
                            >
                            Ask Us
                        </Button>
                    </Link>
                </Stack>
            </Flex>
        </Box>

        <Flex direction={{base:'column',md:'row',lg:'row',xl:'row','2xl':'row'}} justifyContent='space-between' mt='105px' alignItems={{base:'center',md:'left',lg:'left',xl:'left','2xl':'left'}} textAlign={{base:'center',md:'left',lg:'left',xl:'left','2xl':'left'}}>
            <Box>
                <HStack spacing={'14px'}>
                    <Stack>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.75 13.75H6.25M23.75 13.75C24.413 13.75 25.0489 14.0134 25.5178 14.4822C25.9866 14.9511 26.25 15.587 26.25 16.25V23.75C26.25 24.413 25.9866 25.0489 25.5178 25.5178C25.0489 25.9866 24.413 26.25 23.75 26.25H6.25C5.58696 26.25 4.95107 25.9866 4.48223 25.5178C4.01339 25.0489 3.75 24.413 3.75 23.75V16.25C3.75 15.587 4.01339 14.9511 4.48223 14.4822C4.95107 14.0134 5.58696 13.75 6.25 13.75M23.75 13.75V11.25C23.75 10.587 23.4866 9.95107 23.0178 9.48223C22.5489 9.01339 21.913 8.75 21.25 8.75M23.75 13.75L21.25 8.75M6.25 13.75V11.25C6.25 10.587 6.51339 9.95107 6.98223 9.48223C7.45107 9.01339 8.08696 8.75 8.75 8.75M6.25 13.75L8.75 8.75M21.25 8.75V6.25C21.25 5.58696 20.9866 4.95107 20.5178 4.48223C20.0489 4.01339 19.413 3.75 18.75 3.75H11.25C10.587 3.75 9.95107 4.01339 9.48223 4.48223C9.01339 4.95107 8.75 5.58696 8.75 6.25V8.75M21.25 8.75H8.75" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Stack>
                    <Link href='/'>
                        <Text fontSize={'24px'} fontWeight={'700'} color='#fff'>Ariesloe.</Text>
                    </Link>
                </HStack>
                <Text mt='21px' mb='10px' fontSize={'16px'} fontWeight='500' color='rgba(255, 255, 255, 0.6)'>Copyright © 2021</Text>
                <Text fontSize={'16px'} fontWeight='400' color='rgba(255, 255, 255, 0.6)'>Design By Collosal LLC</Text>
            </Box>
            <Box my={{base:'20px',md:'20px',lg:'0px',xl:'0px','2xl':'0px'}}>
                <Text fontSize={'14px'} fontWeight='500' color='#fff'>Services</Text>
                <Text mt='20px' mb='10px' fontSize={'16px'} fontWeight='400' color='rgba(255, 255, 255, 0.6)'>Web Development</Text>
                <Text mb='10px' fontSize={'16px'} fontWeight='400' color='rgba(255, 255, 255, 0.6)'>App Development</Text>
                <Text mb='10px' fontSize={'16px'} fontWeight='400' color='rgba(255, 255, 255, 0.6)'>UI Design</Text>
                <Text mb='10px' fontSize={'16px'} fontWeight='400' color='rgba(255, 255, 255, 0.6)'>Consultation</Text>
                <Text fontSize={'16px'} fontWeight='400' color='rgba(255, 255, 255, 0.6)'>Maintenence</Text>
            </Box>
            <Box>
                <Text fontSize={'14px'} fontWeight='500' color='#fff'>Company</Text>
                <Text mt='20px' mb='10px' fontSize={'16px'} fontWeight='400' color='rgba(255, 255, 255, 0.6)'>About</Text>
                <Text mb='10px' fontSize={'16px'} fontWeight='400' color='rgba(255, 255, 255, 0.6)'>Contact</Text>
                <Text mb='10px' fontSize={'16px'} fontWeight='400' color='rgba(255, 255, 255, 0.6)'>Send Quote</Text>
                <Text mb='10px' fontSize={'16px'} fontWeight='400' color='rgba(255, 255, 255, 0.6)'>Privacy Policy</Text>
                <Text mb='10px' fontSize={'16px'} fontWeight='400' color='rgba(255, 255, 255, 0.6)'>Term of Service</Text>
                <Text fontSize={'16px'} fontWeight='400' color='rgba(255, 255, 255, 0.6)'>Jobs</Text>
            </Box>
            <Box mt={{base:'20px',md:'20px',lg:'0px',xl:'0px','2xl':'0px'}}>
                <Text fontSize={'14px'} fontWeight='500' color='#fff'>Resource</Text>
                <Text mt='20px' mb='10px' fontSize={'16px'} fontWeight='400' color='rgba(255, 255, 255, 0.6)'>Support</Text>
                <Text mb='10px' fontSize={'16px'} fontWeight='400' color='rgba(255, 255, 255, 0.6)'>Documentation</Text>
                <Text mb='10px' fontSize={'16px'} fontWeight='400' color='rgba(255, 255, 255, 0.6)'>UI Design</Text>
                <Text mb='10px' fontSize={'16px'} fontWeight='400' color='rgba(255, 255, 255, 0.6)'>License</Text>
                <Text mb='10px' fontSize={'16px'} fontWeight='400' color='rgba(255, 255, 255, 0.6)'>Site Map</Text>
                <Link href='/blog'>
                    <Text fontSize={'16px'} fontWeight='400' color='rgba(255, 255, 255, 0.6)'>Blog</Text>
                </Link>
                <Link href='/faq'>
                    <Text fontSize={'16px'} fontWeight='400' color='rgba(255, 255, 255, 0.6)'>FAQ</Text>
                </Link>
            </Box>
        </Flex>
        </>
    )
}