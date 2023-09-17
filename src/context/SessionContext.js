import React, {createContext, useContext, useState} from 'react';

export const SessionContext = createContext({
    selectedGame: 'p5r',
    selectedTool: 'Fusion Calculator'
})

export const SessionContextProvider = ({ children }) => {
    const [selectedGame, setSelectedGame] = useState('p5r')
    const [selectedTool, setSelectedTool] = useState('Fusion Calculator')

    return (
        <SessionContext.Provider value={{
            selectedGame,
            selectedTool,
            setSelectedGame,
            setSelectedTool
        }}>
            {children}
        </SessionContext.Provider>
    )
}

export const useSessionContext = () => {
    const context = useContext(SessionContext)
    if (!context) {
        throw new Error('useSessionContext must be used within a SessionContextProvider')
    }
    return context
}
