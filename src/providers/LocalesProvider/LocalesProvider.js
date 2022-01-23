import React, { useState, useCallback, createContext, useContext } from 'react';
import { langs } from './translations';
export const LocalesContext = createContext({});
export const useLocales = () => useContext(LocalesContext);

const LocalesProvider = ({ children }) => {
	const [lang, setLang] = useState('ru');

	const toggleLang = useCallback(() => {
		setLang((prev) => (prev === 'ru' ? 'en' : 'ru'));
	}, []);

	return (
		<LocalesContext.Provider value={{ trans: langs[lang], toggleLang }}>
			{children}
		</LocalesContext.Provider>
	);
};

export default LocalesProvider;
