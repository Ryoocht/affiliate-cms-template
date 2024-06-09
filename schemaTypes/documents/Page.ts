import {defineField, defineType} from 'sanity'
import {MasterDetailIcon} from '@sanity/icons'

export const page = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: MasterDetailIcon,
  fields: [
    defineField({
      name: 'name',
      description: 'A name of this page',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      description: 'A URL-friendly identifier describing the page.',
      type: 'slug',
      options: {source: 'name'},
      validation: (rule) => rule.required().error('Slug is required to generate a page'),
    }),
  ],
})
