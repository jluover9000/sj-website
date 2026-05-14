import { defineType, defineField } from 'sanity'

export const hero = defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({ name: 'headlineEn', type: 'string', title: 'Headline (English)' }),
    defineField({ name: 'headlineZh', type: 'string', title: 'Headline (Chinese)' }),
    defineField({ name: 'subheadlineEn', type: 'text', title: 'Subheadline (English)' }),
    defineField({ name: 'subheadlineZh', type: 'text', title: 'Subheadline (Chinese)' }),
    defineField({ name: 'backgroundImage', type: 'image', title: 'Background Image', options: { hotspot: true } }),
    defineField({ name: 'ctaLabelEn', type: 'string', title: 'CTA Button Label (English)' }),
    defineField({ name: 'ctaLabelZh', type: 'string', title: 'CTA Button Label (Chinese)' }),
  ],
  preview: {
    select: { title: 'headlineEn', media: 'backgroundImage' },
  },
})
