import { UserProvider } from './user'

const Provider = ({ children }) => {
  return <UserProvider>{children}</UserProvider>
}

export default Provider
