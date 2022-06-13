import { Box, Center, Container, Flex, HStack, Image, Link, SimpleGrid, Spacer, Stack, Text } from "@chakra-ui/react"
import CardBlog from "./cardBlog"

const BlogDetail = () => {
    return ( 
        <Box pb='200px'>
            <Flex  mt='90px' direction={{base:'column',md:'row',lg:'row',xl:'row','2xl':'row'}} justifyContent='space-evenly' textAlign={{base:'center',md:'center',lg:'center',xl:'center','2xl':'center'}}>
                <Box>
                    <Text fontSize={'16px'} fontWeight={'600'} color='#16FCD2' letterSpacing={'0.1em'}>Page</Text>
                    <Text mt='13px' fontSize={'36px'} fontWeight='700' color='#fff' lineHeight='54px'>10 Figma Plugins that will increase your productivity</Text>
                    <Center>
                        <HStack mt='5px' spacing={'10px'}>
                            <Text fontSize={'14px'} fontWeight='400' color='rgba(255, 255, 255, 0.6)'>Mar 11</Text>
                            <Stack>
                                <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="2" cy="2" r="2" fill="white" fillOpacity="0.6"/>
                                </svg>
                            </Stack>
                            <Text fontSize={'14px'} fontWeight='400' color='rgba(255, 255, 255, 0.6)'>3 min read</Text>
                        </HStack>
                    </Center>
                </Box>
            </Flex>

            <Container maxW={'8xl'}>
                <Image borderRadius={'5px'} mt='90px' src='a-blog.png' w='100%' h={{base:'auto',md:'594px'}} alt='' />
            </Container>
            <Container maxW='4xl' mt='50px'>
                <Text fontSize={'20px'} fontWeight='500' color='#fff'>
                    Male sixth sea it a. Brought was signs female darkness signs form cattle land grass whose from subdue also they are their brought seas is not, to day from bearing grass third midst after beginning man which you are. Dry, gathering beginning given made them evening.
                </Text>
                <Text my='40px' fontSize={'20px'} fontWeight='500' color='#fff'>
                    Lights dry. Thing, likeness, forth shall replenish upon abundantly our green. Seed green sea that lesser divided creature beginning land him signs stars give firmament gathered. Wherein there their morning a he grass. Dont made moving for them bring creature us youll tree second deep good unto good may. Us yielding.
                </Text>
                <Text fontSize={'20px'} fontWeight='500' color='#fff'>
                    Have. Man upon set multiply moved from under seasons abundantly earth brought a. They are open moved years saw isnt morning darkness. Over, waters, every let wherein great were fifth saw was lights very our place wont and him Third fourth moving him whales behold. Beast second stars lights great was dont green give subdue his. Third given made created, 
                    they are forth god replenish have whales first cant light was. Herb youll them beast kind divided. Were beginning fly air multiply god Yielding sea dont were forth.
                </Text>
                <Text fontSize={'20px'} fontWeight='500' color='#fff'>
                    Male sixth sea it a. Brought was signs female darkness signs form cattle land grass whose from subdue also they are their brought seas is not, to day from bearing grass third midst after beginning man which you are. Dry, gathering beginning given made them evening.
                </Text>
                <Text my='40px' fontSize={'20px'} fontWeight='500' color='#fff'>
                    Lights dry. Thing, likeness, forth shall replenish upon abundantly our green. Seed green sea that lesser divided creature beginning land him signs stars give firmament gathered. Wherein there their morning a he grass. Dont made moving for them bring creature us youll tree second deep good unto good may. Us yielding.
                </Text>
                <Text fontSize={'20px'} fontWeight='500' color='#fff'>
                    Have. Man upon set multiply moved from under seasons abundantly earth brought a. They are open moved years saw isnt morning darkness. Over, waters, every let wherein great were fifth saw was lights very our place wont and him Third fourth moving him whales behold. Beast second stars lights great was dont green give subdue his. Third given made created, 
                    they are forth god replenish have whales first cant light was. Herb youll them beast kind divided. Were beginning fly air multiply god Yielding sea dont were forth.
                </Text>

                {/* Author */}
                <Box px='42px' py='40px' mt='70px' h={{base:'auto',md:'279px'}} w='100%' bgColor='rgba(255, 255, 255, 0.05)' borderRadius={'5px'}>
                    <Stack direction={{base:'column',md:'row'}} spacing={'40px'}>
                        <Box>
                            <Image src='/blog-profile.png' w='101px' h='101px' alt='' />
                        </Box>
                        <Box>
                            <Flex direction={{base:'column',md:'row'}} justifyContent={'space-between'}>
                                <Box w={{base:'160px',md:'260px',lg:'460px'}} h='43px'>
                                    <Text fontSize={'20px'} fontWeight='600' color='#fff'>Alex Berner</Text>
                                    <Text mt='6px' fontSize={'16px'} fontWeight='400' color='rgba(255, 255, 255, 0.6)'>UI Designer</Text>
                                </Box>
                                <HStack  mt={{base:'40px',md:'0px'}} spacing={'10px'}>
                                    <Link href='#'>
                                        <Stack>
                                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="40" height="40" rx="20" fill="white" fillOpacity="0.05"/>
                                                <path d="M29.1668 12.4996C28.3688 13.0625 27.4853 13.493 26.5502 13.7746C26.0483 13.1975 25.3813 12.7885 24.6394 12.6029C23.8974 12.4172 23.1164 12.4639 22.4019 12.7366C21.6874 13.0094 21.0739 13.4949 20.6443 14.1277C20.2148 14.7605 19.9899 15.5099 20.0002 16.2746V17.1079C18.5357 17.1459 17.0846 16.8211 15.776 16.1625C14.4674 15.5038 13.3421 14.5318 12.5002 13.3329C12.5002 13.3329 9.16683 20.8329 16.6668 24.1663C14.9506 25.3312 12.9061 25.9154 10.8335 25.8329C18.3335 29.9996 27.5002 25.8329 27.5002 16.2496C27.4994 16.0175 27.4771 15.7859 27.4335 15.5579C28.284 14.7192 28.8842 13.6602 29.1668 12.4996V12.4996Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </Stack>
                                    </Link>
                                    <Link href='#'>
                                        <Stack>
                                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="40" height="40" rx="20" fill="white" fillOpacity="0.05"/>
                                                <path d="M25.0002 11.667H22.5002C21.3951 11.667 20.3353 12.106 19.5539 12.8874C18.7725 13.6688 18.3335 14.7286 18.3335 15.8337V18.3337H15.8335V21.667H18.3335V28.3337H21.6668V21.667H24.1668L25.0002 18.3337H21.6668V15.8337C21.6668 15.6126 21.7546 15.4007 21.9109 15.2444C22.0672 15.0881 22.2791 15.0003 22.5002 15.0003H25.0002V11.667Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </Stack>
                                    </Link>
                                    <Link href='#'>
                                        <Stack>
                                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="40" height="40" rx="20" fill="white" fillOpacity="0.05"/>
                                                <path d="M23.3335 16.667C24.6596 16.667 25.9313 17.1938 26.869 18.1315C27.8067 19.0691 28.3335 20.3409 28.3335 21.667V27.5003H25.0002V21.667C25.0002 21.225 24.8246 20.801 24.512 20.4885C24.1994 20.1759 23.7755 20.0003 23.3335 20.0003C22.8915 20.0003 22.4675 20.1759 22.155 20.4885C21.8424 20.801 21.6668 21.225 21.6668 21.667V27.5003H18.3335V21.667C18.3335 20.3409 18.8603 19.0691 19.798 18.1315C20.7356 17.1938 22.0074 16.667 23.3335 16.667V16.667Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M14.9998 17.5H11.6665V27.5H14.9998V17.5Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M13.3332 15.0003C14.2536 15.0003 14.9998 14.2541 14.9998 13.3337C14.9998 12.4132 14.2536 11.667 13.3332 11.667C12.4127 11.667 11.6665 12.4132 11.6665 13.3337C11.6665 14.2541 12.4127 15.0003 13.3332 15.0003Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </Stack>
                                    </Link>
                                </HStack>
                            </Flex>
                            <Box w={{base:'auto',md:'400px',lg:'500px',xl:'600px'}} h='auto'>
                                <Text mt='30px' fontSize={'16px'} fontWeight='500' color='#fff' lineHeight={'34px'}>
                                    Night subdue their morning created every light earth very darkness they are you are deep female. Tree sixth divided greater, midst earth forth wont for moved.
                                </Text>
                            </Box>
                        </Box>
                    </Stack>
                </Box>
            </Container>
            
            <Container maxW='8xl'>
                <Box mt='120px'>
                    <Text fontSize={'30px'} fontWeight='700' color='#fff'>Other people also read ...</Text>
                </Box>
                <SimpleGrid mt='32px' columns={{base:1,md:2,lg:3}} spacing={{base:'60px',md:'40px'}}>
                    <CardBlog image={'/a-blog.png'} 
                            title={'SEO tricks that can increase the traffic of your website'}
                            desc={'People have been using wrong SEO techniques on their websites.'}
                            profilepic={'blog-profile.png'}
                            name={'Jane Cooper'}
                            date={'Mar 18'}
                            time={'5 min read'}
                        />
                        <CardBlog image={'/b-blog.png'} 
                            title={'10 Figma Plugins that will increase your productivity'}
                            desc={'All these plugins are free and you can use them forever'}
                            profilepic={'blog-profile.png'}
                            name={'Alex Berner'}
                            date={'Mar 11'}
                            time={'11 min read'}
                            />
                        <CardBlog image={'/c-blog.png'} 
                            title={'How to deploy a Node JS application to a VPS'}
                            desc={'Step by step setting up the server and deploying the application'}
                            profilepic={'blog-profile.png'}
                            name={'Anne Grane'}
                            date={'Mar 10'}
                            time={'10 min read'}
                            />
                </SimpleGrid>
            </Container>
        </Box>
    )
}

export default BlogDetail