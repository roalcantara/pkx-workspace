import { Property } from '@pkx-workspace/shared-commons'
import { render } from '@testing-library/react'
import { SwipeablePropertyCard } from './swipeable-propery-card'

describe('SwipeableProperyCard', () => {
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
    const { baseElement } = render(
      <SwipeablePropertyCard
        property={property}
        onSwipe={direction => console.log(direction)}
      />
    )
    expect(baseElement).toBeTruthy()
  })
})
