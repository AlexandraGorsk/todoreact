import React from 'react';
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

class App extends React.Component {
	state = {
		filterStatus: 'Все', // deleted, done
		filterValue: '',
		todoList: JSON.parse(localStorage.getItem('todolist')) || [],
		deletedTodo: JSON.parse(localStorage.getItem('deletedtodo')) || [],
	};
	componentDidUpdate() {
		localStorage.setItem('todolist', JSON.stringify(this.state.todoList));
		localStorage.setItem('deletedtodo', JSON.stringify(this.state.deletedTodo));
	}
	handleCreateTodo = (name) => {
		this.setState({
			todoList: this.state.todoList.concat({ name, done: false, id: uuidv4() }),
		});
	};
	handleDone = (id) => {
		this.setState({
			todoList: this.state.todoList.map((todo) =>
				todo.id === id ? { ...todo, done: true } : todo
			),
		});
	};
	handleDeleteodo = (id) => {
		this.setState({
			todoList: this.state.todoList.filter((todo) => todo.id !== id),
			deletedTodo: this.state.deletedTodo.concat(
				this.state.todoList.filter((todo) => todo.id === id)
			),
		});
	};
	handleChangeFilterStatus = (filterStatus) => {
		this.setState(() => ({ filterStatus: filterStatus }));
	};

	handleChangeFilterValue = (value) => {
		this.setState(() => ({ filterValue: value }));
	};

	render() {
		const { todoList, deletedTodo, filterStatus, filterValue } = this.state;

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
								onChangeFilteredStatus={this.handleChangeFilterStatus}
								onChangeFilteredValue={this.handleChangeFilterValue}
							/>
						</section>
						<List
							list={filteredList}
							onDeleteTodo={this.handleDeleteodo}
							onDoneTodo={this.handleDone}
						/>
					</>
				)}

				<section>
					<Form onCreateTodo={this.handleCreateTodo} />
				</section>
			</TodoList>
		);
	}
}

export default App;
