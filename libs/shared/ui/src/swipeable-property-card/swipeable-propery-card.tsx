import { Card, CardMedia, Typography } from '@mui/material'
import { Property } from '@pkx-workspace/shared-commons'
import { useState } from 'react'
import { useSwipeable } from 'react-swipeable'

export const SwipeablePropertyCard = ({
  property,
  onSwipe
}: {
  property: Property
  onSwipe: (direction: 'left' | 'right', id: number) => void
}) => {
  const [opacity, setOpacity] = useState(1)

  const handleSwipe = (direction: 'left' | 'right') => {
    setOpacity(1)
    onSwipe(direction, property.id)
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe('left'),
    onSwipedRight: () => handleSwipe('right'),
    onSwiping: eventData => setOpacity(1 - Math.abs(eventData.deltaX) * 0.002),
    trackMouse: true
  })

  return (
    <div {...handlers} style={{ opacity }}>
      <Card>
        <CardMedia
          component="img"
          height="250"
          image={property.photos[0]}
          alt={property.title}
        />
        <Typography variant="h6">{property.title}</Typography>
      </Card>
    </div>
  )
}
