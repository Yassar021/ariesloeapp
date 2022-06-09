import { useDisclosure, Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Hide, HStack, Image, Link, Stack, Text, VStack } from "@chakra-ui/react"
import React from "react"

function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button 
            ref={btnRef} fontFamily='Poppins' bgColor='#0E1035' color='#fff' w='auto' h='48px' onClick={onOpen}>
            <Stack>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 6.23029H21" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M9.49023 12H21.0002" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M3 12H5.99" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M3 17.7697H21" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            </Stack>
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent bgColor='#0B0B22'>
            <DrawerCloseButton />
            <DrawerHeader color={'#fff'}></DrawerHeader>
  
            <DrawerBody>
                <VStack spacing='50px'>
                        <Link href='#'><Text fontSize={'16px'} color='#fff'>Services</Text></Link>
                        <Link href='#'><Text fontSize={'16px'} color='#fff'>How We Work</Text></Link>
                        <Link href='#'><Text fontSize={'16px'} color='#fff'>Project</Text></Link>
                        <Link href='#'><Text fontSize={'16px'} color='#fff'>About</Text></Link>
                    </VStack>

                    <Link>
                        <Button
                        ml='80px'
                        mt='50px'
                        size='lg'
                        fontSize='14px'
                        height='39px'
                        width='112px'
                        bgColor='#6016FC'
                        color='#fff'
                        _hover='#6016FC'
                        _active={{
                        bg: '#6016FC',
                        transform: 'scale(0.98)',
                        borderColor: '#bec3c9',
                        }}
                        >
                        Contact
                        </Button>
                    </Link>
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose} color='#fff' bgColor='#0E1035'>
                Close
              </Button>
              {/* <Button colorScheme='blue'>Save</Button> */}
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

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
                <Flex display={{base:'inline', md:'inline', lg:'none', xl:'none', '2xl': 'none'}}>
                    <DrawerExample />
                </Flex>

                <Hide below='lg'>
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
                </Hide>
                
            </Flex>
        </Box>
    )
}

export default Navbar