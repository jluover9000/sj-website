import { defineType, defineField } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({ name: 'titleEn', type: 'string', title: 'Title (English)' }),
    defineField({ name: 'titleZh', type: 'string', title: 'Title (Chinese)' }),
    defineField({
      name: 'category',
      type: 'string',
      title: 'Category',
      options: { list: ['Residential', 'Commercial', 'Renovations', 'Design & Build'] }
    }),
    defineField({ name: 'image', type: 'image', title: 'Project Image', options: { hotspot: true } }),
    defineField({ name: 'order', type: 'number', title: 'Display Order' }),
  ],
  orderings: [{ title: 'Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: {
    select: { title: 'titleEn', subtitle: 'category', media: 'image' },
  },
})
