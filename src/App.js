import React from 'react';
import { Provider } from 'react-redux';
import TodoListContainer from './containers/TodoListContainer';
import store from './store';
import LocalesProvider from './providers/LocalesProvider';

const App = () => {
	return (
		<Provider store={store}>
			<LocalesProvider>
				<TodoListContainer />;
			</LocalesProvider>
		</Provider>
	);
};

export default App;
