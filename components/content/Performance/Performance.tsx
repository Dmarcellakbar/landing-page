import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Image from 'next/image';
import tophud from '../../../assets/images/top-hud.svg';
import bothud from '../../../assets/images/bot-hud.svg';
import { Text } from '@chakra-ui/react';

export default function Performance() {
  return (
    <section className="site-layout-background2">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="mt-5 mt-lg-0">
              <Image src={tophud} className="img-fluid mx-auto d-block"/>
              <Image src={bothud} className="img-fluid mx-auto d-block"/>
            </div>
          </Col>

          <Col lg={6}>
            <div className="pr-lg-8">
              <Text as={'b'} fontSize='3xl' color={'white'}>Our Performance</Text>
              <Text marginTop={10} marginBottom={10} fontSize='1xl' color={'white'}>
                Our advanced risk management strategy allowed us to be consistenly
                profitable during both uptrend and downtrend.
                Digital assets such can provide highly lucrative return, yet they are much
                more volatile and possess higher risk compared to traditional asset classes.
                CFund manages your capital with rigorous position sizing, advanced trading
                strategy, and a conservative stop loss.
                </Text>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
