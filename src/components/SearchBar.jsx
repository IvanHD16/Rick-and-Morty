export default function SearchBar({onSearch}) {
   return (
      <div>
         <input type='search' />
         <button onClick={() => onSearch ('Not found ID')}>Agregar</button>
      </div>
   );
}
