import React from 'react';
import Card from "../../components/Card";
import BCard from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const DEFAULT_IMAGE_POSITION = "top";

const EldenCard = ({eldenring}) => {
  return (
    <Col className="my-3">
    <Card>
      <BCard.Header as="small">{eldenring.location}</BCard.Header>
      <BCard.Body>
        <BCard.Img
          variant={DEFAULT_IMAGE_POSITION}
          src={eldenring.image} //a changer src={eldenring.data.other["official-artwork"].front_default} 
          loading="lazy"
          alt={eldenring.name} 
        />
        <BCard.Title>{eldenring.name}</BCard.Title>
        <BCard.Text>{eldenring.description}</BCard.Text>
      </BCard.Body>
    </Card>
  </Col>
  )
}

export default EldenCard