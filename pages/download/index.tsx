import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Image from 'next/image';
// import phone from '../../../assets/images/phone-planet.png';
import { Box, HStack, Stack, Text, VStack } from '@chakra-ui/react';
import AppStoreBadge from '../../assets/images/ios.png';
import PlayStoreBadge from '../../assets/images/android.png';
import bg from '../../assets/images/bg-stardust.png'


export default function download() {
    const styling = {
        backgroundImage: `url('${bg.src}')`,
        width:"100%",
        height:"100%",
        backgroundSize: 'cover',

    }
  return (
    <section className="section position-relative" style={styling}>
    <VStack padding={'52px 0px 0px'}>
        <Container style={{ width: '100%', maxWidth: '80rem' }}>
            <Row >
            <Col lg={12}>
                <div>
                <Text marginTop={10} as={'b'} fontSize='5xl' color={'#01e8aa'}>CFUND APPS DOWNLOAD ( IOS & ANDROID )</Text>
                <Text marginTop={10} marginBottom={10} fontSize='3xl' color={'white'}>
                    Get Apps Here!
                    </Text>
                    <HStack spacing='30px' >
                        <Box>
                        <Text>IOS SUPPORT</Text>
                        <a href="https://apps.apple.com/sg/app/cfund/id1580696846?l=zh">
                            <Image width={'150%'} height={'50%'} src={AppStoreBadge}/>
                        </a>
                        </Box>
                        <Box>
                        <Text>ANDROID SUPPORT</Text>
                        <a href="https://play.google.com/store/apps/details?id=id.cfund.app">
                            <Image width={'175%'} height={'75%'} src={PlayStoreBadge}/>
                        </a>
                        </Box>
                    </HStack>
                </div>
            </Col>
            </Row>
        </Container>
      </VStack>
    </section>
  )
}
