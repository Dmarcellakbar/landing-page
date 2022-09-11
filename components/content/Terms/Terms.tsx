import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Image from 'next/image';
import cycle from '../../../assets/images/cycle-ilustration.png';
import { Box, Flex, HStack, Stack, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import bg from '../../../assets/images/bg-fee.png'
import { useMediaQuery } from 'react-responsive'

export default function Terms() {
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
      <Container style={{ paddingBottom: '20%', paddingTop: '20%' }}>
        <Row>
        {isMobile &&
            <Col lg={6}>
              <VStack>
                <Image src={cycle} className="img-fluid mx-auto d-block"/>
              </VStack>
            </Col>
          }
          <Col lg={6}>
            <VStack marginTop={'20%'}>
              <Text as={'b'} fontSize='2.88rem' lineHeight={'10'} color={'white'}>
                Fee Structure & Terms
                </Text>
                <br />
              <Text marginTop={10} marginBottom={10} fontSize='1x1' color={'white'}>
                The fee structure for CFUND portfolio management services consists of 2%
                management fee, which is deducted from the initial investment value, and 20% performance fee deducted from the profit made during the fund
                management process. In addition, CFund improses a locking period for the investor's fund, starting from quarterly basis.
                </Text>
            </VStack>
          </Col>
          {isDesktopOrLaptop &&
            <Col lg={6}>
              <VStack>
                <Image src={cycle} className="img-fluid mx-auto d-block"/>
              </VStack>
            </Col>
          }
        </Row>
      </Container>
    </section>
  )
}
