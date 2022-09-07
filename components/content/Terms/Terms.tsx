import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Image from 'next/image';
import phone from '../../../assets/images/phone-planet.png';
import { Box, Flex, HStack, Stack, Text, useColorModeValue } from '@chakra-ui/react';


export default function Terms() {
    const styling = {
        backgroundColor: '#011535',
        width:"100%",
        height:"100%",
    }
  return (
    <section className="section position-relative" style={styling}>
      <Box py={6}>
          <Flex
            align={'center'}
            _before={{
              content: '""',
              borderBottom: '1px solid',
              borderColor: useColorModeValue('gray.200', 'gray.700'),
              flexGrow: 1,
              mr: 0,
            }}
            _after={{
              content: '""',
              borderBottom: '1px solid',
              borderColor: useColorModeValue('gray.200', 'gray.700'),
              flexGrow: 1,
              ml: 0,
            }}>
          </Flex>
        </Box>
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="pr-lg-8">
              <Text as={'b'} fontSize='4xl' color={'white'}>
                Fee Structure & Terms
                </Text>
              <Text marginTop={10} marginBottom={10} fontSize='1xl' color={'white'}>
                The fee structure for CFUND portfolio management services consists of 2%
                management fee, which is deducted from the initial investment value, and 20% performance fee deducted from the profit made during the fund
                management process. In addition, CFund improses a locking period for the investor's fund, starting from quarterly basis.
                </Text>
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
