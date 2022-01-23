import React from 'react';
import { Provider } from 'react-redux';
import TodoListContainer from './containers/TodoListContainer';
import store from './store';
import LocalesProvider from './providers/LocalesProvider';
import ThemeProvider from './providers/ThemeProvider';

const App = () => {
	return (
		<Provider store={store}>
			<ThemeProvider>
				<LocalesProvider>
					<TodoListContainer />;
				</LocalesProvider>
			</ThemeProvider>
		</Provider>
	);
};

export default App;
