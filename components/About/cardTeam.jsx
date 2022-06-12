import { Box, Image, Text } from "@chakra-ui/react";

export default function CardTeam({image,name,position}) {
    return ( 
        <Box textAlign={'left'} w='100%' h='480px' bgColor={'rgba(255, 255, 255, 0.05)'} borderRadius='3px'>
            <Image src={image} w='100%' h={'358px'} alt='ourteam' />
            <Box px={'40px'} py='34px' textAlign={{base:'center'}}>
                <Text fontSize={'18px'} fontWeight='700' color='#fff'>{name}</Text>
                <Text mt='8px' fontSize={'14px'} fontWeight='500' color='rgba(255, 255, 255, 0.6)'>{position}</Text>
            </Box>
        </Box>
    )
}