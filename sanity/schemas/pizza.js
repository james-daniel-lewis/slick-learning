import {MdLocalPizza as icon} from 'react-icons/md';
import PriceInput from '../components/PriceInput'


export default {
  name: 'pizza',
  title:'pizzas',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'pizza name',
      type: 'string',
      description: 'name of pizza'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'price of pizza in £££££££',
      validation: Rule => Rule.min(10).max(100),
      //add custom component 
      inputComponent: PriceInput,
    },
    {
      name:'toppings',
      title:'Toppings',
      type: 'array',
      of: [
        {
          type:'reference', to: [{ type: 'topping'}]
        }
      ],
    },
  ],
  preview:{
    select: {
      title: 'name',
      media: 'image',
      topping0: 'toppings.0.name',
      topping1: 'toppings.1.name',
      topping2: 'toppings.2.name',
      topping3: 'toppings.3.name',

    },
    prepare: ({title, media , ...toppings}) => {
      console.log(title,media,toppings)
      //flilter underfined toppings out
      const tops = Object.values(toppings).filter(Boolean)
      //return preview object
      return {
        title, 
        media,
        subtitle: tops.join(', '),
      }
    }
  }
};