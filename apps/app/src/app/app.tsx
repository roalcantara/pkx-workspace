import { Property } from '@pkx-workspace/shared-commons'
import { PropertyCard, SwipeablePropertyCard } from '@pkx-workspace/shared-ui'
import { useState } from 'react'
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
  const properties: Property[] = [
    {
      id: 1,
      title: 'Property 1',
      price: 200,
      photos: ['https://picsum.photos/200/300']
    },
    {
      id: 2,
      title: 'Property 2',
      price: 500,
      photos: ['https://picsum.photos/200/300']
    }
    // ... more properties
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const handleSwipe = (direction: 'left' | 'right', id: number) => {
    console.log(`Swiped ${direction} on property ${id}`)
    setCurrentIndex(prevIndex => prevIndex + 1)
  }

  return (
    <StyledApp>
      <h1>Hello World!</h1>
      <PropertyCard property={property} />
      <hr />
      {currentIndex < properties.length && (
        <SwipeablePropertyCard
          property={properties[currentIndex]}
          onSwipe={handleSwipe}
        />
      )}
    </StyledApp>
  )
}

export default App
