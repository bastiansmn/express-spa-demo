const menus = [
   {
      name: 'Pizza + Double Drink',
      price: '$10.00',
      description: 'Pizza + Double Drink',
   },
   {
      name: 'Pizza + Single Drink',
      price: '$9.00',
      description: 'Pizza + Single Drink',
   },
   {
      name: 'Starter + Double Drink',
      price: '$8.00',
      description: 'Starter + Double Drink',
   },
]

module.exports = {
   getMenus: () => {
      return new Promise(resolve => {
         resolve(menus)
      })
   }
}
