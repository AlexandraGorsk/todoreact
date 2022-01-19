export const CREATE_TODO = 'CREATE_TODO';
export const DELETE = 'DELETE';
export const DONE = 'DONE';
export const UPDATE = 'UPDATE';
export const SET_FILTER_STATUS = 'SET_FILTER_STATUS';
export const SET_FILTER_VALUE = 'SET_FILTER_VALUE';
export const deletedTodo = (id) => ({
	type: DELETE,
	payload: id,
});
export const doneTodo = (id) => ({
	type: DONE,
	payload: id,
});
export const updateTodo = (id) => ({
	type: UPDATE,
	payload: id,
});
export const createTodo = (title) => ({
	type: CREATE_TODO,
	payload: title,
});
export const setFilterStatus = (status) => ({
	type: SET_FILTER_STATUS,
	payload: status,
});
export const setFilterValue = (value) => ({
	type: SET_FILTER_VALUE,
	payload: value,
});
