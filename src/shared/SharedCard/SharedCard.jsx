import React from 'react'
import { Card, Container } from 'react-bootstrap'
import BtnComp from '../BtnComp/BtnComp'


export default function SharedCard({btntext,title,desc,ProductImage}) {
  return (
    <Container>
    <Card style={{ width: '18rem', height:'30rem'}}>
    <Card.Img className='photo' variant="top" src={ProductImage} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text className='desc'>
        {desc}
      </Card.Text>
      <BtnComp btntext={btntext} />
    </Card.Body>
  </Card>
  </Container>
  )
}