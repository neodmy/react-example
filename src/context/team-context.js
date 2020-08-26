import React, {useState, createContext} from "react";

export const TeamContext = createContext({})

export const TeamProvider = ({children, defaultPlayers = []}) => {
    const [players, setPlayers] = useState(defaultPlayers);

    const addPlayer = (newPlayer) => setPlayers([...players, newPlayer]);

    const editPlayer = (playerUpdated) => {
        const playersUpdated = players.map(player => {
            if (playerUpdated.id === player.id) return playerUpdated;
            return player;
        })
        setPlayers(playersUpdated)
    }

    const deletePlayer = (playerId) => {
        const playersUpdated = players.filter(player => player.id !== playerId);
        setPlayers(playersUpdated);
    }

    return (
        <TeamContext.Provider value={{
            players,
            addPlayer,
            editPlayer,
            deletePlayer,
        }}>
            {children}
        </TeamContext.Provider>
    )
}
