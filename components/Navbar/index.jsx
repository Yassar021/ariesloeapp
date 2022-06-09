import { Box, Button, Flex, HStack, Link, Stack, Text } from "@chakra-ui/react"

const Navbar = () => {
    return ( 
        <Box>
            <Flex justifyContent={'space-between'}> 
                <HStack spacing='18px'>
                    <Stack>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.9221 5.77922V3C18.9221 1.89543 18.0266 1 16.9221 1H3C1.89543 1 1 1.89543 1 3V16.9221C1 18.0266 1.89543 18.9221 3 18.9221H6.22727" stroke="white" strokeWidth="2"/>
                            <rect x="7.078" y="6.48053" width="15.9221" height="15.9221" rx="1" stroke="white" strokeWidth="2"/>
                        </svg>
                    </Stack>
                    <Text fontSize={'24px'} fontWeight={'700'} color='#fff'>Ariesloe.</Text>
                </HStack>

                <HStack spacing='50px'>
                    <Link href='#'><Text fontSize={'16px'} color='#fff'>Services</Text></Link>
                    <Link href='#'><Text fontSize={'16px'} color='#fff'>How We Work</Text></Link>
                    <Link href='#'><Text fontSize={'16px'} color='#fff'>Project</Text></Link>
                    <Link href='#'><Text fontSize={'16px'} color='#fff'>About</Text></Link>
                </HStack>

                <Link>
                    <Button
                    size='lg'
                    fontSize='14px'
                    height='39px'
                    width='112px'
                    bgColor='rgba(255, 255, 255, 0.1)'
                    color='#fff'
                    _hover={{ bg: 'rgba(255, 255, 255, 0.1)' }}
                    _active={{
                      bg: 'rgba(255, 255, 255, 0.1)',
                      transform: 'scale(0.98)',
                      borderColor: '#bec3c9',
                    }}
                    >
                    Contact
                    </Button>
                </Link>
            </Flex>
        </Box>
    )
}

export default Navbar