import React from 'react';
import { Provider } from 'react-redux';
import TodoListContainer from './containers/TodoListContainer';
import store from './store';

const App = () => {
	return (
		<Provider store={store}>
			<TodoListContainer />;
		</Provider>
	);
};

export default App;
