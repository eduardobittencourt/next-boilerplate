import { createContext, useReducer, useContext } from 'react'

const UserContext = createContext()

const userReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER': {
      return action.payload
    }
    case 'UPDATE_USER': {
      return {
        ...state,
        ...action.payload
      }
    }
    case 'CLEAR_USER': {
      return null
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

const UserProvider = ({ children }) => {
  const value = useReducer(userReducer, null)

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

const useUser = () => {
  const context = useContext(UserContext)

  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider')
  }

  return context
}

export { UserProvider, useUser }
