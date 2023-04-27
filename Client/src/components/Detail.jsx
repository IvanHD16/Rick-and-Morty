import React from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


const Detail = ()=>{
    const [character, setCharacter] = useState({})
    const {id} = useParams()
    
    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
    
     return (
        <div>
            {
            character.name ?(
                <>
                    <h2>{character.name}</h2>
                    <h3>status:{character.status}</h3>
                    <h3>species:{character.species}</h3>
                    <h3>gender:{character.gender}</h3>
                    <h3>origin:{character.origin?.name}</h3>
                    <img src={character.image} alt="imagen"/>
                </>
                )
                : (<h3>loading...</h3>)
            }
            
        </div>
    )
}

export default Detail;