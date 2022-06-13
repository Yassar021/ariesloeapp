import { Box, Container, Flex, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import ProjectDetailPage from "./cardProjectDetail";
import CardProject from "./cardProjects";


const ProjectDetail = () => {
    return ( 
        <Box pb='200px'>
            <Container maxW='8xl'>
                <ProjectDetailPage
                    name={'The Desktop App Landing Page'} 
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
            </Container>
            
        </Box>
    )
}

export default ProjectDetail