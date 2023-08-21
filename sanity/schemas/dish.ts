import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Dish Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'short_description',
      title: 'Short Description',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Price CAD',
      type: 'number',
    }),
    defineField({
      name: 'image',
      title: 'Picture of the Dish',
      type: 'image',
    }),
  ],
})
