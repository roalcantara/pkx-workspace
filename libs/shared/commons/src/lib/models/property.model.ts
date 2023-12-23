type PropertyFeature = {
  featureType: FeatureType
  value: string | boolean | number
}

type FeatureType =
  | 'Garden'
  | 'Balcony'
  | 'Pool'
  | 'Gym'
  | 'Fireplace'
  | 'AirConditioning'
  | 'Parking'
  | 'Bedrooms'
  | 'Bathrooms'

export type Property = {
  id: number
  title: string
  description?: string
  price: number
  photos: string[]
  location?: {
    city: string
    state: string
    zipCode: string
  }
  features?: PropertyFeature[] // Array of Property Features
}
