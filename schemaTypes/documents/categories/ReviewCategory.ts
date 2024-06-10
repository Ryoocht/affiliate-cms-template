import { defineField, defineType } from 'sanity'
import { ProjectsIcon } from '@sanity/icons'

export const reviewCategory = defineType({
  name: 'reviewCategory',
  title: 'Review Category',
  description: 'Categories for reviews.',
  type: 'document',
  icon: ProjectsIcon,
  fields: [
    defineField({
      name: 'category',
      title: 'Category',
      type: 'category',
      description: 'The category details for the review.',
      validation: rule =>
        rule.required().error('A review category is required.'),
    }),
  ],
  preview: {
    select: {
      title: 'category.title',
      subtitle: 'category.description',
    },
  },
})
