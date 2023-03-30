const validation =(userData, error, setError) => {
  if(!userData.email) setError({...error, email:'Plis completa este campo'})
  else if(userData.email.length>35) setError({...error, email: 'Demaciados caracteres'})
  else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.email)) setError({...error, email:'Email invalido'})
  else setError({...error, email:''})

  if(userData.password.length<6 || userData.password.length>10) setError({...error, password:'Debe tener entre 6 y 10 caracteres'})
  else if(!/\d/.test(userData.password)) setError({...error, password:'debe contener al menos 1 numero'})
  else setError({...error, password:''})
}

export default validation;