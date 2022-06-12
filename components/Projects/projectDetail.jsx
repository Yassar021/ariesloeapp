import { Box, Flex, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import ProjectDetailPage from "./cardProjectDetail";
import CardProject from "./cardProjects";


const ProjectDetail = () => {
    return ( 
        <Box pb='200px'>
            <Flex  mt='90px' direction={{base:'column',md:'row',lg:'row',xl:'row','2xl':'row'}} justifyContent='space-evenly' textAlign={{base:'center',md:'center',lg:'center',xl:'center','2xl':'center'}}>
                <Box>
                    <Text fontSize={'16px'} fontWeight={'600'} color='#16FCD2' letterSpacing={'0.1em'}>Project Detail</Text>
                    <Text mt='13px' fontSize={'36px'} fontWeight='700' color='#fff' lineHeight='54px'>The Desktop App Landing Page</Text>
                </Box>
            </Flex>

            <Box my='90px' borderTop={'2px solid rgba(255, 255, 255, 0.1)'} />

            <ProjectDetailPage 
                image={'/projectdet.png'}
                desc={'Something has always existed. According to physics, there can never be true physical nothingness—though there can be times when existence resembles nothing.'}
                category={'Development'}
                client={'Acme, Inc'}
                tech={'JavaScript, HTML, CSS'}  />

            <Box my='90px' borderTop={'2px solid rgba(255, 255, 255, 0.1)'} />

            <Box mt='110px' textAlign={{base:'center',md:'center',lg:'center',xl:'center','2xl':'center'}} alignContent='center'>       
                <SimpleGrid mt='71px' columns={{base:1,md:2}} spacing='20px'>
                   <CardProject image={'/project.png'} title={'The Mobile App Landing Page'} desc={'A landing page for mobile app'} />
                   <CardProject image={'/project.png'} title={'The Desktop App Landing Page'} desc={'A landing page for Desktop app'} />
                   <CardProject image={'/project.png'} title={'The Desktop App Landing Page'} desc={'A landing page for Desktop app'} />
                   <CardProject image={'/project.png'} title={'The Mobile App Landing Page'} desc={'A landing page for mobile app'} />
                </SimpleGrid>
            </Box>
            
        </Box>
    )
}

export default ProjectDetail