import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Image from 'next/image';
import cycle from '../../../assets/images/cycle-ilustration.png';
import { Box, Flex, HStack, Stack, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import bg from '../../../assets/images/bg-fee.png'

export default function Terms() {
    const styling = {
        backgroundImage: `url('${bg.src}')`,
        width:"100%",
        height:"100%",
        backgroundSize: 'cover',
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
      <Container style={{ padding: '8rem 0px' }}>
        <Row>
          <Col lg={6}>
            <VStack marginTop={'15%'}>
              <Text as={'b'} fontSize='5xl' color={'white'}>
                Fee Structure & Terms
                </Text>
              <Text marginTop={10} marginBottom={10} fontSize='2xl' color={'white'}>
                The fee structure for CFUND portfolio management services consists of 2%
                management fee, which is deducted from the initial investment value, and 20% performance fee deducted from the profit made during the fund
                management process. In addition, CFund improses a locking period for the investor's fund, starting from quarterly basis.
                </Text>
            </VStack>
          </Col>
          <Col lg={6}>
            <VStack>
              <Image src={cycle} className="img-fluid mx-auto d-block"/>
            </VStack>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
