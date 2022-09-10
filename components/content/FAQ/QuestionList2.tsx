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
        question: 'What are the requirements for withdrawal (WD)?',
        answer: "Withdraw (WD) will be processed within withdraw period; Withdraw (WD) outside lock period could only be processed on withdrawal week (Monday - Wednesday first week of the month) and penalty will be charged."      
    },
    {
        id: '2',
        group: 'General',
        question: 'Estimate weekly and monthly profit?',
        answer: "Estimate profit percentage for every products on every quarter are below: (CFund Moon (semi-flexible product): Estimate profit per year is 10% > Capital lock: 1 month > Profit WD-able every month); (CFund Stars (mid range): Estimate profit per year is 20% > Capital lock: 3 month / 1 quarter > Profit WD-able every month); (CFund Galaxy (corporate / AI - accredited investor): Estimate profit per year is 30% > Capital lock: 3 month > Profit WD-able every month > Required → contact to CRM only → set a call with Arya & Kurnia (KYC level 2)); CFund Supernova is only for Foreigner customers (Singapore & Malaysia) – Estimate profit per year to be confirmed"
    },
    {
        id: '3',
        group: 'General',
        question: 'The maximum drawdown at CFund?',
        answer: "One of the strategies used in CFund is to determine the stop loss maximum at 20%."      
    },
    {
        id: '4',
        group: 'General',
        question: 'Can the deposit be transferred from any Banks?',
        answer: "Deposit can be transferred from any banks with Virtual Bank Account Number & manual transfer as stated on CFUND Apps."      
    },
    {
        id: '5',
        group: 'General',
        question: 'Is Top up Investment can be transferred from any Banks as well?',
        answer: "Yes, as refer to point 11."      
    },
    {
        id: '6',
        group: 'General',
        question: 'Maximum withdrawal every month?',
        answer: "Withdraw CFund Moon: remaining capital must be minimum Rp. 5.000.000 as stated on portfolio; Withdraw CFund Stars: remaining capital must be minimum Rp. 50.000.000 as stated on portfolio; Withdraw CFund Galaxy: remaining capital must be minimum Rp. 500.000.000 as stated on portfolio."      
    },
    {
        id: '7',
        group: 'General',
        question: 'What and how to change Cfund products for customers?',
        answer: "Customer could perform the action via app by witdraw all capitals (after lock period was over) and re-deposit the funds to another products."      
    },
]

interface QuestionListProps {
    query?: string;
}

export default function QuestionList2(props: QuestionListProps) {
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
                                            style={{ cursor: 'pointer', fontSize: '1rem', fontStyle: 'bold', fontWeight: '700', backgroundColor: '#011535', color: 'white', paddingBottom: '3%'}}
                                        >
                                            {faq.question}

                                            {
                                                activeKey === faq.id ?
                                                    <FontAwesomeIcon icon={faChevronUp} className="ml-2" style={{float: 'right'}} />:
                                                    <FontAwesomeIcon icon={faChevronDown} className="ml-2" style={{float: 'right'}} />
                                            }
                                        </Accordion>
                                        <Accordion.Collapse eventKey={faq.id}>
                                            <Card.Body style={{ backgroundColor: '#011535', color: 'white' }}>{faq.answer}</Card.Body>
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
