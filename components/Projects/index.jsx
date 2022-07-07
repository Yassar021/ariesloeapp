import { Box, Button, Center, Container, Flex, HStack, Link, Select, SimpleGrid, Stack, Text } from "@chakra-ui/react"
import CardProject from "./cardProjects"

const Projects = () => {
    return ( 
        <Box pb='90px'>
            <Flex  mt='90px' direction={{base:'column',md:'row',lg:'row',xl:'row','2xl':'row'}} justifyContent='space-evenly' textAlign={{base:'center',md:'center',lg:'center',xl:'center','2xl':'center'}}>
                <Box>
                    <Text fontSize={'16px'} fontWeight={'600'} color='#16FCD2' letterSpacing={'0.1em'}>PROJECTS</Text>
                    <Text mt='13px' fontSize={{base:'22px',md:'36px'}} fontWeight='700' color='#fff' lineHeight='54px'>We have completed many <br/> amazing projectsthat you will not believe</Text>
                </Box>

                {/* <Box my='auto'>
                    <Select  placeholder='Technology' color='rgba(255, 255, 255, 0.4)'  w='174px' h='40px' borderColor={'2px solid rgba(255, 255, 255, 0.4)'}
                        _hover={{ bg: 'transparent' }}
                    >
                        <option value='option1'>UI Design</option>
                        <option value='option2'>Web Development</option>
                        <option value='option3'>Mobile Development</option>
                        <option value='option4'>Maintenence</option>
                    </Select>
                </Box> */}
            </Flex>

            <Box my='90px' borderTop={'2px solid rgba(255, 255, 255, 0.1)'} />

            <Container maxW='8xl'>            
                <Box mt='110px' textAlign={{base:'center',md:'center',lg:'center',xl:'center','2xl':'center'}} alignContent='center'>       
                    <SimpleGrid mt='71px' columns={{base:1,md:2}} spacing='20px'>
                    <CardProject image={'/bumdes-app.jpg'} title={'BUMDES Mobile App'} desc={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, vero.'} />
                    <CardProject image={'/nature-web.png'} title={'Nature Healteh App'} desc={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, vero.'} />
                    <CardProject image={'/ArahSatuAbadi.png'} title={'Arah Satu Abadi Web App'} desc={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, vero.'} />
                    <CardProject image={'/simpeka.png'} title={'Simpeka Web Dashboard'} desc={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, vero.'} />
                    </SimpleGrid>
                    {/* <Center>
                            <Link href="/projects" alignItems={'left'}>
                                    <Button mt='91px'
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
                                        Load More
                                    </Button>
                                </Link>
                    </Center> */}
                </Box>
            </Container>
        </Box>
    )
}

export default Projects