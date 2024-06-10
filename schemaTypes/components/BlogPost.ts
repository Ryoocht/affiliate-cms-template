import { defineField, defineType } from 'sanity'
import { DocumentTextIcon } from '@sanity/icons'

export const blogPost = defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'name',
      description: 'The name of the blog post.',
      type: 'string',
    }),
    defineField({
      name: 'title',
      description: 'This is the title of the blog post.',
      type: 'string',
    }),
    defineField({
      name: 'excerpt',
      description: 'This is the excerpt of the blog post.',
      type: 'text',
    }),
    defineField({
      name: 'featured',
      type: 'boolean',
    }),
    defineField({
      name: 'mainImage',
      description: 'The responsive image asset to use for this blog post.',
      type: 'reference',
      to: [{ type: '' }],
    }),
  ],
})
