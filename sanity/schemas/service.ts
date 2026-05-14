import { defineType, defineField } from 'sanity'

export const service = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({ name: 'titleEn', type: 'string', title: 'Title (English)' }),
    defineField({ name: 'titleZh', type: 'string', title: 'Title (Chinese)' }),
    defineField({ name: 'descriptionEn', type: 'text', title: 'Description (English)' }),
    defineField({ name: 'descriptionZh', type: 'text', title: 'Description (Chinese)' }),
    defineField({ name: 'icon', type: 'image', title: 'Icon Image', options: { hotspot: true } }),
    defineField({ name: 'order', type: 'number', title: 'Display Order' }),
  ],
  orderings: [{ title: 'Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: {
    select: { title: 'titleEn', subtitle: 'titleZh' },
  },
})
