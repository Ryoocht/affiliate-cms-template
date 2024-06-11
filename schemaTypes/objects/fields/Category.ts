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
      validation: rule =>
        rule
          .required()
          .error('A title is required for the category.')
          .min(3)
          .error('The title must be at least 3 characters long.')
          .max(20)
          .error('The title can be up to 50 characters long.'),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      description:
        'A unique identifier for this category, generated from the name.',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
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
