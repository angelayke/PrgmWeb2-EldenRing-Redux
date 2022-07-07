import React from 'react';
import EldenCard from "./EldenCard";
import Row from "react-bootstrap/Row";

const EldenList = ({ eldenrings}) => {
  return (
    <Row>
    {eldenrings.map((eldenring) => (
      <EldenCard key={eldenring.id} eldenring={eldenring} />
    ))}
  </Row>
  )
}

export default EldenList