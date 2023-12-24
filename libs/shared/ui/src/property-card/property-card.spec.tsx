import { Property } from '@pkx-workspace/shared-commons'
import { render } from '@testing-library/react'
import { PropertyCard } from './property-card'

describe('PropertyCard', () => {
  it('should render successfully', () => {
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
    const { baseElement } = render(<PropertyCard property={property} />)
    expect(baseElement).toBeTruthy()
  })
})
