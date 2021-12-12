import React from "react";
import styled from "styled-components";

import ListItem from "../ListItem";

const Wrapper = styled("ul")`
  padding: 0;
  margin: 16px 0px;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;

  > li {
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0px 8px;

    :not(:last-child) {
      border-bottom: 1px solid gray;
    }

    :hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
  }
`;

const List = ({ list, onDeleteTodo, onDoneTodo}) => {
  const todoItems = list.map(({ id, name, done }) => (
    <ListItem key={id} name={name} done={done} onDeleteClick = {onDeleteTodo}  onDoneTodo={onDoneTodo} id={id}/>
  ));

  return <Wrapper>{todoItems}</Wrapper>;
};

export default List;
