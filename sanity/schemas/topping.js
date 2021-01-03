import {FaPepperHot as icon} from 'react-icons/fa';

export default {
  name: 'topping',
  title:'Toppings',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Topping name',
      type: 'string',
      description: 'name of topping'
    },
    {
      name: 'vegetarian',
      title: 'Vegetarian',
      type: 'boolean',
      description: 'name of topping',
      options: {
        layout:'checkbox',
      } 
    },
  ],
  preview: {
    select: {
      name: 'name',
      vegetarian: 'vegetarian'
    },
    prepare: ({name, vegetarian}) => ({
      title: `${name} ${vegetarian ? '🌱' : '' }`,
    })
  }
};