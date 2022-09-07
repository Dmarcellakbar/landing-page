import React, { useEffect } from "react";
import { Accordion, Card, Container } from "react-bootstrap";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import _ from 'lodash'

const QuestionListSection = styled.section`
    padding: 20px 0 140px;
    minHeight: 100vh;
`

const FaqData = [
    {
        id: '1',
        group: 'General',
        question: 'Bagaimana cara pendaftaran jika ingin berinvestasi di CFund?',
        answer: 'Untuk sementara ini, pendaftaran dapat diakses melalui website kami di www.cfund.me dengan menghubungi kontak Customer Support yang tertera pada website.'
    },
    {
        id: '2',
        group: 'General',
        question: 'Bagaimana sistem kelola investasi di CFund?',
        answer: 'Kami mengelola dana di pasar aset kripto menggunakan berbagai strategi. Mulai dari jangka panjang (investasi, atau yang sering dikenal sebagai HODL), dan trading harian (day trading). Selain itu, kami juga memanfaatkan teknologi blockchain secara menyeluruh dengan meng-kapitalisasi berbagai protokol De-Fi seperti yield farming dan staking.'
    },
    {
        id: '3',
        group: 'General',
        question: 'Apa saja persyaratan untuk pendaftarannya?',
        answer: 'Persyaratan yang diperlukan pada saat pendaftaran hanya dengan memerlukan KTP & E-mail sebagai kelengkapan data diri. Untuk CFund Galaxy, diperlukan adanya kontak terlebih dahulu ke pihak manajemen kami.'
    },
    {
        id: '4',
        group: 'General',
        question: 'Apakah sudah teregulasi secara resmi?',
        answer: 'Saat ini kami sudah terdaftar di Kominfo serta tersertifikasi ISO 27001. Selain itu, kami sedang dalam proses pendaftaran untuk Izin Pengelola Sentra Dana Berjangka di bawah naungan BAPPEBTI dan dalam proses untuk pengajuan lisensi VCC (Variable Capital Companies) dari Singapore.'
    },
    {
        id: '5',
        group: 'General',
        question: 'Apakah aplikasi sudah tersedia di App Store ataupun Playstore?',
        answer: 'Untuk saat ini aplikasi kami belum rilis di App Store ataupun Playstore, dan sedang dalam tahap Beta Testing.'
    },
]

interface QuestionListProps {
    query?: string;
}

export default function QuestionList(props: QuestionListProps) {
    const [activeKey, setActiveKey] = React.useState("");
    const [faqResult, setFaqResult] = React.useState(FaqData);
    
    useEffect(() => {
        if (props.query) {
            const newResult = _.filter(FaqData, (item) => {
                return (
                    item.question.toLowerCase().includes(props?.query?.toString().toLowerCase() || '') ||
                    item.answer.toLowerCase().includes(props?.query?.toString().toLowerCase() || '')
                )
            })
            setFaqResult(newResult)
        } else {
            setFaqResult(FaqData)
        }
    }, [props.query])
    return (
        <>
            <QuestionListSection >
                <Container>
                    <Accordion activeKey={activeKey}>
                        {
                            faqResult && faqResult.length > 0 ? faqResult.map(faq => {
                                return (
                                    <Card key={faq.id}>
                                        <Accordion 
                                            as={Card.Header} 
                                            eventKey={faq.id} onClick={() => {
                                                if (activeKey !== faq.id) {
                                                    setActiveKey(faq.id)
                                                } else {
                                                    setActiveKey('')
                                                }
                                            }}
                                            style={{ cursor: 'pointer', fontSize: '1.2rem', fontStyle: 'bold', fontWeight: '700' }}
                                        >
                                            {faq.question}

                                            {
                                                activeKey === faq.id ?
                                                    <FontAwesomeIcon icon={faChevronUp} className="ml-2" style={{float: 'right'}} />:
                                                    <FontAwesomeIcon icon={faChevronDown} className="ml-2" style={{float: 'right'}} />
                                            }
                                        </Accordion>
                                        <Accordion.Collapse eventKey={faq.id}>
                                            <Card.Body>{faq.answer}</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                )
                            }): 
                            <span>
                                Sorry we couldn't find anything that meets that criteria
                            </span>
                        }
                    </Accordion>
                </Container>
            </QuestionListSection>
        </>
    )
}
