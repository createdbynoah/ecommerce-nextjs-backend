import {SchemaTypeDefinition} from 'sanity'

const categories: SchemaTypeDefinition = {
  name: 'categories',
  title: 'Categories',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'product'}]}],
    },
  ],
}

export default categories
