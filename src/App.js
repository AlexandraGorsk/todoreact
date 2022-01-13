import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import Header from './components/Header';
import Filter from './components/Filter';
import List from './components/List';
import Form from './components/Form';

const TodoList = styled('div')`
	margin: 32px auto;
	padding: 8px;
	max-width: 600px;
	box-sizing: border-box;
	border: 2px solid gray;
`;

// const skeletonTodo = {
//   id: uuidv4(),
//   name: "some todo",
//   done: false,
// };

const App = () => {
	const [todoList, setTodoList] = useState(
		JSON.parse(localStorage.getItem('todolist')) || []
	);
	const [deletedTodo, setDeletedTodo] = useState(
		JSON.parse(localStorage.getItem('deletedtodo')) || []
	);
	const [filterStatus, setFilteredStatus] = useState('Все');
	const [filterValue, setFilteredValue] = useState('');
	useEffect(() => {
		localStorage.setItem('todolist', JSON.stringify(todoList));
	}, [todoList]);
	useEffect(() => {
		localStorage.setItem('deletedtodo', JSON.stringify(deletedTodo));
	}, [deletedTodo]);

	const handleCreateTodo = (name) => {
		setTodoList(todoList.concat({ name, done: false, id: uuidv4() }));
	};
	const handleDone = (id) => {
		setTodoList(
			todoList.map((todo) => (todo.id === id ? { ...todo, done: true } : todo))
		);
	};
	const handleDeleteodo = (id) => {
		setDeletedTodo(
			deletedTodo.concat(todoList.filter((todo) => todo.id === id))
		);
		setTodoList(todoList.filter((todo) => todo.id !== id));
	};
	const handleChangeFilterStatus = (filterStatus) => {
		setFilteredStatus(filterStatus);
	};

	const handleChangeFilterValue = (value) => {
		setFilteredValue(value);
	};
	const filterListByStatus = () => {
		if (filterStatus === 'Удалённые') {
			return deletedTodo;
		}
		if (filterStatus === 'Выполненные') {
			return todoList.filter((todo) => todo.done === true);
		} else {
			return todoList;
		}
	};
	const filterListByValue = (list) => {
		return list.filter((todo) =>
			todo.name.toLowerCase().includes(filterValue.toLowerCase())
		);
	};
	const filteredList = filterListByValue(filterListByStatus());

	return (
		<TodoList>
			<Header list={filteredList} />
			{(todoList.length > 0 || deletedTodo.length > 0) && (
				<>
					<section>
						<Filter
							filterStatus={filterStatus}
							list={filteredList}
							deleted={deletedTodo}
							filtered={filterStatus}
							onChangeFilteredStatus={handleChangeFilterStatus}
							onChangeFilteredValue={handleChangeFilterValue}
						/>
					</section>
					<List
						list={filteredList}
						onDeleteTodo={handleDeleteodo}
						onDoneTodo={handleDone}
					/>
				</>
			)}

			<section>
				<Form onCreateTodo={handleCreateTodo} />
			</section>
		</TodoList>
	);
};

export default App;
