import { defineType, defineField } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'phone', type: 'string', title: 'Phone' }),
    defineField({ name: 'email', type: 'string', title: 'Email' }),
    defineField({ name: 'address', type: 'string', title: 'Address' }),
    defineField({ name: 'socialFacebook', type: 'url', title: 'Facebook URL' }),
    defineField({ name: 'socialInstagram', type: 'url', title: 'Instagram URL' }),
    defineField({ name: 'socialLinkedin', type: 'url', title: 'LinkedIn URL' }),
  ],
  preview: {
    select: { title: 'phone', subtitle: 'email' },
    prepare: () => ({ title: 'Site Settings' }),
  },
})
