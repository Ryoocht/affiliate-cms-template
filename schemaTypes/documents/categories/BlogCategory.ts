import { defineField, defineType } from 'sanity'

export const blogCategory = defineType({
  name: 'blogCategory',
  title: 'Blog Category',
  description: 'Categories for blog posts.',
  type: 'document',
  fields: [
    defineField({
      name: 'category',
      title: 'Category',
      type: 'category',
      description: 'The category details for the blog post.',
      validation: rule => rule.required().error('A blog category is required.'),
    }),
  ],
  preview: {
    select: {
      title: 'category.title',
      subtitle: 'category.description',
    },
  },
})
