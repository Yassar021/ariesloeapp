import { Box, Flex, Text } from "@chakra-ui/react"

const WhyUs = () => {
    return(
        <Box pb='114px'>
            <Flex  mt='101px' direction={{base:'column',md:'row',lg:'row',xl:'row','2xl':'row'}} justifyContent='center' textAlign={{base:'center',md:'left',lg:'left',xl:'left','2xl':'left'}}>
                <Box my='auto' textAlign={'center'}>
                    <Text fontSize={'32'} fontWeight={'700'} color='#16FCD2' letterSpacing={'0.1em'}>Why Us</Text>
                    {/* <Text mt='13px' fontSize={'16'} fontWeight='500' color='#fff' lineHeight='54px'>Terms & Conditions</Text> */}
                </Box>
            </Flex>

            <Box my='90px' borderTop={'2px solid rgba(255, 255, 255, 0.1)'} />

            <Box maxW='650px' mx='auto' shadow={'lg'}>
                <Text mt='40px' fontSize={'34px'} fontWeight='700' color='#fff'>
                    What is Aganta
                </Text>
                <Text mt='20px' fontSize={'16'} fontWeight='500' color='#fff'>
                    Aganta is a company engaged in consulting services it, we have stood since 2022 with a commitment to be the best. Our team stands behind our promise to provide timely and quality service, in every line of code we create with love.
                    <br/><br/>
                    Currently we focus on providing services for various fields such as finance, ecommerce, education and enterprise solution. In addition we also provide support and maintenance services along with one of our favorite services is Developer as Service.
                </Text>
                <Text mt='40px' fontSize={'34px'} fontWeight='700' color='#fff'>
                    Why choose Aganta
                </Text>
                <Text mt='40px' fontSize={'30px'} fontWeight='700' color='#fff'>
                    Trusted by national and international companies
                </Text>
                <Text mt='20px' fontSize={'16px'} fontWeight='500' color='#fff'>
                    In our journey of more than 5 years, many of our clients come from home and abroad. Many of them work together with us more than once, and many also have long-term cooperation with us.
                </Text>
                <Text mt='20px' fontSize={'30px'} fontWeight='700' color='#fff'>
                    JoinForces
                </Text>
                <Text mt='20px' fontSize={'16px'} fontWeight='500' color='#fff'>
                We not only provide solutions for our clients specific products or needs, but we are also a part of those products. Some of our clients have become our partners for long-term cooperation. They focus on their business and we help them in technology.
                </Text>
                <Text mt='20px' fontSize={'30px'} fontWeight='700' color='#fff'>
                    Remote-based Company
                </Text>
                <Text mt='20px' fontSize={'16px'} fontWeight='500' color='#fff'>
                    We are a remote company, which means that all team members from Valutac are spread all over Indonesia. We believe that our team will be more productive if they can work with the environment they want.
                    <br/><br/>
                    We do not limit the location of our team members, some are from the West of Indonesia, to the East of Indonesia.
                </Text>
            </Box>
        </Box>
    )
}

export default WhyUs