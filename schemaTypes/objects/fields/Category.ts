import { defineField, defineType } from 'sanity'
import { ProjectsIcon } from '@sanity/icons'

export const category = defineType({
  name: 'category',
  title: 'Category',
  type: 'object',
  icon: ProjectsIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'The name of the category.',
      type: 'string',
      validation: rule => rule.required().error(''),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      description:
        'A unique identifier for this category, generated from the name.',
      type: 'slug',
      options: { source: 'title' },
      validation: rule =>
        rule
          .required()
          .error(
            'A slug is required to generate a unique identifier for this category.',
          ),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      description: 'A brief description of the category.',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
  },
})
