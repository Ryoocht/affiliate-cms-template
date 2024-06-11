import { StructureResolver } from 'sanity/structure'
import {
  BlockElementIcon,
  BookIcon,
  ComponentIcon,
  DocumentsIcon,
  DocumentTextIcon,
  ImagesIcon,
  MasterDetailIcon,
  ProjectsIcon,
} from '@sanity/icons'

export const structure: StructureResolver = S =>
  S.list()
    .id('root')
    .title('Content')
    .items([
      S.listItem()
        .title('Pages')
        .icon(BookIcon)
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('Page')
                .schemaType('page')
                .icon(MasterDetailIcon)
                .child(
                  S.documentList()
                    .title('Page')
                    .filter(
                      '_type == "page" && (length(pageSections[_type == "blogPost"]) == 0 || !defined(pageSections))',
                    ),
                ),
              S.listItem()
                .title('Blog Page')
                .schemaType('page')
                .icon(MasterDetailIcon)
                .child(
                  S.documentList()
                    .title('All Blog Pages')
                    .filter(
                      '_type == "page" && length(pageSections[_type == "blogPost"]) > 0',
                    ),
                ),
            ]),
        ),
      S.listItem()
        .title('Blogs')
        .icon(DocumentsIcon)
        .child(
          S.list()
            .title('Blogs')
            .items([
              S.documentTypeListItem('blogPost')
                .title('Blog Posts')
                .icon(DocumentTextIcon),
              S.documentTypeListItem('blogCategory')
                .title('Blog Categories')
                .icon(ProjectsIcon),
            ]),
        ),
      S.listItem()
        .title('Components')
        .icon(ComponentIcon)
        .child(
          S.list()
            .title('Components')
            .items([
              //   S.documentTypeListItem('banner')
              //     .title('Banner')
              //     .icon(BlockElementIcon),
              S.documentTypeListItem('responsiveAsset')
                .title('Responsive Asset')
                .icon(ImagesIcon),
            ]),
        ),
    ])
