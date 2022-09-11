import React from 'react';
// import { Container, Row, Col } from 'reactstrap';
// import Image from 'next/image';
// import newstop from '../../../assets/images/news.png';
import { Box, Flex, useColorModeValue, HStack, Stack, Text, SimpleGrid, Button, VStack } from '@chakra-ui/react';
import { Card } from 'antd';

export default function Moreinfo() {
  return (
    <section className="site-layout-background2" >
        <Box p={'5%'}>
        <VStack rounded={'20'} bg='#011c3f'>
            <Box py={6} style={{  marginTop: '10%' }}>
                    <div style={{ textAlign: 'center', marginTop: '10%'}}>
                        <div style={{ lineHeight: '1.2' }}>
                        <Text as={'b'} fontSize='2.88rem' color={'white'} >
                            Need more information?
                        </Text>
                        </div>
                        <br />
                        <br />
                        <Text as={'b'} fontSize='32px' color={'white'}>
                            let's talk with us
                        </Text>
                    </div>
                </Box>
                <Box py={6} style={{ marginBottom: '10%' }}>
                    <div style={{ textAlign: 'center'}}>
                        <a href='mailto:cs@cfund.id'><Button p={'24px'} mr={'10'} color={'white'} backgroundColor={'#ffa520'} fontSize={'16px'}>Chat with Us</Button></a>
                        <a href='mailto:cs@cfund.id'><Button p={'24px'} color={'white'} backgroundColor={'#ffa520'} fontSize={'16px'}>Send Email</Button></a>
                    </div>
                </Box>
        </VStack>
        </Box>
    </section>
  )
}
