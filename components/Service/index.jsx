import { Box, Button, Container, Flex, HStack, Image, Link, SimpleGrid, Stack, Text } from "@chakra-ui/react"

const Services = () => {
    return ( 
        <Box pb='153px'>
            <Flex  mt='101px' direction={{base:'column',md:'row',lg:'row',xl:'row','2xl':'row'}} justifyContent='center' textAlign={{base:'center',md:'left',lg:'left',xl:'left','2xl':'left'}}>
                <Box my='auto' textAlign={'center'}>
                    <Text fontSize={'16px'} fontWeight={'600'} color='#16FCD2' letterSpacing={'0.1em'}>SERVICES</Text>
                    <Text mt='13px' fontSize={'36px'} fontWeight='700' color='#fff' lineHeight='54px'>We have a workflow that allows the job to be delivered well</Text>
                </Box>
            </Flex>
            <Box mt='90px' borderTop={'2px solid rgba(255, 255, 255, 0.1)'} />

            <Container maxW='8xl'>
                <Stack direction={{base:'column-reverse',md:'column-reverse',lg:'column',xl:'row','2xl':'row'}} spacing='66px' mt='124px'>
                        <Image src='/a-service.png' w={'100%'} h={{lg:'auto',xl:'400px'}} alt='UI Design' />
                        <Box  w={{base:'auto',md:'100%', lg:'100%',xl:'100%','2xl':'100%'}} my='auto' textAlign={{base:'center',md:'center',lg:'center',xl:'left','2xl':'left'}} >
                            <Text fontSize={'16px'} fontWeight={'600'} color='#16FCD2' letterSpacing={'0.1em'}>UI DESIGN</Text> 
                            <Text mt='4px' fontSize={'30px'} fontWeight='700' color='#fff' lineHeight={'48px'}>Lets talk about your company problems first</Text>    
                            <Text mt='28px' fontSize={'16px'} fontWeight='500' color='rgba(255, 255, 255, 0.6)' lineHeight={'32px'}>Delegate your ideas as quickly as possible, create beautiful designs and vivid prototypes.</Text>
                            <Stack ml={{base:'24px',md:'100px',lg:'200px',xl:'0px','2xl':'0px'}} mt='52px' direction={{base:'column',md:'row',lg:'row',xl:'row','2xl':'row'}} spacing='20px'>
                                <Box p='22px' w='241px' h='141px' bgColor={'rgba(255, 255, 255, 0.05)'} border={'1px solid rgba(255, 255, 255, 0.1)'} borderRadius='3px'>
                                    <HStack>
                                        <Stack>
                                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M23.75 3.75H6.25C4.86929 3.75 3.75 4.86929 3.75 6.25V23.75C3.75 25.1307 4.86929 26.25 6.25 26.25H23.75C25.1307 26.25 26.25 25.1307 26.25 23.75V6.25C26.25 4.86929 25.1307 3.75 23.75 3.75Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M3.75 11.25H26.25" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M11.25 26.25V11.25" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </Stack>
                                        <Text fontSize={'16px'} fontWeight='600' color='#fff'>
                                            Beautiful Design
                                        </Text>
                                    </HStack>
                                    <Text mt='14px' fontSize={'14px'} fontWeight='400' lineHeight={'24px'} color='rgba(255, 255, 255, 0.6)'>
                                        Create a modern design for your idea.
                                    </Text>
                                </Box>
                                <Box p='22px' w='241px' h='141px' bgColor={'rgba(255, 255, 255, 0.05)'} border={'1px solid rgba(255, 255, 255, 0.1)'} borderRadius='3px'>
                                    <HStack>
                                        <Stack>
                                            <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.75 4.24219L12.5875 25.4547L15.725 16.2172L24.9625 13.0797L3.75 4.24219Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M16.25 16.7422L23.75 24.2422" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </Stack>
                                        <Text fontSize={'16px'} fontWeight='600' color='#fff'>
                                            Card Name
                                        </Text>
                                    </HStack>
                                    <Text mt='14px' fontSize={'14px'} fontWeight='400' lineHeight={'24px'} color='rgba(255, 255, 255, 0.6)'>
                                        Create vivid prototypes for your designs.
                                    </Text>
                                </Box>
                            </Stack>
                            <Box mt='30px'>
                                <Link href='/comingSoon' _hover={{textDecor:'none'}}>
                                    <Button
                                        rightIcon={<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.1665 10H15.8332" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M10 4.16675L15.8333 10.0001L10 15.8334" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>}
                                        size='md'
                                        height='48px'
                                        width='200px'
                                        color='#fff'
                                        bgColor={'transparent'}
                                        _hover={{ bg: 'transparent' }}
                                        _active={{
                                            bg: 'transparent',
                                            transform: 'scale(0.98)',
                                            borderColor: 'transparent',
                                        }}
                                        >
                                        Service Detail
                                    </Button>
                                </Link>
                            </Box>
                        </Box>
                </Stack>
                <Stack direction={{base:'column',md:'column',lg:'cplumn',xl:'row','2xl':'row'}} spacing='66px' mt='124px'>
                        <Box  w={{base:'auto',md:'100%', lg:'100%',xl:'100%','2xl':'100%'}} my='auto' textAlign={{base:'center',md:'center',lg:'center',xl:'left','2xl':'left'}} >
                            <Text fontSize={'16px'} fontWeight={'600'} color='#16FCD2' letterSpacing={'0.1em'}>DEVELOPMENT</Text> 
                            <Text mt='4px' fontSize={'30px'} fontWeight='700' color='#fff' lineHeight={'48px'}>Create solutions to repetitive problems, design applications and access anywhere!</Text>    
                            <Text mt='28px' fontSize={'16px'} fontWeight='500' color='rgba(255, 255, 255, 0.6)' lineHeight={'32px'}>Just tell us your repetitive problem or the primitive method used today, and we will create a digital solution.</Text>
                            <Stack mt='52px' direction={'column'} spacing='20px'>
                                <Box w='100%' h='60px' px='22px' py='14px' bgColor='rgba(255, 255, 255, 0.05)' border={'1px solid rgba(255, 255, 255, 0.1)'} borderRadius='3px'>
                                    <HStack spacing='20px'>
                                        <Stack>
                                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M21.25 2.5H8.75C7.36929 2.5 6.25 3.61929 6.25 5V25C6.25 26.3807 7.36929 27.5 8.75 27.5H21.25C22.6307 27.5 23.75 26.3807 23.75 25V5C23.75 3.61929 22.6307 2.5 21.25 2.5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M15 22.5H15.0125" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </Stack>
                                        <Text fontSize={'16px'} fontWeight='600' color='#fff'>Mobile App Development</Text>
                                    </HStack>
                                </Box>
                                <Box w='100%' h='60px' px='22px' py='14px' bgColor='rgba(255, 255, 255, 0.05)' border={'1px solid rgba(255, 255, 255, 0.1)'} borderRadius='3px'>
                                    <HStack spacing='20px'>
                                        <Stack>
                                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M25 3.75H5C3.61929 3.75 2.5 4.86929 2.5 6.25V18.75C2.5 20.1307 3.61929 21.25 5 21.25H25C26.3807 21.25 27.5 20.1307 27.5 18.75V6.25C27.5 4.86929 26.3807 3.75 25 3.75Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M10 26.25H20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M15 21.25V26.25" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </Stack>
                                        <Text fontSize={'16px'} fontWeight='600' color='#fff'>Desktop App Development</Text>
                                    </HStack>
                                </Box><Box w='100%' h='60px' px='22px' py='14px' bgColor='rgba(255, 255, 255, 0.05)' border={'1px solid rgba(255, 255, 255, 0.1)'} borderRadius='3px'>
                                    <HStack spacing='20px'>
                                        <Stack>
                                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M2.5 15H27.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M15 2.5C18.1266 5.92294 19.9034 10.365 20 15C19.9034 19.635 18.1266 24.0771 15 27.5C11.8734 24.0771 10.0966 19.635 10 15C10.0966 10.365 11.8734 5.92294 15 2.5V2.5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </Stack>
                                        <Text fontSize={'16px'} fontWeight='600' color='#fff'>Web Development</Text>
                                    </HStack>
                                </Box>
                            </Stack>
                            <Box mt='30px' textAlign={'right'}>
                                <Link href='/serviceDetail' _hover={{textDecor:'none'}}>
                                    <Button
                                        rightIcon={<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.1665 10H15.8332" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M10 4.16675L15.8333 10.0001L10 15.8334" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>}
                                        size='md'
                                        height='48px'
                                        width='200px'
                                        color='#fff'
                                        bgColor={'transparent'}
                                        _hover={{ bg: 'transparent' }}
                                        _active={{
                                            bg: 'transparent',
                                            transform: 'scale(0.98)',
                                            borderColor: 'transparent',
                                        }}
                                        >
                                        Service Detail
                                    </Button>
                                </Link>
                            </Box>
                        </Box>
                        <Image src='/b-service.png' w='100%' h={{lg:'auto',xl:'400px'}} alt='development' />
                </Stack>
                <Stack direction={{base:'column-reverse',md:'column-reverse',lg:'column-reverse',xl:'row','2xl':'row'}} spacing='66px' mt='124px'>
                        <Image src='/c-service.png' w={'100%'} h={{lg:'auto',xl:'400px'}} alt='maintanace' />
                        <Box  w={{base:'auto',md:'100%', lg:'100%',xl:'100%','2xl':'100%'}} my='auto' textAlign={{base:'center',md:'center',lg:'center',xl:'left','2xl':'left'}} >
                            <Text fontSize={'16px'} fontWeight={'600'} color='#16FCD2' letterSpacing={'0.1em'}>MAINTENENCE</Text> 
                            <Text mt='4px' fontSize={'30px'} fontWeight='700' color='#fff' lineHeight={'48px'}>Think of your server as your own child, taking care of it every day</Text>    
                            <Text mt='28px' fontSize={'16px'} fontWeight='500' color='rgba(255, 255, 255, 0.6)' lineHeight={'32px'}>We will back up your servers every day, clean them every week, upgrade them when there is an update.</Text>
                            <SimpleGrid columns={2} spacing='20px' mt='28px'>
                                <Box>
                                    <HStack spacing={'25px'}>
                                        <Stack>
                                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="50" height="50" rx="3" fill="white" fillOpacity="0.05"/>
                                                <path d="M32.5 27.5V30.8333C32.5 31.2754 32.3244 31.6993 32.0118 32.0118C31.6993 32.3244 31.2754 32.5 30.8333 32.5H19.1667C18.7246 32.5 18.3007 32.3244 17.9882 32.0118C17.6756 31.6993 17.5 31.2754 17.5 30.8333V27.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M20.8333 23.3333L24.9999 27.4999L29.1666 23.3333" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M25 27.5V17.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </Stack>
                                        <Text fontSize={'16px'} fontWeight='500' color='#fff'>Back up every day</Text>
                                    </HStack>
                                </Box>
                                <Box>
                                    <HStack spacing={'25px'}>
                                        <Stack>
                                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="50" height="50" rx="3" fill="white" fillOpacity="0.05"/>
                                            <path d="M25 30.8334V19.1667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M19.1667 25.0001L25.0001 19.1667L30.8334 25.0001" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </Stack>
                                        <Text fontSize={'16px'} fontWeight='500' color='#fff'>Upgrade</Text>
                                    </HStack>
                                </Box>
                                <Box>
                                    <HStack spacing={'25px'}>
                                        <Stack>
                                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="50" height="50" rx="3" fill="white" fillOpacity="0.05"/>
                                                <g clipPath="url(#clip0_548_440)">
                                                    <path d="M15.8333 18.3333V23.3333H20.8333" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    <path d="M34.1667 31.6665V26.6665H29.1667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    <path d="M32.0749 22.5C31.6523 21.3056 30.934 20.2378 29.987 19.3962C29.0401 18.5545 27.8954 17.9665 26.6597 17.6869C25.424 17.4073 24.1376 17.4453 22.9206 17.7973C21.7036 18.1493 20.5955 18.8039 19.6999 19.7L15.8333 23.3333M34.1666 26.6666L30.2999 30.3C29.4043 31.1961 28.2963 31.8506 27.0792 32.2027C25.8622 32.5547 24.5758 32.5927 23.3402 32.3131C22.1045 32.0335 20.9598 31.4455 20.0128 30.6038C19.0659 29.7621 18.3476 28.6943 17.9249 27.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_548_440">
                                                        <rect width="20" height="20" fill="white" transform="translate(15 15)"/>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </Stack>
                                        <Text fontSize={'16px'} fontWeight='500' color='#fff'>Cleaning every week</Text>
                                    </HStack>
                                </Box>
                                <Box>
                                    <HStack spacing={'25px'}>
                                        <Stack>
                                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="50" height="50" rx="3" fill="white" fillOpacity="0.05"/>
                                                <path d="M33.3334 24.2333V25C33.3324 26.797 32.7505 28.5455 31.6745 29.9848C30.5986 31.4241 29.0862 32.477 27.3629 32.9866C25.6396 33.4961 23.7978 33.4349 22.1121 32.8121C20.4265 32.1894 18.9873 31.0384 18.0092 29.5309C17.0311 28.0233 16.5666 26.24 16.6848 24.4469C16.8031 22.6538 17.4978 20.9469 18.6653 19.5809C19.8329 18.2148 21.4107 17.2628 23.1636 16.8668C24.9164 16.4707 26.7503 16.6519 28.3918 17.3833" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M33.3333 18.3333L25 26.6749L22.5 24.1749" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </Stack>
                                        <Text fontSize={'16px'} fontWeight='500' color='#fff'>Back up every day</Text>
                                    </HStack>
                                </Box>
                            </SimpleGrid>
                            <Box mt='30px'>
                                <Link href='/comingSoon' _hover={{textDecor:'none'}}>
                                    <Button
                                        rightIcon={<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.1665 10H15.8332" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M10 4.16675L15.8333 10.0001L10 15.8334" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>}
                                        size='md'
                                        height='48px'
                                        width='200px'
                                        color='#fff'
                                        bgColor={'transparent'}
                                        _hover={{ bg: 'transparent' }}
                                        _active={{
                                            bg: 'transparent',
                                            transform: 'scale(0.98)',
                                            borderColor: 'transparent',
                                        }}
                                        >
                                        Service Detail
                                    </Button>
                                </Link>
                            </Box>
                        </Box>
                </Stack>
            </Container>
        </Box>
    )
}

export default Services