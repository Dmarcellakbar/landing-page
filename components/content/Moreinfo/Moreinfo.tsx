import React from 'react';
// import { Container, Row, Col } from 'reactstrap';
// import Image from 'next/image';
// import newstop from '../../../assets/images/news.png';
import { Box, Flex, useColorModeValue, HStack, Stack, Text, SimpleGrid, Button } from '@chakra-ui/react';

export default function Moreinfo() {
  return (
    <section className="site-layout-background2">
      <Box py={6}>
            <div style={{ textAlign: 'center', marginTop: '10%'}}>
                <Text as={'b'} fontSize='4xl' color={'white'}>
                    Need more information?
                </Text>
                <br />
                <Text as={'b'} fontSize='3xl' color={'white'}>
                    let's talk with us
                </Text>
            </div>
        </Box>
        <Box py={6}>
            <div style={{ textAlign: 'center'}}>
                <a href='mailto:cs@cfund.id'><Button mr={'10'} color={'white'} backgroundColor={'#ffa520'}>Chat with Us</Button></a>
                <a href='mailto:cs@cfund.id'><Button color={'white'} backgroundColor={'#ffa520'}>Send Email</Button></a>
            </div>
        </Box>
    </section>
  )
}
