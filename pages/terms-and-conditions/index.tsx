import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TncDetails from "../../components/sections/terms-and-conditions/TncDetails";
import Footer from "../../components/Footer/Footer";
import { Layout } from 'antd'
import { Box, Text} from '@chakra-ui/react'

const TNCPage: React.FC = (props) => {

    // const platform =new URLSearchParams(props.location.search).get("platform");

    return (
        <Layout>
            <Box >
                <div className="pt-5"></div>
                <Container>
                    <Row className="justify-content-center text-center">
                        <Col lg="12">
                            <Text fontSize={'5xl'}>
                                Terms and Conditions
                            </Text>
                        </Col>
                    </Row>
                </Container>
            </Box>
            <Box >
                <Container>
                    <Row>
                        <Col lg="12" className="mb-5">
                            <TncDetails />
                        </Col>
                    </Row>
                </Container>
                <div className="pt-5"></div>
                {/* {platform!=="mobile" && <Footer/>} */}
            </Box>
        </Layout>
    )
}

export default TNCPage