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
        question: 'Estimate yearly profit of CFund?',
        answer: 'Estimate profit of CFund products may differ. Please contact our Customer Service for further information.'
    },
    {
        id: '2',
        group: 'General',
        question: 'Where can I see the historical profit of CFUND?',
        answer: 'Please contact our Customer Service regarding the profit history of CFUND.'
    },
    {
        id: '3',
        group: 'General',
        question: 'How long is the KYC process will take?',
        answer: 'KYC will be processed within 1x24 hours if all data is complete.'
    },
    {
        id: '4',
        group: 'General',
        question: 'How long is the deposit approval process at CFUND?',
        answer: 'Deposit will be approved every Monday.'
    },
    {
        id: '5',
        group: 'General',
        question: 'How long is the withdrawal (WD) process?',
        answer: "Withdrawal (WD) will be processed on Monday, Tuesday, and Wednesday on the first week of every month; Withdraw (WD) will be transferred on Thursday - Friday in accordance with the Bank's working hour."
            
    },
    {
        id: '6',
        group: 'General',
        question: 'Is it possible to register as a new customer without an invitation code?',
        answer: "Apologies, as of now CFUND is still on closed loop period and only customers with invitation code are able to register."      
    },
    {
        id: '7',
        group: 'General',
        question: 'Can new customers register without an invitation code (if CFUND is already open to the public)?',
        answer: "Yes."      
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
