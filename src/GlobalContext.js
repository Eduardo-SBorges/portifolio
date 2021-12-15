import React from 'react'

export const GlobalContext = React.createContext({})

export const GlobalContextProvider = ({ children }) => {
	const [open, setOpen] = React.useState(false)

	return (
		<GlobalContext.Provider value={{ open, setOpen }}>
			{children}
		</GlobalContext.Provider>
	)
}
