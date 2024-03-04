import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'from',
      title: 'Date from',
      type: 'date',
      options: {
        dateFormat: 'MMMM YYYY',
      },
    }),
    defineField({
      name: 'to',
      title: 'Date to',
      type: 'date',
      options: {
        dateFormat: 'MMMM YYYY',
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})
