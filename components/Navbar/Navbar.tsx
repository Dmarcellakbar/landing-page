import Head from 'next/head'
import { Element, Link } from 'react-scroll'
import { Col, Divider, Layout, Menu, Row } from 'antd';
import React from 'react';
import { Button, Grid, Text, Box } from '@chakra-ui/react';
import Image from 'next/image'
import Logo from '../../assets/images/cfund-text.png';
// import FooterBar from '../Footer/Footer';

const { Header, Content } = Layout;

export default function Home({children}: any) {
  return (
    <section className="section position-relative">
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%', backgroundColor: '#011535' }}>
        <Row justify="center">
          <Col span={2}>
            <Box>
            <Image className='responsive' src={Logo}/>
            </Box>
          </Col>
          <Col span={22}>
          <Divider orientation='right'>
            <Box
              color='#011535'
              >
              <Link to="section1" smooth={true} style={{ backgroundColor:'transparent', marginRight: '5%' }}>
                <Text as={'b'} style={{ textAlign:'center', color: 'white' }}>Home</Text>
              </Link>
              <Link to="section2" smooth={true} style={{ backgroundColor:'transparent', marginRight: '5%' }}>
                <Text as={'b'} style={{ textAlign:'center', color: 'white' }}>Performance</Text>
              </Link>
              <Link to="section3" smooth={true} style={{ backgroundColor:'transparent', marginRight: '5%' }}>
                <Text as={'b'} style={{ textAlign:'center', color: 'white' }}>How to</Text>
              </Link>
              <Link to="section4" smooth={true} style={{ backgroundColor:'transparent', marginRight: '5%' }}>
                <Text as={'b'} style={{ textAlign:'center', color: 'white' }}>Terms</Text>
              </Link>
              <Link to="section5" smooth={true} style={{ backgroundColor:'transparent', marginRight: '5%' }}>
                <Text as={'b'} style={{ textAlign:'center', color: 'white' }}>News</Text>
              </Link>
              <Link to="section6" smooth={true} style={{ backgroundColor:'transparent', marginRight: '5%'}}>
                <Text as={'b'} style={{ textAlign:'center', color: 'white' }}>FAQ</Text>
              </Link>
              <a href='/download' target='_blank'>
              <Box textAlign={'center'} padding={'24px'} mr={10} as={'b'} fontSize={'2x1'} color={'white'} bg={'#FFA520'} p={2} rounded={'10'}>
                Login
              </Box>
              </a>
            </Box>
            </Divider>
          </Col>
        </Row>
        </Header>
        <Content>{children}</Content>
          {/* <FooterBar /> */}
        </Layout>
        </section>
  )
}
