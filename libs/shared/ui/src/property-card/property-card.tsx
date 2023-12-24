import { Favorite, BedroomChild } from '@mui/icons-material'
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton
} from '@mui/material'
import { Property } from '@pkx-workspace/shared-commons'
import Carousel from 'react-slick'

export const PropertyCard = ({ property }: { property: Property }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <Card>
      <Carousel {...settings}>
        {property.photos.map((image, index) => (
          <CardMedia
            key={index}
            component="img"
            height="140"
            image={image}
            alt="Property Image"
          />
        ))}
      </Carousel>
      <CardContent>
        <Typography variant="h5">{property.title}</Typography>
        <Typography variant="body2">{property.price}</Typography>
        <IconButton aria-label="add to favorites">
          <Favorite />
        </IconButton>
        {property.features?.map((feature, index) => (
          <IconButton key={index} aria-label={feature.featureType}>
            <BedroomChild /> {feature.value}
          </IconButton>
        ))}
      </CardContent>
    </Card>
  )
}
