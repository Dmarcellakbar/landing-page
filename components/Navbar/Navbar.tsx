import Head from 'next/head'
import { Element, Link } from 'react-scroll'
import { Col, Divider, Layout, Menu, Row } from 'antd';
import React from 'react';
import { Button, Grid, Text } from '@chakra-ui/react';
import Image from 'next/image'
import Logo from '../../assets/images/logo-white.png';
import FooterBar from '../Footer/Footer';

const { Header, Content } = Layout;

export default function Home({children}: any) {
  return (
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <Row justify="center">
          <Col span={4}>
            <Image src={Logo}/>
          </Col>
          <Col span={20}>
          <Divider orientation='right'>
            <Menu
              theme="dark"
              mode="horizontal">
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
              <Link to="section6" smooth={true} style={{ backgroundColor:'transparent', marginRight: '10%'}}>
                <Text as={'b'} style={{ textAlign:'center', color: 'white' }}>FAQ</Text>
              </Link>
              <a href='#'>
              <Grid textAlign={'center'} mr={20} w={70} as={'b'} fontSize={'2x1'} color={'white'} bg={'orange'} p={1} rounded={'10'}>
                Login
              </Grid>
              </a>
            </Menu>
            </Divider>
          </Col>
        </Row>
        </Header>
        <Content>{children}</Content>
          <FooterBar />
        </Layout>
  )
}
