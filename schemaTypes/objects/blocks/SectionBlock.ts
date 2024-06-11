import { defineField, defineType } from 'sanity'

export const sectionBlock = defineType({
  name: 'sectionBlock',
  title: 'Section Block',
  description:
    'A block representing a section of content, such as a paragraph or an image.',
  type: 'object',
  fields: [
    defineField({
      name: 'content',
      title: 'Content',
      description: 'The content of the section block.',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
    }),
  ],
})
