import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Box, Flex, useColorModeValue, HStack, Stack, Text } from '@chakra-ui/react';
import bg from '../../../assets/images/bg-how-to.png'
import Image from 'next/image';
import Identity from '../../../assets/images/identity.png';
import Agreement from '../../../assets/images/agreement.png';
import Aum from '../../../assets/images/aum-icon.png';

export default function Howto() {
    const styling = {
        backgroundImage: `url('${bg.src}')`,
        width:"100%",
        height:"100%",
        backgroundSize: 'cover',
    }

  return (
    <section className="section position-relative" style={styling}>
      <Container style={{ maxWidth: '80rem', paddingBottom: '10%'}}>
      <Box py={6}>
            <div style={{ textAlign: 'center', marginTop: '10%'}}>
                <div style={{ lineHeight: '1.2' }}>
                <Text as={'b'} fontSize='2.88rem' color={'white'} fontWeight={'extrabold'} >
                    Get into Digital Asset Market With Us!
                </Text>
                </div>
                <br />
                <Text as={'b'} fontSize='32px' color={'white'} mb={'20rem'}>
                    Onboarding process
                </Text>
                
            </div>
        </Box>
        <br />
        <br />
        <Row >
        <Col lg={4} style={{ paddingBottom: '10%' }}>
            <Box textAlign={'center'} backgroundColor={'#01264C'} rounded={'16px'} p={'32px'} w={'100%'} h={'100%'}>
                <Image src={Identity} style={{ width: '15rem', maxWidth: '100%', height: 'auto' }}/>
                <br />
                <br />
                <Text textAlign={'center'}  as={'b'} fontSize='20px' color={'white'}>Registration and Identification</Text>
                    <Text textAlign={'center'} marginTop={10} marginBottom={50} fontSize='16px' color={'white'}>
                        Prospective customer can contact us to have a
                        consultation whether investing in digital asset with
                        us aligns with their risk appetite, financial profile,
                        and investment objective.
                        One they are successfully evaulated and their
                        eligibility confirmed, we will provide them detailed
                        information about the investment.
                </Text>
            </Box>
          </Col>
          <Col lg={4} style={{ paddingBottom: '10%' }}>
            <Box textAlign={'center'} backgroundColor={'#01264C'} rounded={'16px'} p={'32px'} w={'auto'} h={'100%'}>
            <Image src={Agreement} style={{ width: '15rem', maxWidth: '100%', height: 'auto' }}/>
            <br />
            <br />
              <Text textAlign={'center'} marginTop={10} as={'b'} fontSize='20px' color={'white'}>Product Selection and Agreement</Text>
              <Text textAlign={'center'} marginTop={10} marginBottom={50} fontSize='16px' color={'white'}>
                The next step is formulate a contractual
                agreement between CFund and the investor.
                The investor may select the desired investment
                product that fit their objective. They will also be
                informed about the condition, performance objectives, as well as the risk involved.
                finally, an agreement between CFund and the investor will be signed under a prepared contract.
                Finally, the contract between the investor and ARK36 is prepared and signed.
                </Text>
            </Box>
          </Col>

          <Col lg={4} style={{ paddingBottom: '10%' }}>
            <Box textAlign={'center'} backgroundColor={'#01264C'} rounded={'16px'} p={'32px'} w={'auto'} h={'100%'}>
            <Image src={Aum} style={{ width: '15rem', maxWidth: '100%', height: 'auto' }}/>
            <br />
            <br />
              <Text textAlign={'center'} marginTop={10} as={'b'} fontSize='20px' color={'white'}>Assets Under Management</Text>
              <Text textAlign={'center'} marginTop={10} marginBottom={50} fontSize='16px' color={'white'}>
                Once all the paperwork is signed, the investor can deposit their investment. Deposits can be made in
                fiat or cyptocurrencies. Hence, the fund management starts.
                The investor will now recieve access to a periodic
                report to keep track of their investment's performance.
                </Text>
            </Box>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
