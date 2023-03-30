import { useSelector } from "react-redux";
import Card from "./Card";

const Favorites = () => {
    const favorites = useSelector(state=> state.myFavorites)
    
    return (
        <div>
            {
                favorites.map((element) =>{
                    return <Card
                        key={element.id}
                        id={element.id}
                        name={element.name}
                        status={element.status}
                        species={element.species}
                        gender={element.gender}
                        origin={element.origin.name}
                        image={element.image}
                    />
                })
            }
        </div>
    )
}

export default Favorites;