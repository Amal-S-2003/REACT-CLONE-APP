import React from 'react'
import { Container, Row } from 'react-bootstrap'
import FaqCard from './FaqCard'

function Faq() {
  return (
    <>
        <Container>
            <h1 className='text-light fw-bold'>Frequently Asked Questions</h1>
            <Row>
                <FaqCard/>
            </Row>
        </Container>
    </>
  )
}

export default Faq