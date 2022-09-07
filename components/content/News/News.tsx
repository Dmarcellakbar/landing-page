import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Image from 'next/image';
import newstop from '../../../assets/images/news.png';
import { Box, Flex, useColorModeValue, HStack, Stack, Text, SimpleGrid, Button } from '@chakra-ui/react';

export default function Howto() {
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
                    News & Article
                </Text>
            </div>
        </Box>

      <Container>
        <Row>
        <SimpleGrid minChildWidth='120px' spacingX='20px' spacingY='20px'>
            <Box rounded={'20'} w='100%' h='300px' bg='#011535'>
                <Image style={{ borderTopRightRadius: 20, borderTopLeftRadius: 20, }} src={newstop}/>
                <Text p={'4'} as={'b'} fontSize={'1x1'}>This is News Title</Text>
                <Text p={'4'} fontSize={'1x1'}>Lorem asaawqwq Ipsum bbashhuwhqwqwq</Text>
            </Box>
            <Box rounded={'20'} w='100%' h='300px' bg='#011535'>
                <Image style={{ borderTopRightRadius: 20, borderTopLeftRadius: 20, }} src={newstop}/>
                <Text p={'4'} as={'b'} fontSize={'1x1'}>This is News Title</Text>
                <Text p={'4'} fontSize={'1x1'}>Lorem asaawqwq Ipsum bbashhuwhqwqwq</Text>
            </Box>
            <Box rounded={'20'} w='100%' h='300px' bg='#011535'>
                <Image style={{ borderTopRightRadius: 20, borderTopLeftRadius: 20, }} src={newstop}/>
                <Text p={'4'} as={'b'} fontSize={'1x1'}>This is News Title</Text>
                <Text p={'4'} fontSize={'1x1'}>Lorem asaawqwq Ipsum bbashhuwhqwqwq</Text>
            </Box>
            <Box rounded={'20'} w='100%' h='300px' bg='#011535'>
                <Image style={{ borderTopRightRadius: 20, borderTopLeftRadius: 20, }} src={newstop}/>
                <Text p={'4'} as={'b'} fontSize={'1x1'}>This is News Title</Text>
                <Text p={'4'} fontSize={'1x1'}>Lorem asaawqwq Ipsum bbashhuwhqwqwq</Text>
            </Box>
        </SimpleGrid>
        </Row>
      </Container>

      <Box py={6}>
            <div style={{ textAlign: 'center', marginTop: '0'}}>
                <Button color={'white'} backgroundColor={'#ffa520'} as={'b'} fontSize={'1xl'}>View More</Button>
            </div>
        </Box>
    </section>
  )
}
