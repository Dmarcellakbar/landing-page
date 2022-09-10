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
        <Box py={6} style={{ textAlign: 'center' }}>
            <Text as={'b'} fontSize='5xl' color={'white'}>
                News & Article
            </Text>
        </Box>
        <Row style={{ marginRight: '7%' }}>
          <Col lg={3}>
            <VStack rounded={'20'} bg='#011535'>
              {/* <a href={href}> */}
              
                <Box w='15rem'>
                <a href="https://blog.cfund.me/apa-itu-decentralized-science-desci/" >
                  <Image style={{ borderTopRightRadius: 20, borderTopLeftRadius: 20}} src={Satu}/>
                  <Text as={'b'} fontSize={'1x1'}>Apa itu decentralized science (DeSci)?</Text>
                  <Text fontSize={'1x1'}>20 August 2022</Text>
                  <Text fontSize={'1x1'}>
                  Decentralized science (DeSci) adalah gerakan yang bertujuan untuk membangun infrastruktur publik untuk mendanai, membuat, meninjau, mengkredit, menyimpan, dan menyebarluaskan pengetahuan ilmiah secara adil dan merata menggunakan Web3 sebagai fondasinya.
                  </Text>
                </a>
                </Box>
                {/* </a> */}
            </VStack>
            </Col>
            <Col lg={3}>
            <VStack rounded={'20'} bg='#011535'>
              <Box w='15rem'>
              <a href="https://blog.cfund.me/memanfaatkan-bear-market-saat-ini-untuk-menjadi-investor-yang-lebih-baik-di-bull-run-berikutnya/" >
                <Image style={{ borderTopRightRadius: 20, borderTopLeftRadius: 20}} src={Satu}/>
                <Text as={'b'} fontSize={'1x1'}>Memanfaatkan Bear Market Saat ini Untuk Menjadi INVESTOR Yang Lebih Baik di Bull Run Berikutnya</Text>
                <Text fontSize={'1x1'}>11 August 2022</Text>
                <Text fontSize={'1x1'}>
                Sementara beberapa dari kita mungkin pernah mengalami siklus crypto sebelumnya dan memiliki pengalaman saat terjadi Bear Market sebelumnya. Beberapa orang yang baru masuk ke pasar crypto dari akhir 2020, 2021 dan 2022 baru saja mengalami pasar beruang Bear Market pertama mereka.
                </Text>
                </a>
                </Box>
            </VStack>
            </Col>
            <Col lg={3}>
            <VStack rounded={'20'} bg='#011535'>
              <Box w='15rem'>
              <a href="https://blog.cfund.me/a-complete-guide-on-how-to-do-research-in-crypto/" >
                <Image style={{ borderTopRightRadius: 20, borderTopLeftRadius: 20}} src={Satu}/>
                <Text as={'b'} fontSize={'1x1'}>A Complete Guide On How To Do Research in Crypto!</Text>
                <Text fontSize={'1x1'}>8 August 2022</Text>
                <Text fontSize={'1x1'}>
                If you have even the slightest inkling of crypto and have yearned to profit from it, considering the hype that has taken the world by storm, you must be no stranger to researching it online. With so many sources, material and technical jargon, it is no easy feat to do your research. Where do I even begin, is what many have often asked us, and so we decided to break it up for you so that you know how to research crypto like a pro.
                </Text>
                </a>
                </Box>
            </VStack>
            </Col>
            <Col lg={3}>
            <VStack rounded={'20'} bg='#011535'>
            <Box w='15rem'>
            <a href="https://blog.cfund.me/bagaimana-asia-tenggara-merangkul-era-web3/" >
                <Image style={{ borderTopRightRadius: 20, borderTopLeftRadius: 20}} src={Satu}/>
                <Text as={'b'} fontSize={'1x1'}>Bagaimana Asia Tenggara merangkul era Web3?</Text>
                <Text fontSize={'1x1'}>6 August 2022</Text>
                <Text fontSize={'1x1'}>
                Inovasi Fintech telah berkembang secara signifikan di Asia Tenggara, memungkinkan peningkatan adaptasi Web3 di wilayah ini. Dan akhir-akhir ini hype di belahan dunia saat ini bukan tentang berselancar di internet tetapi tentang membuat konten dan memonetisasinya.
                </Text>
                </a>
                </Box>
            </VStack>
            </Col>
        </Row>

      <Box py={6}>
            <div style={{ textAlign: 'center'}}>
                <a href='https://blog.cfund.me/' >
                <Button color={'white'} backgroundColor={'#ffa520'} as={'b'} fontSize={'1xl'}>View More</Button>
                </a>
            </div>
        </Box>
    </section>
  )
}
