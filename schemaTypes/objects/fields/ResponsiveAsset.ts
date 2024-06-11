import { defineField, defineType } from 'sanity'
import { ImageIcon } from '@sanity/icons'

export const responsiveAsset = defineType({
  name: 'responsiveAsset',
  title: 'Responsive Asset',
  description:
    'Defines the structure for assets that adapt their display based on the screen size of the device accessing them.',
  type: 'object',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      description: 'The name of this responsive asset.',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      description:
        'A unique identifier for this responsive asset, generated from the name.',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: rule =>
        rule
          .required()
          .error(
            'A slug is required to generate a unique identifier for this asset.',
          ),
    }),
    defineField({
      name: 'altText',
      title: 'Alternative Text',
      description: 'Provides alternative text for the responsive asset.',
      type: 'string',
    }),
    defineField({
      name: 'assetType',
      title: 'Asset Type',
      description: 'Select the type of asset. Choose either image or video.',
      type: 'string',
      initialValue: 'image',
      options: {
        list: ['image', 'video'],
        layout: 'dropdown',
      },
      validation: rule =>
        rule
          .required()
          .error(
            'Asset type selection is mandatory. Please choose either image or video.',
          ),
    }),
    defineField({
      name: 'mobileAsset',
      title: 'Mobile Asset',
      description: 'References the mobile version of the asset.',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'caption',
          title: 'Caption',
          description: 'Optional caption for the mobile asset.',
          type: 'string',
        }),
        defineField({
          name: 'poster',
          title: 'Poster',
          description: 'Poster image for the mobile video asset.',
          type: 'image',
          hidden: ({ parent }) => parent?.assetType !== 'video',
          validation: rule =>
            rule.custom((value, context) => {
              if (
                (context.parent as { assetType: string })?.assetType ===
                  'video' &&
                !value
              ) {
                return 'Poster image is required for video assets.'
              }
              return true
            }),
        }),
      ],
    }),
    defineField({
      name: 'desktopAsset',
      title: 'Desktop Asset',
      description: 'References the desktop version of the asset.',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'caption',
          title: 'Caption',
          description: 'Optional caption for the desktop asset.',
          type: 'string',
        }),
        defineField({
          name: 'poster',
          title: 'Poster',
          description: 'Poster image for the desktop video asset.',
          type: 'image',
          hidden: ({ parent }) => parent?.assetType !== 'video',
          validation: rule =>
            rule.custom((value, context) => {
              if (
                (context.parent as { assetType: string })?.assetType ===
                  'video' &&
                !value
              ) {
                return 'Poster image is required for video assets.'
              }
              return true
            }),
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'assetType',
      media: 'mobileAsset',
    },
  },
})
