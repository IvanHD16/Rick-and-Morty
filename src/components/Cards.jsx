import Card from './Card';

export default function Cards({characters, onClose}) {
   
   return (
      <div>
         {  characters &&
            characters.map((element, index) =>{
               return (
                  <Card key={index}
                  id={element.id}
                  name={element.name}
                  status={element.status}
                  species={element.species}
                  gender={element.gender}
                  origin={element.origin.name}
                  image={element.image}
                  onClose={onClose}
                  />
                  
                  )
            })
         }
      </div>
   );
}
