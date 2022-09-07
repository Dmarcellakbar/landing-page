import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Image from 'next/image';
import phone from '../../../assets/images/phone-planet.png';
import { Box, HStack, Stack, Text } from '@chakra-ui/react';
import AppStoreBadge from '../../../assets/images/ios.png';
import PlayStoreBadge from '../../../assets/images/android.png';
import bg from '../../../assets/images/bg-stardust.png'


export default function Home() {
    const styling = {
        backgroundImage: `url('${bg.src}')`,
        width:"100%",
        height:"100%"
    }
  return (
    <section className="section position-relative" style={styling}>
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="pr-lg-8">
              <Text as={'b'} fontSize='3xl' color={'#01e8aa'}>The Best Management Firm Any Crypto Investor Can Dream of</Text>
              <Text marginTop={10} marginBottom={10} fontSize='1xl' color={'white'}>
                Crypto investing becomes safer, easier and more effective for investor with exposure to the high-risk high-reward 
                crypto market with a customized strategy by Profesionals Figital Asset Manager
                </Text>
                <HStack spacing='10px'>
                    <Box>
                    <a href="#">
                        <Image width={'150%'} height={'50%'} src={AppStoreBadge}/>
                    </a>
                    </Box>
                    <Box>
                    <a href="#">
                        <Image width={'175%'} height={'75%'} src={PlayStoreBadge}/>
                    </a>
                    </Box>
                </HStack>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mt-5 mt-lg-0">
              <Image src={phone} className="img-fluid mx-auto d-block"/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
