import {
	CREATE_TODO,
	DONE,
	DELETE,
	UPDATE,
	SET_FILTER_STATUS,
	SET_FILTER_VALUE,
} from './todo.actions';
import { v4 as uuidv4 } from 'uuid';

export const initialState = {
	todoList: JSON.parse(localStorage.getItem('todolist')) || [],
	deletedTodo: JSON.parse(localStorage.getItem('deletedtodo')) || [],
	filterStatus: 'Все',
	filterValue: '',
};
export const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case CREATE_TODO:
			return {
				...state,
				todoList: state.todoList.concat({
					id: uuidv4(),
					title: action.payload,
					completed: false,
				}),
			};
		case DONE:
			return {
				...state,
				todoList: state.todoList.map((todo) =>
					todo.id === action.payload ? { ...todo, completed: true } : todo
				),
			};
		case DELETE:
			return {
				...state,
				todoList: state.todoList.filter((todo) => todo.id !== action.payload),
				deletedTodo: state.deletedTodo.concat(
					state.todoList.filter((todo) => todo.id === action.payload)
				),
			};
		case UPDATE:
			return { ...state };
		case SET_FILTER_STATUS:
			return {
				...state,
				filterStatus: action.payload,
			};
		case SET_FILTER_VALUE:
			return {
				...state,
				filterValue: action.payload,
			};
		default:
			return state;
	}
};
