import { Box, Button, Center, Container, Flex, HStack, Image, Link, SimpleGrid, Stack, Text, VStack } from "@chakra-ui/react"

const ServiceDetail = () => {
    return ( 
        <Box pb='100px'>
            <Flex  mt='90px' direction={{base:'column',md:'row',lg:'row',xl:'row','2xl':'row'}} justifyContent='space-evenly' textAlign={{base:'center',md:'center',lg:'center',xl:'center','2xl':'center'}}>
                <Box>
                    <Text fontSize={'16px'} fontWeight={'600'} color='#16FCD2' letterSpacing={'0.1em'}>DEVELOPMENT</Text>
                    <Text mt='13px' fontSize={'36px'} fontWeight='700' color='#fff' lineHeight='54px'>Solve your companys repetitive <br/>problems by designing apps</Text>
                </Box>
            </Flex>

            <Box my='90px' borderTop={'2px solid rgba(255, 255, 255, 0.1)'} />

            <Container maxW='8xl'>
                <Stack direction={{base:'column',md:'column',lg:'row',xl:'row','2xl':'row'}} spacing='66px' mt='124px'>
                        <Image src='/a-serviceD.png' w='100%' h='400px' alt='' />
                        <Box  w={{base:'auto',md:'100%', lg:'100%',xl:'100%','2xl':'100%'}} my='auto' textAlign={{base:'center',md:'left',lg:'left',xl:'left','2xl':'left'}} >
                            <Text mt='28px' fontSize={'16px'} fontWeight='500' color='rgba(255, 255, 255, 0.6)' lineHeight={'32px'}>Just tell us your repetitive problem or the primitive method used today, and we will create a digital solution.</Text>
                            <Text mt='28px' fontSize={'16px'} fontWeight='500' color='rgba(255, 255, 255, 0.6)' lineHeight={'32px'}>We can build you a website, a mobile app and a desktop app. All types of applications have a good security system, are easy to maintain, and are high speed.</Text>
                            <Flex direction={'column'} mt='42px'>
                                <HStack spacing={'22px'}>
                                    <Stack>
                                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="8" height="8" transform="matrix(1 0 0 -1 0 8)" fill="white"/>
                                        </svg>
                                    </Stack>
                                    <Text fontSize={'16px'} fontWeight='500' color='#fff'>Avoid potential bugs with unit testing</Text>
                                </HStack>
                                <HStack my='20px' spacing={'22px'}>
                                    <Stack>
                                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="8" height="8" transform="matrix(1 0 0 -1 0 8)" fill="white"/>
                                        </svg>
                                    </Stack>
                                    <Text fontSize={'16px'} fontWeight='500' color='#fff'>Removing unused code will speed up the application</Text>
                                </HStack>
                                <HStack spacing={'22px'}>
                                    <Stack>
                                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="8" height="8" transform="matrix(1 0 0 -1 0 8)" fill="white"/>
                                        </svg>
                                    </Stack>
                                    <Text fontSize={'16px'} fontWeight='500' color='#fff'>The modern design pleases the users</Text>
                                </HStack>
                                <HStack mt='20px' spacing={'22px'}>
                                    <Stack>
                                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="8" height="8" transform="matrix(1 0 0 -1 0 8)" fill="white"/>
                                        </svg>
                                    </Stack>
                                    <Text fontSize={'16px'} fontWeight='500' color='#fff'>A good UX will not disappoint users</Text>
                                </HStack>
                            </Flex>
                        </Box>
                </Stack>
            </Container>

            <Center mt='124px' >
                <VStack textAlign={'center'}>
                    <Text fontSize={'16px'} fontWeight={'600'} color='#16FCD2' letterSpacing={'0.1em'}>FEATURES</Text>
                    <Text mt='13px' fontSize={'36px'} fontWeight={'700'} color='#fff' letterSpacing={'0.1em'}>Here what you will get when purchasing this service</Text>
                </VStack>
            </Center>

           <Container maxW='5xl'>
                <SimpleGrid mt='90px' columns={{base:1,md:3,lg:3,xl:3,'2xl':3}} spacing='20px' textAlign='left'>
                    <Box maxW='328px' h={{md:'360px',lg:'315px',xl:'276px','2xl':'276px'}} py='30px' px='46px' bgColor='rgba(255, 255, 255, 0.05)' borderRadius={'5px'}>
                        <Stack>
                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.4165 11.4584C10.4165 9.52454 11.1847 7.66988 12.5522 6.30243C13.9196 4.93497 15.7743 4.16675 17.7082 4.16675H24.9998V18.7501H17.7082C15.7743 18.7501 13.9196 17.9819 12.5522 16.6144C11.1847 15.2469 10.4165 13.3923 10.4165 11.4584Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M25 4.16675H32.2917C33.2492 4.16675 34.1974 4.35535 35.0821 4.72179C35.9667 5.08823 36.7706 5.62533 37.4477 6.30243C38.1248 6.97952 38.6618 7.78335 39.0283 8.66801C39.3947 9.55268 39.5833 10.5009 39.5833 11.4584C39.5833 12.416 39.3947 13.3641 39.0283 14.2488C38.6618 15.1335 38.1248 15.9373 37.4477 16.6144C36.7706 17.2915 35.9667 17.8286 35.0821 18.195C34.1974 18.5615 33.2492 18.7501 32.2917 18.7501H25V4.16675Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M25 26.0417C25 25.0841 25.1886 24.1359 25.555 23.2513C25.9215 22.3666 26.4586 21.5628 27.1357 20.8857C27.8128 20.2086 28.6166 19.6715 29.5013 19.305C30.3859 18.9386 31.3341 18.75 32.2917 18.75C33.2492 18.75 34.1974 18.9386 35.0821 19.305C35.9667 19.6715 36.7706 20.2086 37.4477 20.8857C38.1248 21.5628 38.6618 22.3666 39.0283 23.2513C39.3947 24.1359 39.5833 25.0841 39.5833 26.0417C39.5833 26.9992 39.3947 27.9474 39.0283 28.8321C38.6618 29.7167 38.1248 30.5206 37.4477 31.1977C36.7706 31.8747 35.9667 32.4119 35.0821 32.7783C34.1974 33.1447 33.2492 33.3333 32.2917 33.3333C31.3341 33.3333 30.3859 33.1447 29.5013 32.7783C28.6166 32.4119 27.8128 31.8747 27.1357 31.1977C26.4586 30.5206 25.9215 29.7167 25.555 28.8321C25.1886 27.9474 25 26.9992 25 26.0417V26.0417Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M10.4165 40.6249C10.4165 38.691 11.1847 36.8364 12.5522 35.4689C13.9196 34.1015 15.7743 33.3333 17.7082 33.3333H24.9998V40.6249C24.9998 42.5588 24.2316 44.4135 22.8642 45.7809C21.4967 47.1484 19.642 47.9166 17.7082 47.9166C15.7743 47.9166 13.9196 47.1484 12.5522 45.7809C11.1847 44.4135 10.4165 42.5588 10.4165 40.6249Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M10.4165 26.0417C10.4165 24.1078 11.1847 22.2531 12.5522 20.8857C13.9196 19.5182 15.7743 18.75 17.7082 18.75H24.9998V33.3333H17.7082C15.7743 33.3333 13.9196 32.5651 12.5522 31.1977C11.1847 29.8302 10.4165 27.9755 10.4165 26.0417Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </Stack>
                        <Text fontSize='18px' fontWeight={'700'} mt='29px' mb={'8px'} color='#fff'>Design Files</Text>
                        <Text lineHeight='32px' fontSize={'16px'} fontWeight={'500'} color='rgba(255, 255, 255, 0.6)'>Projects are well designed using Figma. You will get the design file.</Text>
                    </Box>
                    <Box maxW='328px' h={{md:'360px',lg:'315px',xl:'276px','2xl':'276px'}} py='30px' px='46px' bgColor='rgba(255, 255, 255, 0.05)' borderRadius={'5px'}>
                        <Stack>
                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.9998 45.8334C36.5058 45.8334 45.8332 36.506 45.8332 25.0001C45.8332 13.4941 36.5058 4.16675 24.9998 4.16675C13.4939 4.16675 4.1665 13.4941 4.1665 25.0001C4.1665 36.506 13.4939 45.8334 24.9998 45.8334Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M25 12.5V25L33.3333 29.1667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </Stack>
                        <Text fontSize='18px' fontWeight={'700'} mt='29px' mb={'8px'} color='#fff'>Same Day</Text>
                        <Text lineHeight='32px' fontSize={'16px'} fontWeight={'500'} color='rgba(255, 255, 255, 0.6)'>We dont want you to wait long. Everything will be finished on the same day..</Text>
                    </Box>
                    <Box maxW='328px' h={{md:'360px',lg:'315px',xl:'276px','2xl':'276px'}} py='30px' px='46px' bgColor='rgba(255, 255, 255, 0.05)' borderRadius={'5px'}>
                        <Stack>
                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="50" height="50" rx="3" fill="white" fillOpacity="0.03"/>
                                <path d="M34 29V21C33.9996 20.6493 33.9071 20.3048 33.7315 20.0012C33.556 19.6975 33.3037 19.4454 33 19.27L26 15.27C25.696 15.0945 25.3511 15.002 25 15.002C24.6489 15.002 24.304 15.0945 24 15.27L17 19.27C16.6963 19.4454 16.444 19.6975 16.2685 20.0012C16.0929 20.3048 16.0004 20.6493 16 21V29C16.0004 29.3507 16.0929 29.6952 16.2685 29.9988C16.444 30.3025 16.6963 30.5546 17 30.73L24 34.73C24.304 34.9055 24.6489 34.9979 25 34.9979C25.3511 34.9979 25.696 34.9055 26 34.73L33 30.73C33.3037 30.5546 33.556 30.3025 33.7315 29.9988C33.9071 29.6952 33.9996 29.3507 34 29Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M16.27 19.96L25 25.01L33.73 19.96" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M25 35.08V25" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </Stack>
                        <Text fontSize='18px' fontWeight={'700'} mt='29px' mb={'8px'} color='#fff'>Quality Code</Text>
                        <Text lineHeight='32px' fontSize={'16px'} fontWeight={'500'} color='rgba(255, 255, 255, 0.6)'>Code written according to good practice is highly maintainable..</Text>
                    </Box>
                    <Box maxW='328px' h={{md:'360px',lg:'315px',xl:'276px','2xl':'276px'}} py='30px' px='46px' bgColor='rgba(255, 255, 255, 0.05)' borderRadius={'5px'}>
                        <Stack>
                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M47.9168 12.5L28.1252 32.2917L17.7085 21.875L2.0835 37.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M35.4165 12.5H47.9165V25" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </Stack>
                        <Text fontSize='18px' fontWeight={'700'} mt='29px' mb={'8px'} color='#fff'>SEO</Text>
                        <Text lineHeight='32px' fontSize={'16px'} fontWeight={'500'} color='rgba(255, 255, 255, 0.6)'>The website will appear on the first page of the search engine.</Text>
                    </Box>
                    <Box maxW='328px' h={{md:'360px',lg:'315px',xl:'276px','2xl':'276px'}} py='30px' px='46px' bgColor='rgba(255, 255, 255, 0.05)' borderRadius={'5px'}>
                        <Stack>
                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M39.5833 6.25H10.4167C8.11548 6.25 6.25 8.11548 6.25 10.4167V39.5833C6.25 41.8845 8.11548 43.75 10.4167 43.75H39.5833C41.8845 43.75 43.75 41.8845 43.75 39.5833V10.4167C43.75 8.11548 41.8845 6.25 39.5833 6.25Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M6.25 18.75H43.75" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M18.75 43.75V18.75" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </Stack>
                        <Text fontSize='18px' fontWeight={'700'} mt='29px' mb={'8px'} color='#fff'>Responsive Design</Text>
                        <Text lineHeight='32px' fontSize={'16px'} fontWeight={'500'} color='rgba(255, 255, 255, 0.6)'>Access the website on any device, dont limit your visitors.</Text>
                    </Box>
                    <Box maxW='328px' h={{md:'360px',lg:'315px',xl:'276px','2xl':'276px'}} py='30px' px='46px' bgColor='rgba(255, 255, 255, 0.05)' borderRadius={'5px'}>
                        <Stack>
                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M27.0833 4.16675L6.25 29.1667H25L22.9167 45.8334L43.75 20.8334H25L27.0833 4.16675Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </Stack>
                        <Text fontSize='18px' fontWeight={'700'} mt='29px' mb={'8px'} color='#fff'>Blazing Fast</Text>
                        <Text lineHeight='32px' fontSize={'16px'} fontWeight={'500'} color='rgba(255, 255, 255, 0.6)'>A high speed website will not disappoint prospective customers.</Text>
                    </Box>
                </SimpleGrid>
           </Container>

           <Flex  mt='124px' direction={{base:'column',md:'row',lg:'row',xl:'row','2xl':'row'}} justifyContent='center' textAlign={{base:'center',md:'left',lg:'left',xl:'left','2xl':'left'}}>
                <Box my='auto' textAlign={'center'}>
                    <Text fontSize={'16px'} fontWeight={'600'} color='#16FCD2' letterSpacing={'0.1em'}>FAQ</Text>
                    <Text mt='13px' fontSize={'36px'} fontWeight='700' color='#fff' lineHeight='54px'>Frequently asked questions, maybe the same as yours</Text>
                </Box>
            </Flex>

           <Container maxW='8xl'>
            <SimpleGrid mt='78px' columns={{base:1,md:2,xl:3,'2xl':3}} spacing='27px'>
                    <Box w='100%' h='auto'>
                        <Text fontSize={'20px'} fontWeight='700' color='#fff'>How is the payment system?</Text>
                        <Text mt='20px' fontSize={'16px'} fontWeight='500' color='rgba(255, 255, 255, 0.6)' lineHeight={'32px'}>If the project has agreed, you will pay an advance, and when the progress reaches 50% you will make a second payment, and when the progress is 100% you will pay it off.</Text>
                    </Box>
                    <Box w='100%' h='auto'>
                        <Text fontSize={'20px'} fontWeight='700' color='#fff'>Can I consult first?</Text>
                        <Text mt='20px' fontSize={'16px'} fontWeight='500' color='rgba(255, 255, 255, 0.6)' lineHeight={'32px'}>Of course you can consult us first. We are very happy to help your problems and provide our best solutions. You can contact us via the contact page.</Text>
                    </Box>
                    <Box w='100%' h='auto'>
                        <Text fontSize={'20px'} fontWeight='700' color='#fff'>What if the project stops halfway? </Text>
                        <Text mt='20px' fontSize={'16px'} fontWeight='500' color='rgba(255, 255, 255, 0.6)' lineHeight={'32px'}>We promise to always finish the project on time, if a problem occurs (because of our mistake), all payments will be refunded. And the project will be terminated.</Text>
                    </Box>
                    <Box w='100%' h='auto'>
                        <Text fontSize={'20px'} fontWeight='700' color='#fff'>Does it include servers and domains? </Text>
                        <Text mt='20px' fontSize={'16px'} fontWeight='500' color='rgba(255, 255, 255, 0.6)' lineHeight={'32px'}>You dont need to think about anything else, we have everything prepared. You just need to check your progress and make sure the features you want are the right one.</Text>
                    </Box>
                    <Box w='100%' h='auto'>
                        <Text fontSize={'20px'} fontWeight='700' color='#fff'>Will I get the source code? </Text>
                        <Text mt='20px' fontSize={'16px'} fontWeight='500' color='rgba(255, 255, 255, 0.6)' lineHeight={'32px'}>When the project is 100% complete, all the resources, such as design files, analysis diagrams, source code, etc. will be provided to you. You dont need to worry about this.</Text>
                    </Box>
                    <Box w='100%' h='auto'>
                        <Text fontSize={'20px'} fontWeight='700' color='#fff'>Is there a warranty? </Text>
                        <Text mt='20px' fontSize={'16px'} fontWeight='500' color='rgba(255, 255, 255, 0.6)' lineHeight={'32px'}>1 year warranty for our errors or mistakes. If you want to add a feature that is not included in the warranty, there is another fee per feature, and the price depends on the difficulty.</Text>
                    </Box>
                </SimpleGrid>
           </Container>

            <Center mt='90px'>
                <Text fontSize={'16px'} fontWeight='700' color={'#fff'}>
                    Didnt find an answer? <Link color={'#6016FC'}> Do not hesitate to ask!</Link>
                </Text>
            </Center>
        </Box>
    )
}

export default ServiceDetail