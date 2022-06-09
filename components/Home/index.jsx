import { Box, Button, Center, Container, Divider, Flex, HStack, Image, Link, SimpleGrid, Stack, Text } from "@chakra-ui/react"
import CardProject from "./cardProject"

const Index = () => {
    return ( 
        <Box pb='110px' mt='101px'>
            <Flex direction={'column'} alignItems='center' textAlign={'center'}>
                {/* Hero */}
                <Text fontSize={'16px'} fontWeight={'600'} color='#16FCD2' letterSpacing={'0.1em'}>CLIENT-DEVELOPMENT DRIVEN</Text>
                <Text mt='13px' fontSize={'36px'} fontWeight={'700'} color='#fff' letterSpacing={'0.1em'}>We Design. We Develop. We Ship. <br /> In The Same Day.</Text>
                <Text mt='24px' fontSize={'16px'} fontWeight={'500'} color='rgba(255, 255, 255, 0.6)'>We are committed to not making clients wait. We will deliver the work <br /> as quickly as possible. Even on the same day. Even so, 
                    we do not<br /> reduce the quality of our work.</Text>
                <HStack spacing='23px' mt='40px'>
                    <Link>
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
                    <Link href="#">
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
                            Learn More
                        </Button>
                    </Link>
                </HStack>

                {/* 3 model business */}
                <SimpleGrid mt='101px' columns={3} spacing='20px' textAlign='left'>
                    <Box maxW='328px' h='276px' py='30px' px='46px' bgColor='rgba(255, 255, 255, 0.05)' borderRadius={'5px'}>
                        <Stack>
                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="50" height="50" rx="3" fill="white" fillOpacity="0.03"/>
                                <path d="M18 18.5C18 17.5717 18.3687 16.6815 19.0251 16.0251C19.6815 15.3687 20.5717 15 21.5 15H25V22H21.5C20.5717 22 19.6815 21.6313 19.0251 20.9749C18.3687 20.3185 18 19.4283 18 18.5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M25 15H28.5C28.9596 15 29.4148 15.0905 29.8394 15.2664C30.264 15.4423 30.6499 15.7001 30.9749 16.0251C31.2999 16.3501 31.5577 16.736 31.7336 17.1606C31.9095 17.5852 32 18.0404 32 18.5C32 18.9596 31.9095 19.4148 31.7336 19.8394C31.5577 20.264 31.2999 20.6499 30.9749 20.9749C30.6499 21.2999 30.264 21.5577 29.8394 21.7336C29.4148 21.9095 28.9596 22 28.5 22H25V15Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M25 25.5C25 25.0404 25.0905 24.5852 25.2664 24.1606C25.4423 23.736 25.7001 23.3501 26.0251 23.0251C26.3501 22.7001 26.736 22.4423 27.1606 22.2664C27.5852 22.0905 28.0404 22 28.5 22C28.9596 22 29.4148 22.0905 29.8394 22.2664C30.264 22.4423 30.6499 22.7001 30.9749 23.0251C31.2999 23.3501 31.5577 23.736 31.7336 24.1606C31.9095 24.5852 32 25.0404 32 25.5C32 25.9596 31.9095 26.4148 31.7336 26.8394C31.5577 27.264 31.2999 27.6499 30.9749 27.9749C30.6499 28.2999 30.264 28.5577 29.8394 28.7336C29.4148 28.9095 28.9596 29 28.5 29C28.0404 29 27.5852 28.9095 27.1606 28.7336C26.736 28.5577 26.3501 28.2999 26.0251 27.9749C25.7001 27.6499 25.4423 27.264 25.2664 26.8394C25.0905 26.4148 25 25.9596 25 25.5V25.5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M18 32.5C18 31.5717 18.3687 30.6815 19.0251 30.0251C19.6815 29.3687 20.5717 29 21.5 29H25V32.5C25 33.4283 24.6313 34.3185 23.9749 34.9749C23.3185 35.6313 22.4283 36 21.5 36C20.5717 36 19.6815 35.6313 19.0251 34.9749C18.3687 34.3185 18 33.4283 18 32.5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M18 25.5C18 24.5717 18.3687 23.6815 19.0251 23.0251C19.6815 22.3687 20.5717 22 21.5 22H25V29H21.5C20.5717 29 19.6815 28.6313 19.0251 27.9749C18.3687 27.3185 18 26.4283 18 25.5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </Stack>
                        <Text fontSize='18px' fontWeight={'700'} mt='29px' mb={'8px'} color='#fff'>Design</Text>
                        <Text lineHeight='32px' fontSize={'16px'} fontWeight={'500'} color='rgba(255, 255, 255, 0.6)'>The project interface will be designed first, our favorite tool is Figma.</Text>
                    </Box>
                    <Box maxW='328px' h='276px' py='30px' px='46px' bgColor='rgba(255, 255, 255, 0.05)' borderRadius={'5px'}>
                        <Stack>
                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="50" height="50" rx="3" fill="white" fillOpacity="0.03"/>
                                <path d="M29 31L35 25L29 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M21 19L15 25L21 31" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </Stack>
                        <Text fontSize='18px' fontWeight={'700'} mt='29px' mb={'8px'} color='#fff'>Develop</Text>
                        <Text lineHeight='32px' fontSize={'16px'} fontWeight={'500'} color='rgba(255, 255, 255, 0.6)'>Transform design and write business logic here. Choose the technology you want.</Text>
                    </Box>
                    <Box maxW='328px' h='276px' py='30px' px='46px' bgColor='rgba(255, 255, 255, 0.05)' borderRadius={'5px'}>
                        <Stack>
                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="50" height="50" rx="3" fill="white" fillOpacity="0.03"/>
                                <path d="M34 29V21C33.9996 20.6493 33.9071 20.3048 33.7315 20.0012C33.556 19.6975 33.3037 19.4454 33 19.27L26 15.27C25.696 15.0945 25.3511 15.002 25 15.002C24.6489 15.002 24.304 15.0945 24 15.27L17 19.27C16.6963 19.4454 16.444 19.6975 16.2685 20.0012C16.0929 20.3048 16.0004 20.6493 16 21V29C16.0004 29.3507 16.0929 29.6952 16.2685 29.9988C16.444 30.3025 16.6963 30.5546 17 30.73L24 34.73C24.304 34.9055 24.6489 34.9979 25 34.9979C25.3511 34.9979 25.696 34.9055 26 34.73L33 30.73C33.3037 30.5546 33.556 30.3025 33.7315 29.9988C33.9071 29.6952 33.9996 29.3507 34 29Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M16.27 19.96L25 25.01L33.73 19.96" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M25 35.08V25" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </Stack>
                        <Text fontSize='18px' fontWeight={'700'} mt='29px' mb={'8px'} color='#fff'>Ship</Text>
                        <Text lineHeight='32px' fontSize={'16px'} fontWeight={'500'} color='rgba(255, 255, 255, 0.6)'>After the work is complete, we will send the project and all its assets to you.</Text>
                    </Box>
                </SimpleGrid>
                            
                {/* Logo Partner */}
                <Box w='1024px' h='106px' py='32px' px='120px' mt='60px' borderBottom={'2px solid rgba(255, 255, 255, 0.1)'} borderTop={'2px solid rgba(255, 255, 255, 0.1)'}>
                    <SimpleGrid columns={5} spacing='44px'>
                        <Image src='/a-logo.png' w='100%' h='34px' alt='' />
                        <Image src='/b-logo.png' w='100%' h='34px' alt='' />
                        <Image src='/c-logo.png' w='100%' h='34px' alt='' />
                        <Image src='/d-logo.png' w='100%' h='32px' alt='' />
                        <Image src='/e-logo.png' w='100%' h='34px' alt='' />
                    </SimpleGrid>
                </Box>

                {/* How We Work */}
                <Flex direction='row' mt='130px'>
                    <Image src='/howwework.png' w='100%' h='525px' alt='' />
                    <Box my='auto' textAlign='left'>
                        <Text fontSize={'16px'} fontWeight={'600'} color='#16FCD2' letterSpacing={'0.1em'}>CLIENT-DEVELOPMENT DRIVEN</Text> 
                        <Text mt='4px' fontSize={'30px'} fontWeight='700' color='#fff' lineHeight={'48px'}>Everything is well planned, well designed and developed wholeheartedly</Text>    
                        <Text mt='28px' fontSize={'16px'} fontWeight='500' color='rgba(255, 255, 255, 0.6)' lineHeight={'32px'}>Careful planning makes us confident, developed with best practices so that the project can be maintained. We always test projects before they are shipped.</Text>
                    </Box>
                </Flex>

                {/* our team */}
                <Flex direction='column' mt='120px'>
                    <Flex direction={'row'}>
                        <Box my='auto' textAlign='left'>
                            <Text fontSize={'16px'} fontWeight={'600'} color='#16FCD2' letterSpacing={'0.1em'}>Our Team</Text> 
                            <Text mt='4px' fontSize={'30px'} fontWeight='700' color='#fff' lineHeight={'48px'}>We are a team of designers,<br /> engineers and analysts</Text>    
                            <Text mt='28px' fontSize={'16px'} fontWeight='500' color='rgba(255, 255, 255, 0.6)' lineHeight={'32px'}>Our team consists of many creative people. We are <br /> committed to maintaining quality work as well as speed. These creative <br />people work together to create  maximum work results.</Text>
                            <Link href="#" alignItems={'left'}>
                            <Button mt='48px'
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
                                See Our Teams
                            </Button>
                        </Link>
                        </Box>
                        <Image src='/our-team.png' w='605px' h='549px' alt='' />
                    </Flex>

                    <Box mt='110px' borderTop='2px solid rgba(255, 255, 255, 0.1)' />
                </Flex>

                 {/* Projects */}
                 <Box mt='110px'>      
                    <Text fontSize={'16px'} fontWeight={'600'} color='#16FCD2' letterSpacing={'0.1em'}>Projects</Text>
                    <Text mt='4px' fontSize={'36px'} fontWeight={'700'} color='#fff' letterSpacing={'0.1em'}>We have completed many <br /> amazing projects that you will <br /> not believe</Text>
                    <SimpleGrid mt='71px' columns={2} spacing='20px'>
                        <CardProject image={'/project.png'} title={'The Mobile App Landing Page'} desc={'A landing page for mobile app'} />
                        <CardProject image={'/project.png'} title={'The Mobile App Landing Page'} desc={'A landing page for mobile app'} />
                    </SimpleGrid>
                </Box>
            </Flex>
        </Box>
    )
}

export default Index