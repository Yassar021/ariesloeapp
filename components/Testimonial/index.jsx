import { Box, Container, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import CardTesti from "./cardTesti";

export default function Testimonial() {
    return ( 
        <Container maxW='8xl'>
            <Box  pb='200px' >
            <Flex direction={'column'} alignItems='center' textAlign={'center'}>
                <Text mt='90px' fontSize={'16px'} fontWeight={'600'} color='#16FCD2' letterSpacing={'0.1em'}> Testimonial</Text>
                <Text mt='13px' fontSize={'36px'} fontWeight={'700'} color='#fff' letterSpacing={'0.1em'}>What do our clients say that we never let down?</Text>

                <SimpleGrid columns={{base:1,md:1,lg:3,xl:3,'2xl':3}} spacing='31px' mt='94px'>
                    <CardTesti image={'/a-profil.png'} name={'Courtney Henry'} company={'Biffco Enterprises Ltd'} message={'Very easy to use. I made back the purchase price in just 48 hours! Its great. Its is both attractive and highly adaptable'} />
                    <CardTesti image={'/b-profil.png'} name={'Esther Howard'} company={'Abstergo Ltd '} message={'Your company is truly upstanding and is behind its product 100%. Its the perfect solution for our business. It has really helped our business'} />
                    <CardTesti image={'/c-profil.png'} name={'Ronald Richards'} company={'Barone LLC '} message={'I am really satisfied with it. Im good to go. It really saves me time and effort. Its is exactly what our business has been lacking'} />
                </SimpleGrid>
            
            </Flex>
        </Box>
        </Container>
    )
}