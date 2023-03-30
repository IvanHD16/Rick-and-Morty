import './App.css';
import Nav from "./components/Nav";
import Cards from './components/Cards';
import { useState, useEffect } from 'react';
import axios from 'axios'
import {Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import Detail from './components/Detail';
import About from './components/About'
import Form from './components/Form/Form';
import Favorites from './components/Favorites';

function App() {
   const [characters, setCharacters] = useState([])
   const [access,setAccess] = useState(false)
   const navigate = useNavigate()

   //!Credenciales fake
   const EMAIL = 'ivan.hd.16@gmail.com'
   const PASSWORD= '123456A'
   // Funcion de acceso
   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      } else {alert('credenciales incorrectas')}
   }
   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   function onClose(id){
      setCharacters(characters.filter((char) => char.id !== id))
   }

   const onSearch = (id)=> {
      
      if(characters.find((char)=>char.id===id)) { return alert("Personaje ya existente")}
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const {pathname} = useLocation();

   return (
      <div className='App'>
         { pathname !== '/' && <Nav onSearch = {onSearch}/>}
         
         <Routes>
            <Route path='/' element={<Form login={login}/>}/>

            <Route path="/home" element={<Cards characters={characters} onClose = {onClose} />}/>
               
            <Route path='/about' element={<About/>}/>
               
            <Route path='/Detail/:id' element={<Detail/>}/>

            <Route path='/favorites' element={<Favorites/>}/>
               
         </Routes>
       
      </div>
   );
}

export default App;
