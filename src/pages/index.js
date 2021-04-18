import styled from 'styled-components'
import { color } from 'styled-system'

import capsulesResource from 'resources/capsules'
import { useUser } from 'contexts/user'
import { useEffect } from 'react'

const Roadmap = ({ initialData }) => {
  const { data } = capsulesResource.get(initialData)
  const [user, dispatch] = useUser()

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: 'SET_USER', payload: { id: 1, name: 'Eduardo' } })
    }, 1000)
  }, [])

  return (
    <main>
      <Title color='navy'>Roadmap</Title>

      {user && <h2>{user?.name}</h2>}

      <h2>Architecture</h2>
      <ul>
        <Item color='check'>Eslint</Item>
        <Item color='check'>Prettier</Item>
        <Item color='check'>Editorconfig</Item>
        <Item>Husky</Item>
        <Item>Commitlint</Item>
      </ul>

      <h2>Development</h2>
      <ul>
        <Item color='check'>Next.js</Item>
        <Item color='check'>Styled Components</Item>
        <Item color='check'>Styled System</Item>
        <Item color='check'>Axios</Item>
        <Item color='check'>SWR</Item>
      </ul>

      {data.map((item) => (
        <p key={item.id}>
          {item.serial} - {item.type}
        </p>
      ))}
    </main>
  )
}

export async function getStaticProps() {
  const initialData = await capsulesResource.getSSR()
  return { props: { initialData } }
}

const Title = styled.h1`
  ${color}
`

const Item = styled.li`
  ${color}
`

export default Roadmap
