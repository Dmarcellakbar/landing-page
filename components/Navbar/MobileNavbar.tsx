import { AppstoreFilled } from '@ant-design/icons';
import { Box, Text } from '@chakra-ui/react';
import { Col, Divider, Dropdown, Layout, Menu, Row, Space, Typography } from 'antd';
import React from 'react';
import Image from 'next/image'
import Logo from '../../assets/images/cfund-text.png';
import { Element, Link } from 'react-scroll'


const { Header, Content } = Layout;

const menu = (
  <Menu 
    theme='dark'
    selectable
    // defaultSelectedKeys={['1']}
    items={[
        {
            key: '1',
            label: (
              <Link to="section1" smooth={true}>
                <Text as={'b'}>Home</Text>
              </Link>
            ),
        },
        {
            key: '2',
            label: (
              <Link to="section2" smooth={true}>
                <Text as={'b'}>Performance</Text>
              </Link>
            ),
        },
        {
            key: '3',
            label: (
              <Link to="section3" smooth={true}>
                <Text as={'b'}>How to</Text>
              </Link>
            ),
        },
        {
            key: '4',
            label: (
              <Link to="section4" smooth={true}>
                <Text as={'b'}>Terms</Text>
              </Link>
            ),
        },
        {
            key: '5',
            label: (
              <Link to="section5" smooth={true}>
                <Text as={'b'}>News</Text>
              </Link>
            ),
        },
        {
            key: '6',
            label: (
              <Link to="section6" smooth={true}>
                <Text as={'b'}>FAQ</Text>
              </Link>
            ),
        },
        {
            key: '7',
            label: (
            <a href='/download' target='_blank'>
                <Box textAlign={'center'} as={'b'} fontSize={'2x1'} color={'white'} bg={'#FFA520'} p={2} rounded={'10'}>
                  Login
                </Box>
            </a>
            ),
        },
    ]}
  />
);

export default function MobileNavbar() {
  return (
    <section className="section position-relative">
    <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%'}}>
            <Row justify="center">
                <Col span={6}>
                <Box style={{ float: 'left', alignItems: 'center', paddingTop: '5%' }}>
                    <Image className='responsive' src={Logo}/>
                </Box>
                </Col>
                <Col span={16}>
                    <Divider orientation='right'>
                        <Dropdown overlay={menu} placement="bottomRight">
                            <Typography.Link>
                                <Space>
                                    <AppstoreFilled />
                                </Space>
                            </Typography.Link>
                        </Dropdown>
                    </Divider>
                </Col>
            </Row>
        </Header>
    </Layout>
    </section>
  )
}
