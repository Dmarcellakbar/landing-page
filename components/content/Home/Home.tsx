import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Image from 'next/image';
import phone from '../../../assets/images/phone-planet.png';
import { Box, HStack, Stack, Text, VStack } from '@chakra-ui/react';
import AppStoreBadge from '../../../assets/images/ios.png';
import PlayStoreBadge from '../../../assets/images/android.png';
import bg from '../../../assets/images/bg-stardust.png'
import { useMediaQuery } from 'react-responsive'


export default function Home() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 800px)'
      })
      const isMobile = useMediaQuery({ query: '(max-width: 800px)' })
      
    const styling = {
        backgroundImage: `url('${bg.src}')`,
        width:"100%",
        height:"100%",
        backgroundSize: 'cover',
    }
  return (
    <section className="section position-relative" style={styling}>
    <VStack paddingTop={'90px'}>
        <Container style={{ width: '100%', maxWidth: '80rem' }}>
            <Row className="align-items-center">
            <Col lg={6}>
                <div>
                    <Text marginTop={10} style={{ lineHeight: '1' }} as={'b'} fontSize='3.1rem' pt={'90px'} pb={'3rem'} fontWeight={'bold'} color={'#01E8AA'}>The Best Management Firm Any Crypto Investor Can Dream of</Text>
                <Text marginTop={10} marginBottom={10} fontSize='1xl' color={'white'} pb={'2rem'}>
                    Our costumized strategy makes crypto investing safer, easier, and more effective for you
                    </Text>
                    <HStack spacing='10px' pb={'90px'}>
                        <Box>
                        <a href="/download" target='_blank'>
                            <Image width={'150%'} height={'50%'} src={AppStoreBadge}/>
                        </a>
                        </Box>
                        <Box>
                        <a href="/download" target='_blank'>
                            <Image width={'175%'} height={'75%'} src={PlayStoreBadge}/>
                        </a>
                        </Box>
                    </HStack>
                </div>
            </Col>
            {isDesktopOrLaptop && 
                <Col lg={6}>
                    <VStack>
                        <Image src={phone} className="img-fluid mx-auto d-block"/>
                    </VStack>
                </Col>
            }

            </Row>
        </Container>
      </VStack>
    </section>
  )
}
