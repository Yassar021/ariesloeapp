import { Box, HStack, Image, Stack, Text } from "@chakra-ui/react"

const CardBlog = ({image,title,desc,profilepic,name,date,time}) => {
    return ( 
        <Box>
            <Image src={image} w='100%' h='220px' borderRadius={'5px'} alt='' />
            <Box h={{base:'auto',md:'140px'}}>
                <Text mt='30px' fontSize={'20px'} fontWeight='700' color='#Fff'>{title}</Text>
                <Text mt='10px' fontSize={'18px'} fontWeight='500' color='rgba(255, 255, 255, 0.6)'>{desc}</Text>
            </Box>
            <HStack mt='30px' spacing='20px'>
                <Image src={profilepic} w='50px' h='50px' borderRadius={'100%'} alt='' />
                <Box>
                    <Text fontSize={'16px'} fontWeight='600' color='#fff'>{name}</Text>
                    <HStack mt='5px' spacing={'10px'}>
                        <Text fontSize={'14px'} fontWeight='400' color='rgba(255, 255, 255, 0.6)'>{date}</Text>
                        <Stack>
                            <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="2" cy="2" r="2" fill="white" fillOpacity="0.6"/>
                            </svg>
                        </Stack>
                        <Text fontSize={'14px'} fontWeight='400' color='rgba(255, 255, 255, 0.6)'>{time}</Text>
                    </HStack>
                </Box>
            </HStack>
        </Box>
    )
}

export default CardBlog