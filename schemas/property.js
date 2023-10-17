// schemas/pet.js
export default {
  name: 'property',
  type: 'document',
  title: 'Propiedad',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Título'
    },
    {
      name: 'price',
      type: 'number',
      title: 'Precio'
    },
    {
      name: 'province',
      type: 'string',
      title: 'Provincia',
      options: {
        list: [
          {title: 'San José', value: 'san_jose'},
          {title: 'Cartago', value: 'cartago'},
          {title: 'Heredia', value: 'heredia'},
          {title: 'Guanacaste', value: 'guanacaste'},
          {title: 'Limon', value: 'limon'},
          {title: 'Alajuela', value: 'alajuela'},
          {title: 'Puntarenas', value: 'puntarenas'}
        ],
      }
    }
  ]
}