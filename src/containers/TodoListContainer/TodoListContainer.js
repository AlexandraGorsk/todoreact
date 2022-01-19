import React, { useEffect } from 'react';
import styled from 'styled-components';

import Header from '../../components/Header';
import Filter from '../Filter';
import List from '../List';
import Form from '../Form';
import { useSelector } from 'react-redux';
import { getFilteredList, getSlice } from '../../store/todo';

const TodoList = styled('div')`
	margin: 32px auto;
	padding: 8px;
	max-width: 600px;
	box-sizing: border-box;
	border: 2px solid gray;
`;

const TodoListContainer = () => {
	const { todoList, deletedTodo } = useSelector(getSlice);
	const filteredList = useSelector(getFilteredList);
	useEffect(() => {
		localStorage.setItem('todolist', JSON.stringify(todoList));
	}, [todoList]);
	useEffect(() => {
		localStorage.setItem('deletedtodo', JSON.stringify(deletedTodo));
	}, [deletedTodo]);

	return (
		<TodoList>
			<Header list={filteredList} />
			{(todoList.length > 0 || deletedTodo.length > 0) && (
				<>
					<section>
						<Filter />
					</section>
					<List />
				</>
			)}

			<section>
				<Form />
			</section>
		</TodoList>
	);
};

export default TodoListContainer;
