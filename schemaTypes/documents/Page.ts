import { defineArrayMember, defineField, defineType } from 'sanity'
import { MasterDetailIcon } from '@sanity/icons'

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
      options: { source: 'name', maxLength: 96 },
      validation: rule =>
        rule.required().error('Slug is required to generate a page'),
    }),
    defineField({
      name: 'pageSections',
      title: 'Page Sections',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'blogPost',
          title: 'Blog Post',
          type: 'reference',
          to: [{ type: 'blogPost' }],
        }),
      ],
    }),
  ],
})
