/* Components */
import * as Components from './components'
/* Documents */
import * as Documents from './documents'
/* Fields */
import * as FieldObjects from './objects'

export const schemaTypes = [
  ...Object.values(Components),
  ...Object.values(Documents),
  ...Object.values(FieldObjects),
]
