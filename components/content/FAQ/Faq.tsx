import React, {useState} from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Box, Flex, useColorModeValue, Text, HStack } from '@chakra-ui/react';
import QuestionList from './QuestionList'
import QuestionList2 from './QuestionList2'
import Accordion from './Accordion'


export default function Faq() {
    const [searchQuery, setSearchQuery] = useState("");
    const styles = {
        fontFamily: "Poppins",
        color: "#FFF",
        // backgroundColor: "#011535",
        width: '100%',
        height: '100%',
        borderColor: '#011535',
      };

  return (
    <section className="site-layout-background2">
      <Box py={6}>
            <div style={{ textAlign: 'center', paddingTop: '10%'}}>
                <Text as={'b'} fontSize='2.88rem' color={'white'} fontWeight={'extrabold'}>
                    FAQ
                </Text>
            </div>
        </Box>

        <Container style={{ paddingBottom: '10%' }}>
        <HStack>
        <Row>
            <Col lg={6}>
                <div style={styles}>
                <Accordion 
                title="Estimate yearly profit of CFund?" 
                content="Estimate profit of CFund products may differ. Please contact our Customer Service for further information." 
                
                />
                <Accordion 
                title="Where can I see the historical profit of CFUND?" 
                content="Please contact our Customer Service regarding the profit history of CFUND." 
                />
                <Accordion 
                title="How long is the KYC process will take?" 
                content="KYC will be processed within 1x24 hours if all data is complete." 
                />
                <Accordion 
                title="How long is the deposit approval process at CFUND?" 
                content="Deposit will be approved every Monday." 
                />
                <Accordion 
                title="How long is the withdrawal (WD) process?" 
                content="Withdrawal (WD) will be processed on Monday, Tuesday, and Wednesday on the first week of every month; Withdraw (WD) will be transferred on Thursday - Friday in accordance with the Bank's working hour." 
                />
                <Accordion 
                title="Is it possible to register as a new customer without an invitation code?" 
                content="Apologies, as of now CFUND is still on closed loop period and only customers with invitation code are able to register." 
                />
                <Accordion 
                title="Can new customers register without an invitation code (if CFUND is already open to the public)?" 
                content="Yes." 
                />
                </div>
            </Col>
            <Col lg={6}>
            <div style={styles}>
                <Accordion 
                title="What are the requirements for withdrawal (WD)?" 
                content="Withdraw (WD) will be processed within withdraw period; Withdraw (WD) outside lock period could only be processed on withdrawal week (Monday - Wednesday first week of the month) and penalty will be charged." 
                
                />
                <Accordion 
                title="Estimate weekly and monthly profit?" 
                content="Estimate profit percentage for every products on every quarter are below: (CFund Moon (semi-flexible product): Estimate profit per year is 10% > Capital lock: 1 month > Profit WD-able every month); (CFund Stars (mid range): Estimate profit per year is 20% > Capital lock: 3 month / 1 quarter > Profit WD-able every month); (CFund Galaxy (corporate / AI - accredited investor): Estimate profit per year is 30% > Capital lock: 3 month > Profit WD-able every month > Required ??? contact to CRM only ??? set a call with Arya & Kurnia (KYC level 2)); CFund Supernova is only for Foreigner customers (Singapore & Malaysia) - Estimate profit per year to be confirmed" 
                />
                <Accordion 
                title="The maximum drawdown at CFund?" 
                content="One of the strategies used in CFund is to determine the stop loss maximum at 20%." 
                />
                <Accordion 
                title="Can the deposit be transferred from any Banks?" 
                content="Deposit can be transferred from any banks with Virtual Bank Account Number & manual transfer as stated on CFUND Apps." 
                />
                <Accordion 
                title="Is Top up Investment can be transferred from any Banks as well?" 
                content="Yes, as refer to point 11." 
                />
                <Accordion 
                title="Maximum withdrawal every month?" 
                content="Withdraw CFund Moon: remaining capital must be minimum Rp. 5.000.000 as stated on portfolio; Withdraw CFund Stars: remaining capital must be minimum Rp. 50.000.000 as stated on portfolio; Withdraw CFund Galaxy: remaining capital must be minimum Rp. 500.000.000 as stated on portfolio." 
                />
                <Accordion 
                title="What and how to change Cfund products for customers?" 
                content="Customer could perform the action via app by witdraw all capitals (after lock period was over) and re-deposit the funds to another products." 
                />
                </div>
            </Col>
        </Row>
        </HStack>
        </Container>
    </section>
  )
}
