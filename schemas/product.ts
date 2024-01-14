import {SchemaTypeDefinition} from 'sanity'

const product: SchemaTypeDefinition = {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        hotspot: true,
      },
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'categories'}]}],
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      },
    },
    {
      name: 'published',
      title: 'Published',
      type: 'boolean',
    },
    {
      name: 'outOfStock',
      title: 'Out of Stock',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'salePrice',
      title: 'Sale Price',
      type: 'number',
      placeholder: 'If this is set, the product will be on sale. Leave blank for no sale.',
    },
    {
      name: 'stock',
      title: 'Stock',
      type: 'number',
    },
    {
      name: 'condition',
      title: 'Product Condition',
      type: 'object',

      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          options: {
            list: [
              {title: 'Excellent', value: 'Excellent'},
              {title: 'Like New', value: 'Like New'},
              {title: 'Good', value: 'Good'},
              {title: 'Fair', value: 'Fair'},
            ],
            layout: 'radio',
          },
        },
        {
          name: 'class',
          title: 'Class Name',
          type: 'string',
          options: {
            list: [
              {title: 'Excellent', value: 'excellent'},
              {title: 'Like New', value: 'like-new'},
              {title: 'Good', value: 'good'},
              {title: 'Fair', value: 'fair'},
            ],
            layout: 'radio',
          },
        },

        {
          name: 'rating',
          title: 'Rating',
          type: 'string',
          options: {
            list: [
              {title: '4 - Excellent', value: '4'},
              {title: '3 - Like New', value: '3'},
              {title: '2 - Good', value: '2'},
              {title: '1 - Fair', value: '1'},
            ],
            layout: 'radio',
          },
        },
        {
          name: 'description',
          title: 'Condition Description',
          type: 'text',
          placeholder:
            'Please describe the condition of the product. This will be displayed on the product page next to the condition rating. Users can expand to see this description.',
        },
      ],
    },

    {
      name: 'shortDescription',
      title: 'Short Description',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Long Description',
      type: 'text',
    },
  ],
}

export default product
