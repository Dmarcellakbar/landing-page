import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Box, Flex, useColorModeValue, HStack, Stack, Text } from '@chakra-ui/react';

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
                    Get into Digital Asset Market With Us!
                </Text>
                <br />
                <Text as={'b'} fontSize='3xl' color={'white'}>
                    Onboarding process
                </Text>
            </div>
        </Box>

      <Container>
        <Row>
        <Col lg={4}>
            <div>
                <Text marginTop={10} as={'b'} fontSize='2xl' color={'white'}>REGISTRATION AND IDENTIFICATION</Text>
                    <Text marginTop={10} marginBottom={50} fontSize='1xl' color={'white'}>
                        Prospective customer can contact us to have a
                        consultation whether investing in digital asset with
                        us aligns with their risk appetite, financial profile,
                        and investment objective.
                        One they are successfully evaulated and their
                        eligibility confirmed, we will provide them detailed
                        information about the investment.
                </Text>
            </div>
          </Col>
          <Col lg={4}>
            <div>
              <Text marginTop={10} as={'b'} fontSize='2xl' color={'white'}>PRODUCT SELECTION AND AGREEMENT</Text>
              <Text marginTop={10} marginBottom={50} fontSize='1xl' color={'white'}>
                The next step is formulate a contractual
                agreement between CFund and the investor.
                The investor may select the desired investment
                product that fit their objective. They will also be
                informed about the condition, performance objectives, as well as the risk involved.
                finally, an agreement between CFund and the investor will be signed under a prepared contract.
                Finally, the contract between the investor and ARK36 is prepared and signed.
                </Text>
            </div>
          </Col>

          <Col lg={4}>
            <div>
              <Text marginTop={10} as={'b'} fontSize='2xl' color={'white'}>ASSETS UNDER MANAGEMENT</Text>
              <Text marginTop={10} marginBottom={50} fontSize='1xl' color={'white'}>
                Once all the paperwork is signed, the investor can deposit their investment. Deposits can be made in
                fiat or cyptocurrencies. Hence, the fund management starts.
                The investor will now recieve access to a periodic
                report to keep track of their investment's performance.
                </Text>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
