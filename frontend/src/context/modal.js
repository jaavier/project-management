import { useState, createContext, useContext } from 'react';

const Context = createContext();

export function ModalProvider({ children }) {
	const [ isOpen, setIsOpen ] = useState(false);
	const [ component, setComponent ] = useState(null);
	const value = {
		isOpen,
		setIsOpen,
		component,
		setComponent
	};
	return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function useModal() {
	return useContext(Context);
}
