import { Box, Button, Image, Link, Text } from "@chakra-ui/react";

export default function CardProject({image, title, desc}){
    return(
        <Box>
            <Image src={image} w='100%' h={{base:'auto',md:'441px'}} alt="projects" />
            <Box mt='20px' px={{base:'20px',md:'60px'}}>
                <Text fontSize={'20px'} fontWeight='700' color='#fff'>{title}</Text>
                <Text mt='10px' mb='38px' fontSize={'16px'} fontWeight='400' color='rgba(255, 255, 255, 0.6)'>{desc}</Text>
                    <Link href="/projectDetail" _hover={{textDecor:'none'}}>
                        <Button
                            size='sm'
                            fontSize='14px'
                            fontWeight={'500'}
                            height='39px'
                            width='100px'
                            bgColor='transparent'
                            border={'2px'}
                            borderColor='#fff'
                            color='#fff'
                            borderRadius={'100px'}
                            _hover={{ bg: '#6016FC' }}
                            _active={{
                            bg: '#6016FC',
                            transform: 'scale(0.98)',
                            borderColor: '#bec3c9',
                        }}
                        >
                        Detail
                        </Button>
                    </Link>
            </Box>
        </Box>
    )
}