import { Box, Image, Text } from "@chakra-ui/react";

export default function CardTeam({image,name,position,desc}) {
    return ( 
        <Box textAlign={'left'} w='100%' h={'480px'} bgColor={'rgba(255, 255, 255, 0.05)'} borderRadius='3px'>
            <Image src={image} w='100%' h={'358px'} alt='ourteam' />
            <Box px={{base:'20px',md:'40px'}} py='20px' textAlign={{base:'center'}}>
                <Text fontSize={'18px'} fontWeight='700' color='#fff'>{name}</Text>
                <Text mt='8px' fontSize={'16px'} fontWeight='600' letterSpacing={'0.1em'} color='rgba(255, 255, 255, 0.6)'>{position}</Text>
                <Text mt='4px' fontSize={'14px'} fontWeight='500' color='rgba(255, 255, 255, 0.6)'>{desc}</Text>
            </Box>
        </Box>
    )
}