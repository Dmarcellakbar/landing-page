import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Image from 'next/image';
import newstop from '../../../assets/images/news.png';
import { Box, Flex, useColorModeValue, HStack, Stack, Text, SimpleGrid, Button, VStack } from '@chakra-ui/react';
// import data from './source.json';
import Satu from '../../../assets/images/satu.png'
// import Dua from '../../../assets/images/dua.jpeg'
// import Tiga from '../../../assets/images/tiga.jpg'
// import Empat from '../../../assets/images/empat.png'



export default function News() {
 
  return (
    <section className='site-layout-background2'>
        <Box py={6} style={{ textAlign: 'center',paddingTop: '20%' }}>
            <Text as={'b'} fontSize='2.88rem' color={'white'} fontWeight={'bold'}>
                News & Article
            </Text>
        </Box>
        <Row style={{ marginRight: '7%', paddingLeft: '5%', paddingRight: '1%' }}>
          <Col lg={3} style={{ paddingBottom: '10%', paddingLeft: '5%' }}>
            <VStack rounded={'20'} bg='#01264c' h={'100%'}>
              {/* <a href={href}> */}
              <a href="https://blog.cfund.me/apa-itu-decentralized-science-desci/" id="button-test">
              <Image style={{ borderTopRightRadius: 20, borderTopLeftRadius: 20}} src={Satu}/>
                <Box w='100%' p={'7%'} >
                  <Text as={'b'} fontSize={'16px'} fontWeight={'bold'}>Apa itu decentralized science (DeSci)?</Text>
                  <Text fontSize={'16px'} mt={'4'} color={'grey'}>20 August 2022</Text>
                  <br />
                  <Text fontSize={'16px'}>
                  Decentralized science (DeSci) adalah gerakan yang bertujuan untuk membangun infrastruktur publik untuk mendanai, membuat, meninjau, mengkredit, menyimpan, dan menyebarkan pengetahuan ilmiah secara adil dan merata menggunakan Web3 sebagai fondasinya.
                  </Text>
                </Box>
                </a>
                {/* </a> */}
            </VStack>
            </Col>
            <Col lg={3} style={{ paddingBottom: '10%', paddingLeft: '5%' }}>
            <VStack rounded={'20'} bg='#01264c' h={'100%'}>
            <a href="https://blog.cfund.me/memanfaatkan-bear-market-saat-ini-untuk-menjadi-investor-yang-lebih-baik-di-bull-run-berikutnya/" id="button-test">
            <Image style={{ borderTopRightRadius: 20, borderTopLeftRadius: 20}} src={Satu}/>
              <Box w='100%' p={'7%'}>
                <Text as={'b'} fontSize={'16px'} fontWeight={'bold'}>Memanfaatkan Bear Market Saat ini Untuk Menjadi INVESTOR Yang Lebih Baik di Bull Run Berikutnya</Text>
                <Text fontSize={'16px'} mt={'4'} color={'grey'}>11 August 2022</Text>
                <br />
                <Text fontSize={'16px'}>
                Sementara beberapa dari kita mungkin pernah mengalami siklus crypto sebelumnya dan memiliki pengalaman saat terjadi Bear Market sebelumnya. Beberapa orang yang baru masuk ke pasar crypto dari akhir 2020, 2021 dan 2022 baru saja mengalami pasar beruang Bear Market pertama mereka.
                </Text>
                </Box>
                </a>
            </VStack>
            </Col>
            <Col lg={3} style={{ paddingBottom: '10%', paddingLeft: '5%' }}>
            <VStack rounded={'20'} bg='#01264c' h={'100%'}>
            <a href="https://blog.cfund.me/a-complete-guide-on-how-to-do-research-in-crypto/" id="button-test">
            <Image style={{ borderTopRightRadius: 20, borderTopLeftRadius: 20}} src={Satu}/>
              <Box w='100%' p={'7%'}>
                <Text as={'b'} fontSize={'16px'} fontWeight={'bold'}>A Complete Guide On How To Do Research in Crypto!</Text>
                <Text fontSize={'16px'} mt={'4'} color={'grey'}>8 August 2022</Text>
                <br />
                <Text fontSize={'16px'}>
                If you have even the slightest inkling of crypto and have yearned to profit from it, considering the hype that has taken the world by storm, you must be no stranger to researching it online. With so many sources, material and technical jargon, it is no easy feat to do your research. Where do I even begin, is what many have often asked us, and so we decided to break it up for you so that you know how to research crypto like a pro.
                </Text>
                </Box>
                </a>
            </VStack>
            </Col>
            <Col lg={3} style={{ paddingBottom: '10%', paddingLeft: '5%' }}>
            <VStack rounded={'20'} bg='#01264c' h={'100%'}>
            <a href="https://blog.cfund.me/bagaimana-asia-tenggara-merangkul-era-web3/" id="button-test">
            <Image style={{ borderTopRightRadius: 20, borderTopLeftRadius: 20}} src={Satu}/>
            <Box w='100%' p={'7%'}>
                <Text as={'b'} fontSize={'16px'} fontWeight={'bold'}>Bagaimana Asia Tenggara merangkul era Web3?</Text>
                <Text fontSize={'16px'} mt={'4'} color={'grey'}>6 August 2022</Text>
                <br />
                <Text fontSize={'16px'}>
                Inovasi Fintech telah berkembang secara signifikan di Asia Tenggara, memungkinkan peningkatan adaptasi Web3 di wilayah ini. Dan akhir-akhir ini hype di belahan dunia saat ini bukan tentang berselancar di internet tetapi tentang membuat konten dan memonetisasinya.
                </Text>
                </Box>
                </a>
            </VStack>
            </Col>
        </Row>

      <Box py={1} pb={'10%'}>
            <div style={{ textAlign: 'center'}}>
                <a href='https://blog.cfund.me/' >
                <Button color={'white'} backgroundColor={'#ffa520'} as={'b'} fontSize={'16px'} p={'24px'}>See All News</Button>
                </a>
            </div>
        </Box>
    </section>
  )
}
