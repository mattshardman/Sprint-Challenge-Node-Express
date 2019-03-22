import React from "react";
import styled from "styled-components";

const Card = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin: 10px 0;
  padding: 20px;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 5px;
`;

function ActionCard({ description, notes }) {
  return (
    <Card>
      <h3 style={{ margin: "5px 0" }}>Description:</h3>
      <p>{description}</p>
      <h4>Notes:</h4> <p>{notes}</p>
    </Card>
  );
}

export default ActionCard;
