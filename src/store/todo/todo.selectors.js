export const getSlice = (state) => state.todo;

export const getFilteredList = (state) => {
	const { filterStatus, filterValue, todoList, deletedTodo } = state.todo;
	let filteredList = todoList;
	if (filterStatus === 'Удалённые') {
		filteredList = deletedTodo;
	}
	if (filterStatus === 'Выполненные') {
		filteredList = todoList.filter((todo) => todo.completed === true);
	}
	if (filterValue) {
		return filteredList.filter((todo) =>
			todo.title.toLowerCase().includes(filterValue.toLowerCase())
		);
	}

	return filteredList;
};
