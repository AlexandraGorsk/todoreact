import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import ListItem from '../../containers/ListItem';
import { getFilteredList } from '../../store/todo';

const Wrapper = styled('ul')`
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

const List = () => {
	const filteredList = useSelector(getFilteredList);
	const todoItems = filteredList.map(({ id, title, completed }) => (
		<ListItem key={id} name={title} done={completed} id={id} />
	));

	return <Wrapper>{todoItems}</Wrapper>;
};

export default List;
