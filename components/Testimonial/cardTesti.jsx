import { Box, Image, Text } from "@chakra-ui/react"

const CardTesti = ({image,name,company,message}) => {
    return( 
        <Box borderRadius='3px' w='415px' h='447px' bgColor={'rgba(255, 255, 255, 0.05)'} py='60px' px={'47px'}>
            <Image mx='auto' src={image} w ='90px' h='90px' alt="profile" />

            <Text mt='18' fontSize='18px' fontWeight='700' color='#fff'>{name}</Text>
            <Text mt='8px' fontSize='18px' fontWeight='500' color='rgba(255, 255, 255, 0.6)'>{company}.</Text>
            <Text mt='32px' fontSize='16px' fontWeight='500' color='#fff' lineHeight='32px' >{message}.</Text>
        </Box>
    )
}

export default CardTesti