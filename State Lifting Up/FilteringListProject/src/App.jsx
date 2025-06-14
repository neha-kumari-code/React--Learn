import { useState } from "react";
import {Listitem,FilteredItem} from './Components/list.jsx'

export default function App(){
  const [query,setquery]=useState('');
  const result=FilteredItem(Listitem,query);
  function handlechange(e){
    setquery(e.target.value)
  }
  return(
    <>
    <Searchbar query={query} handlechange={handlechange}/>
    <hr/>
    <List items={result}/>
    </>
  )
}

function Searchbar({query,handlechange}){
  return (
    <label>
      search:{' '}
      <input type="text"
      value={query}
      onChange={handlechange}
      />
    </label>
  )
}

function List({items}){
  return (
    
    <table>
      <tbody>
       {
        items.map(item=>(
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.desc}</td>
          </tr>
        ))
       } 
      </tbody>
    </table>
  )
}


// import { useState } from 'react';
// import { foods, filterItems } from './Components/list.jsx';

// export default function FilterableList() {
//   const [query, setQuery] = useState('');
//   const results = filterItems(foods, query);

//   function handleChange(e) {
//     setQuery(e.target.value);
//   }

//   return (
//     <>
//       <SearchBar
//         query={query}
//         onChange={handleChange}
//       />
//       <hr />
//       <List items={results} />
//     </>
//   );
// }

// function SearchBar({ query, onChange }) {
//   return (
//     <label>
//       Search:{' '}
//       <input
//         value={query}
//         onChange={onChange}
//       />
//     </label>
//   );
// }

// function List({ items }) {
//   return (
//     <table>
//       <tbody> 
//         {items.map(food => (
//           <tr key={food.id}>
//             <td>{food.name}</td>
//             <td>{food.description}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }
