export function FilteredItem(listitem,query){
  query=query.toLowerCase();
 return  listitem.filter(item=>{
    item.name.split(' ').some(word=>{
      word.toLowerCase().startsWith(query)
    })
  })
}
export let Listitem=[
  {
    id:0,
    name:'neha',
    desc:"already implemented and imported so you don’t need to write it yourself"
  },
   {
    id:1,
    name:'jaki',
    desc:"already implemented and imported so you don’t need to write it yourself"
  },
   {
    id:2,
    name:'nidhi',
    desc:"already implemented and imported so you don’t need to write it yourself"
  },
   {
    id:3,
    name:"jakri",
    desc:"already implemented and imported so you don’t need to write it yourself"
  },
   {
    id:4,
    name:"renu",
    desc:"already implemented and imported so you don’t need to write it yourself"
  }
]

// export function filterItems(items, query) {
//   query = query.toLowerCase();
//   return items.filter(item =>
//     item.name.split(' ').some(word =>
//       word.toLowerCase().startsWith(query)
//     )
//   );
// }

// export const foods = [{
//   id: 0,
//   name: 'Sushi',
//   description: 'Sushi is a traditional Japanese dish of prepared vinegared rice'
// }, {
//   id: 1,
//   name: 'Dal',
//   description: 'The most common way of preparing dal is in the form of a soup to which onions, tomatoes and various spices may be added'
// }, {
//   id: 2,
//   name: 'Pierogi',
//   description: 'Pierogi are filled dumplings made by wrapping unleavened dough around a savoury or sweet filling and cooking in boiling water'
// }, {
//   id: 3,
//   name: 'Shish kebab',
//   description: 'Shish kebab is a popular meal of skewered and grilled cubes of meat.'
// }, {
//   id: 4,
//   name: 'Dim sum',
//   description: 'Dim sum is a large range of small dishes that Cantonese people traditionally enjoy in restaurants for breakfast and lunch'
// }];
