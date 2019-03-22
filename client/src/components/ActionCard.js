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

const Button = styled.button`
  box-sizing: border-box;
  width: 30%;
  height: 35px;
  border: 1px solid #fff;
  border-radius: 5px;
  background: none;
  outline: none;
  color: #fff;
  padding: 0px 20px;
  cursor: pointer;
`;

function ActionCard({ id, description, notes, removeAction }) {
  return (
    <Card>
      <h2 style={{ margin: "5px 0" }}>Description:</h2>
      <p>{description}</p>
      <h4>Notes:</h4> <p>{notes}</p>
      <Button onClick={() => removeAction(id)}>DELETE</Button>
    </Card>
  );
}

export default ActionCard;
