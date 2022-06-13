import {Box, Button, Container, Divider, Flex, HStack, Image, Link, SimpleGrid, Stack, Text} from "@chakra-ui/react"
import CardTeam from "./cardTeam"

const About = () => {
    return ( 
        <Box pb='126px'>
            <Container maxW='8xl'>
                <Flex px={{'2xl':'160px'}} mb='120px'  mt='90px' direction={{base:'column-reverse',md:'row',lg:'row',xl:'row','2xl':'row'}} justifyContent='space-evenly' textAlign={{base:'center',md:'left',lg:'left',xl:'left','2xl':'left'}}>
                    <Box mt={{base:'40px',md:'0px',lg:'0px',xl:'0px','2xl':'0px'}} w={{base:'100%',md:'394px',lg:'100%',xl:'412px','2xl':'40%'}} h='479px'>
                        <Image src='/aboutus.png' w='100%' H='479px' alt='' />
                    </Box>
                    <Box ml={{base:'0px',md:'74px',lg:'74px',xl:'74px','2xl':'74px'}} my='auto' w='100%'>
                        <Text fontSize={'16px'} fontWeight={'600'} color='#16FCD2' letterSpacing={'0.1em'}>ABOUT</Text>
                        <Text mt='13px' fontSize={'36px'} fontWeight='700' color='#fff' lineHeight='54px'>We are creative, smart and <br />hardworking people</Text>
                        <Text mb='47px' mt='24px' fontSize={'16px'} fontWeight='500' color='rgba(255, 255, 255, 0.6)' lineHeight='32px'>Several creative people gather in the same place - thats Collosal. We collaborate to produce  the best results, loved by clients and comfortable for users. Here we maintain togetherness even 
                                though  with different backgrounds, all the people here are already experts in their respective fields.</Text>
                    </Box>
                </Flex>
                <Divider orientation='horizontal' borderColor='4px solid rgba(255, 255, 255, 0.1)' />
            </Container>

            <Container maxW='8xl'>
                {/* Statics */}
            <Flex direction={'column'} alignItems='center' textAlign={'center'} mt='115px'>
                <Text fontSize={'16px'} fontWeight={'600'} color='#16FCD2' letterSpacing={'0.1em'}>STATISTICS</Text>
                <Text mt='13px' fontSize={'36px'} fontWeight={'700'} color='#fff' letterSpacing={'0.1em'}>In 3 years we reached 8<br/> countries, 193 clients and earning<br/> $100k USD</Text>
                <Box mt='90px' mb={{base:'120px',md:'0px',lg:'0px',xl:'0px','2xl':'0px'}} bgColor={'rgba(255, 255, 255, 0.05)'} borderRadius='3px' h={{base:'457px',md:'157px'}} w={{base:'100%',md:'760px',lg:'1024px',xl:'1024px','2xl':'1024px'}} py='43px' px={{base:'20px',md:'40px',lg:'80px',xl:'80px','2xl':'80px'}}>
                    <Flex direction={{base:'column',md:'row',lg:'row',xl:'row','2xl':'row'}} justifyContent='space-between'>
                        <Box textAlign={'left'}>
                            <HStack spacing='40px'>
                                <Stack>
                                    <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="70" height="70" rx="3" fill="white" fillOpacity="0.05"/>
                                        <path d="M25 38.75C25 38.75 26.25 37.5 30 37.5C33.75 37.5 36.25 40 40 40C43.75 40 45 38.75 45 38.75V23.75C45 23.75 43.75 25 40 25C36.25 25 33.75 22.5 30 22.5C26.25 22.5 25 23.75 25 23.75V38.75Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M25 47.5V38.75" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </Stack>
                                <Box>
                                    <Text fontSize={'36px'} fontWeight='700' color='#fff'>12</Text>
                                    <Text fontSize={'16px'} fontWeight='700' color='rgba(255, 255, 255, 0.6)' letterSpacing={'0.1em'}>COUTRIES</Text>
                                </Box>
                            </HStack>
                        </Box>
                        <Box my={{base:'60px',md:'0px',lg:'0px',xl:'0px','2xl':'0px'}} textAlign={'left'}>
                            <HStack spacing='40px'>
                                <Stack>
                                    <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="70" height="70" rx="3" fill="white" fillOpacity="0.05"/>
                                        <path d="M45 46.25V43.75C45 42.4239 44.4732 41.1521 43.5355 40.2145C42.5979 39.2768 41.3261 38.75 40 38.75H30C28.6739 38.75 27.4021 39.2768 26.4645 40.2145C25.5268 41.1521 25 42.4239 25 43.75V46.25" stroke="white" strokeWidth="2" strokeLnecap="round" strokeLnejoin="round"/>
                                        <path d="M35 33.75C37.7614 33.75 40 31.5114 40 28.75C40 25.9886 37.7614 23.75 35 23.75C32.2386 23.75 30 25.9886 30 28.75C30 31.5114 32.2386 33.75 35 33.75Z" stroke="white" strokeWidth="2" strokeLnecap="round" strokeLnejoin="round"/>
                                    </svg>
                                </Stack>
                                <Box>
                                    <Text fontSize={'36px'} fontWeight='700' color='#fff'>193</Text>
                                    <Text fontSize={'16px'} fontWeight='700' color='rgba(255, 255, 255, 0.6)'letterSpacing={'0.1em'}>CLIENTS</Text>
                                </Box>
                            </HStack>
                        </Box>
                        <Box textAlign={'left'}>
                            <HStack spacing='40px'>
                                <Stack>
                                    <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="70" height="70" rx="3" fill="white" fillOpacity="0.05"/>
                                        <path d="M35 21.25V48.75" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M41.25 26.25H31.875C30.7147 26.25 29.6019 26.7109 28.7814 27.5314C27.9609 28.3519 27.5 29.4647 27.5 30.625C27.5 31.7853 27.9609 32.8981 28.7814 33.7186C29.6019 34.5391 30.7147 35 31.875 35H38.125C39.2853 35 40.3981 35.4609 41.2186 36.2814C42.0391 37.1019 42.5 38.2147 42.5 39.375C42.5 40.5353 42.0391 41.6481 41.2186 42.4686C40.3981 43.2891 39.2853 43.75 38.125 43.75H27.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </Stack>
                                <Box>
                                    <Text fontSize={'36px'} fontWeight='700' color='#fff'>$100k</Text>
                                    <Text fontSize={'16px'} fontWeight='700' color='rgba(255, 255, 255, 0.6)' letterSpacing={'0.1em'}>EARNINGS</Text>
                                </Box>
                            </HStack>
                        </Box>
                    </Flex>
                </Box>
                
                {/* Clients or Sponsored */}
                    <Box w={{base:'220px',md:'760px',lg:'1024px',xl:'1024px','2xl':'1024px'}} h={{base:'200px',md:'106px'}} py='32px' px={{base:'20px',md:'120px'}} mt='54px' borderBottom={'2px solid rgba(255, 255, 255, 0.1)'} borderTop={'2px solid rgba(255, 255, 255, 0.1)'}>
                        <SimpleGrid columns={{base:2,md:4}} spacing='44px'>
                            <Image src='/a-logo.png' w='100%' h='34px' alt='' />
                            <Image src='/c-logo.png' w='100%' h='34px' alt='' />
                            <Image src='/d-logo.png' w='100%' h='32px' alt='' />
                            <Image src='/e-logo.png' w='100%' h='34px' alt='' />
                        </SimpleGrid>
                    </Box>

                <Box mt='120px'>                    
                    <Text fontSize={'16px'} fontWeight={'600'} color='#16FCD2' letterSpacing={'0.1em'}>OUR TEAM</Text>
                    <Text mt='13px' fontSize={'36px'} fontWeight='700' color='#fff' lineHeight='54px'>Meet the team! All creative<br/> people are here</Text>

                    <SimpleGrid mt='100px' columns={{base:1,md:2,lg:3,xl:3,'2xl':3}} spacing='22px'>
                        <CardTeam image={'/team1.png'} name={'Albert Flores'} position={'Founder'} />
                        <CardTeam image={'/teamyjr.jpeg'} name={'Ahmad Muyassar'} position={'Front End Developer'} />
                        <CardTeam image={'/fhr.jpeg'} name={'Muhammad Fahrullah'} position={'Mobile Developer'} />

                        <CardTeam image={'/sr.jpg'} name={'Suarmin Rais'} position={'Software Engineer'} />
                        <CardTeam image={'/aldi.jpeg'} name={'Risaldi Mardiansyah'} position={'UI Designer'} />
                        <CardTeam image={'/team6.png'} name={'Devon Lane'} position={'Back End Developer'} />
                    </SimpleGrid>
                </Box>
            </Flex>    
            </Container>           
        </Box>
    )
}

export default About