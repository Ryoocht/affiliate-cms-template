import { defineConfig } from 'sanity'
import { visionTool } from '@sanity/vision'
/* Schema Types */
import { schemaTypes } from './schemaTypes'
/* Structure */
import { structureTool } from 'sanity/structure'
import { structure } from './structure'

export default defineConfig({
  name: 'default',
  title: 'Affiliate CMS Template',

  projectId: '36rcvcar',
  dataset: 'production',

  plugins: [structureTool({ structure }), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
