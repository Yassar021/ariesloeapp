import { Box, Flex, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react"

const ProjectDetailPage = ({image,desc,category, client, tech}) => {
    return ( 
        <Box>
            <Flex direction={{base:'column',md:'row',lg:'row',xl:'row','2xl':'row'}} justifyContent='space-evenly' textAlign={{base:'center',md:'left',lg:'left',xl:'left','2xl':'left'}}>
                <Image src={image} w={{base:'100%',md:'100%',lg:'100%',xl:'600px','2xl':'600px'}} h='400px' alt="projects" />
 
                <Box my='auto'>
                    <Text fontSize={'16px'} fontWeight='500' color='rgba(255, 255, 255, 0.6)'>{desc}</Text>
                    <Text mt='52px' fontSize={'14px'} fontWeight='600' color='rgba(255, 255, 255, 0.6)' letterSpacing={'0.1em'}>CATEGORY</Text>    
                    <Text mt='7px' fontSize={'14px'} fontWeight='600' color='#FFF' letterSpacing={'0.1em'}>{category}</Text> 

                    <Text mt='52px' fontSize={'14px'} fontWeight='600' color='rgba(255, 255, 255, 0.6)' letterSpacing={'0.1em'}>CLIENT</Text>    
                    <Text mt='7px' fontSize={'14px'} fontWeight='600' color='#FFF' letterSpacing={'0.1em'}>{client}</Text> 
                    
                    <Text mt='52px' fontSize={'14px'} fontWeight='600' color='rgba(255, 255, 255, 0.6)' letterSpacing={'0.1em'}>TECHNOLOGY</Text>    
                    <Text mt='7px' fontSize={'14px'} fontWeight='600' color='#FFF' letterSpacing={'0.1em'}>{tech}</Text>       
                </Box>               
            </Flex>
        </Box>
    )
}

export default ProjectDetailPage