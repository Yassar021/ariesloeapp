import { Box, Button, Flex, HStack, Link, SimpleGrid, Stack, Text } from "@chakra-ui/react";

export default function Service() {
    return (
        <Box pb='200px' bgColor='#221048' px={{base:'0px',md:'60px'}} alignItems='center' textAlign={'center'}>
            <Flex direction={'column'}  alignItems='center' textAlign={'center'}>
                <Text mt='90px' fontSize={'16px'} fontWeight={'600'} color='#16FCD2' letterSpacing={'0.1em'}> Get Started</Text>
                <Text mt='13px' fontSize={'36px'} fontWeight={'700'} color='#fff' letterSpacing={'0.1em'}>What do you need? Choose a service that can help you</Text>

                <SimpleGrid columns={{md:1,lg:2,xl:3,'2xl':3}} spacing='20px' mt='70px'>
                    <Box w={{base:'100%',md:'100%'}} h={{base:'562px',md:'474px'}} bgColor={'#3F2379'} py={'58px'} px={{base:'37px',md:'47px'}} borderRadius={'10px'}>
                        <Stack direction={{base:'column',md:'row',lg:'row',xl:'row','2xl':'row'}} spacing='48px'>
                            <Box mb='auto'>
                                <Text fontSize={'16px'} fontWeight='700' color='#fff'>
                                    UI Design
                                </Text>
                            </Box>
                            <Box>
                                <Text fontSize={'12px'} fontWeight='400' color='rgba(255, 255, 255, 0.6)'>Starting from</Text>
                                <Text fontSize={'46px'} fontWeight='700' color='#fff'>1200$</Text>
                            </Box>
                        </Stack>
                        <Box mt='37px' borderTop={'2px solid rgba(255, 255, 255, 0.05)'} />
                        <Box mt='37px' mb='50px'>   
                            <Text fontSize={'16px'} fontWeight='500' color='#fff'>
                                10 design pages 
                            </Text>
                            <Text my='8px' fontSize={'16px'} fontWeight='500' color='#fff'>
                                Well-documented 
                            </Text>
                            <Text fontSize={'16px'} fontWeight='500' color='#fff'>
                                4 revisions 
                            </Text>
                            <Text mt='8px' fontSize={'16px'} fontWeight='500' color='#fff'>
                                $100/additional page 
                            </Text>
                        </Box>
                        <Link>
                            <Button
                                size='lg'
                                fontSize='16px'
                                fontWeight={'600'}
                                height='52px'
                                width='234px'
                                bgColor='#fff'
                                color='#3F2379'
                                _hover={{ bg: '#fff' }}
                                _active={{
                                bg: '#fff',
                                transform: 'scale(0.98)',
                                borderColor: '#bec3c9',
                            }}
                            >
                                Detail
                            </Button>
                        </Link>
                    </Box>
                    <Box w={{base:'100%',md:'100%'}} h={{base:'562px',md:'474px'}} bgColor={'#233679'} py={'58px'} px={{base:'37px',md:'47px'}}  borderRadius={'10px'}>
                            <Stack direction={{base:'column',md:'row',lg:'row',xl:'row','2xl':'row'}} spacing='48px'>
                                <Box mb='auto'>
                                    <Text fontSize={'16px'} fontWeight='700' color='#fff'>
                                        Development
                                    </Text>
                                </Box>
                                <Box>
                                    <Text fontSize={'12px'} fontWeight='400' color='rgba(255, 255, 255, 0.6)'>Starting from</Text>
                                    <Text fontSize={'46px'} fontWeight='700' color='#fff'>5000$</Text>
                                </Box>
                            </Stack>
                            <Box mt='37px' borderTop={'2px solid rgba(255, 255, 255, 0.05)'} />
                            <Box mt='37px' mb='50px'>   
                                <Text fontSize={'16px'} fontWeight='500' color='#fff'>
                                    Web & Mobile 
                                </Text>
                                <Text my='8px' fontSize={'16px'} fontWeight='500' color='#fff'>
                                    Well-documented 
                                </Text>
                                <Text fontSize={'16px'} fontWeight='500' color='#fff'>
                                    8 revisions 
                                </Text>
                                <Text mt='8px' fontSize={'16px'} fontWeight='500' color='#fff'>
                                    $1000/additional feature
                                </Text>
                            </Box>
                            <Link>
                                <Button
                                    size='lg'
                                    fontSize='16px'
                                    fontWeight={'600'}
                                    height='52px'
                                    width='234px'
                                    bgColor='#fff'
                                    color='#3F2379'
                                    _hover={{ bg: '#fff' }}
                                    _active={{
                                    bg: '#fff',
                                    transform: 'scale(0.98)',
                                    borderColor: '#bec3c9',
                                }}
                                >
                                    Detail
                                    </Button>
                            </Link>
                    </Box>
                    <Box ml={{base:'0px',md:'0px',lg:'192px',xl:'0px','2xl':'0px'}} w={{base:'100%',md:'100%'}} h={{base:'562px',md:'474px'}} bgColor={'#792366'} py={'58px'} px={{base:'37px',md:'47px'}}  borderRadius={'10px'}>
                            <Stack  direction={{base:'column',md:'row',lg:'row',xl:'row','2xl':'row'}} spacing='48px'>
                                <Box mb='auto'>
                                    <Text fontSize={'16px'} fontWeight='700' color='#fff'>
                                        Maintenence
                                    </Text>
                                </Box>
                                <Box>
                                    <Text fontSize={'12px'} fontWeight='400' color='rgba(255, 255, 255, 0.6)'>Starting from</Text>
                                    <Text fontSize={'46px'} fontWeight='700' color='#fff'>3000$</Text>
                                </Box>
                            </Stack>
                            <Box mt='37px' borderTop={'2px solid rgba(255, 255, 255, 0.05)'} />
                            <Box mt='37px' mb='50px'>   
                                <Text fontSize={'16px'} fontWeight='500' color='#fff'>
                                    Daily backup 
                                </Text>
                                <Text my='8px' fontSize={'16px'} fontWeight='500' color='#fff'>
                                    3 hourse of maintenance
                                </Text>
                                <Text fontSize={'16px'} fontWeight='500' color='#fff'>
                                    Including fixing 
                                </Text>
                                <Text mt='8px' fontSize={'16px'} fontWeight='500' color='#fff'>
                                    $50/additional hour
                                </Text>
                            </Box>
                            <Link>
                                <Button
                                    size='lg'
                                    fontSize='16px'
                                    fontWeight={'600'}
                                    height='52px'
                                    width='234px'
                                    bgColor='#fff'
                                    color='#3F2379'
                                    _hover={{ bg: '#fff' }}
                                    _active={{
                                    bg: '#fff',
                                    transform: 'scale(0.98)',
                                    borderColor: '#bec3c9',
                                }}
                                >
                                    Detail
                                    </Button>
                            </Link>
                    </Box>
                </SimpleGrid>
            
            </Flex>
        </Box>
    )
}
