import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Image from 'next/image';
// import tophud from '../../../assets/images/top-hud.svg';
// import bothud from '../../../assets/images/bot-hud.svg';
// import chart from '../../../assets/images/chart.png'
import { Box, Text, VStack, Button } from '@chakra-ui/react';
// import bg from '../../../assets/images/bg-stardust.png'
// import Chart from './Chart/Chart'
import chartNew from '../../../assets/images/chart-new.png'

export default function Performance() {
    const styling = {
        // backgroundImage: `url('${bg.src}')`,
        // width:"100%",
        // height:"100%",
        // backgroundSize: 'cover',
        padding: '8rem 0px'
    }
    return (
    <section className="site-layout-background2" style={styling}>
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
                    {/* <VStack style={{ marginTop: '0', marginLeft: '0', width: 'auto', height: 'auto', maxWidth: '100%', position: 'absolute' }}>
                    <Image src={chart} style={{paddingTop: '19%', paddingLeft: '5%'}}/>
                    </VStack>
                    {/* <Chart /> */}
               {/* <Image  src={tophud} style={{ width: '100%', height: '50%', maxWidth: '100%', position: 'relative' }}/> */}
              {/* <Image src={bothud} style={{ width: '100%', height: '50%', maxWidth: '100%', position: 'relative' }}/>  */}
            <Box>
              <Image src={chartNew}/>
            </Box>
          </Col>

          <Col lg={6}>
            <Box>
              <Text as={'b'} fontSize='5xl' color={'white'}>Our Performance</Text>
              <Text marginTop={10} marginBottom={10} fontSize='2xl' color={'white'}>
                Our advanced risk management strategy allowed us to be consistenly
                profitable during both uptrend and downtrend.
                Digital assets such can provide highly lucrative return, yet they are much
                more volatile and possess higher risk compared to traditional asset classes.
                CFund manages your capital with rigorous position sizing, advanced trading
                strategy, and a conservative stop loss.
                </Text>
                <a href='/download' target='_blank'><Button mr={'10'} color={'white'} fontSize='2xl' backgroundColor={'#ffa520'}>See Performance Details</Button></a>
            </Box>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
