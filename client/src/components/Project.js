import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import ActionCard from "./ActionCard";

const ProjectContainer = styled.div`
  width: 100%;
  color: #fff;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;
`;

const Body = styled.div`
  width: 600px;
  max-width: 100%;
`;

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  max-width: 100%;
`;

const AddAction = styled.form`
  width: 600px;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Input = styled.input`
  box-sizing: border-box;
  width: 33%;
  height: 35px;
  border: 1px solid #fff;
  border-radius: 5px;
  background: none;
  outline: none;
  color: #fff;
  padding: 0px 20px;
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

function Project({ location }) {
  const [actions, setActions] = useState(null);
  const [update, setUpdate] = useState(false);
  const [error, setError] = useState(null);
  const [description, setDescription] = useState("");
  const [notes, setNotes] = useState("");

  const { id } = location.state;

  const getActions = async () => {
    try {
      const result = await axios.get(
        `http://localhost:5000/api/project-actions/${id}`
      );
      setActions(result.data);
    } catch (e) {
      setError(true);
    }
  };

  const removeAction = async (id) => {
    try {
      const result = await axios.delete(
        `http://localhost:5000/api/actions/${id}`
      );
      console.log(result)
      setUpdate(true);
    } catch (e) {
      setError(true);
    }
  };

  const submitHandler = async e => {
    e.preventDefault();
    try {
      const result = await axios.post(`http://localhost:5000/api/actions`, {
        project_id: id,
        description,
        notes
      });
      setUpdate(true);
    } catch (e) {
      setError(true);
    }
  };

  useEffect(() => {
    setUpdate(false);
    getActions();
  }, [update]);

  if (error) {
    return <div>Sorry there was an error</div>;
  }

  return (
    <ProjectContainer>
      <Body>
        <h2>{location.state.name}</h2>
        <p>{location.state.description}</p>
      </Body>
      <Actions>
        {!!actions && actions.map(action => <ActionCard key={action.id} removeAction={removeAction} {...action} />)}
      </Actions>
      <h3 style={{ width: 600, maxWidth: "100%" }}>Add an action</h3>
      <AddAction onSubmit={submitHandler}>
        <Input
          type="text"
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Notes"
          value={notes}
          onChange={e => setNotes(e.target.value)}
        />
        <Button type="submit">ADD</Button>
      </AddAction>
    </ProjectContainer>
  );
}

export default Project;
