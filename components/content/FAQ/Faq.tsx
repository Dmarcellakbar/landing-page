import React, {useState} from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Box, Flex, useColorModeValue, Text, HStack } from '@chakra-ui/react';
import QuestionList from './QuestionList'
import QuestionList2 from './QuestionList2'

export default function Faq() {
    const [searchQuery, setSearchQuery] = useState("");
  return (
    <section className="site-layout-background2">
      <Box py={6}>
            <div style={{ textAlign: 'center', marginTop: '10%'}}>
                <Text as={'b'} fontSize='4xl' color={'white'}>
                    FAQ
                </Text>
            </div>
        </Box>

        <Container>
        <HStack>
        <Row>
            <Col lg={6}>
                <QuestionList
                    query={searchQuery}
                />
            </Col>
            <Col lg={6}>
                <QuestionList2
                    query={searchQuery}
                />
            </Col>
        </Row>
        </HStack>
        </Container>
    </section>
  )
}
