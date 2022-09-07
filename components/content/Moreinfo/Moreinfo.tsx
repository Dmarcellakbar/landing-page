import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Image from 'next/image';
import newstop from '../../../assets/images/news.png';
import { Box, Flex, useColorModeValue, HStack, Stack, Text, SimpleGrid, Button } from '@chakra-ui/react';

export default function Moreinfo() {
  return (
    <section className="site-layout-background2">
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
                <Button mr={'10'} color={'white'} backgroundColor={'#ffa520'}>Chat with Us</Button>
                <Button color={'white'} backgroundColor={'#ffa520'}>Send Email</Button>
            </div>
        </Box>
    </section>
  )
}
