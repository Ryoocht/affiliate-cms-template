import { cta } from './cta'
import { ctaBlock } from './ctaBlock'
import { heroBlock } from './heroBlock'
import { imageCarousel } from './imageCarousel'
import { page } from './olgPage'
import { textBlock } from './textBlock'

/* Documents */
// import {}

/* Fields */
import * as FieldObjects from './objects/fields'

export const schemaTypes = [
  cta,
  ctaBlock,
  heroBlock,
  imageCarousel,
  page,
  textBlock,

  ...Object.values(FieldObjects),
]
