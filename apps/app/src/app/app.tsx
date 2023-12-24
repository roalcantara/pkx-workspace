import { Property } from '@pkx-workspace/shared-commons'
import { PropertyCard } from '@pkx-workspace/shared-ui'
import styled from 'styled-components'

const StyledApp = styled.div`
  // Your style here
`

export function App() {
  const property: Property = {
    id: 1,
    title: 'Test',
    price: 1000,
    photos: ['https://picsum.photos/200/300'],
    features: [
      {
        featureType: 'Bedrooms',
        value: 1
      }
    ]
  }
  return (
    <StyledApp>
      <h1>Hello World!</h1>
      <PropertyCard property={property} />
    </StyledApp>
  )
}

export default App
