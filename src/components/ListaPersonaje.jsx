import React from 'react'
import Personaje from './Personaje'
import { useEffect, useState } from "react"
import Buttons from './Buttons'

function ListaPersonaje(){

  const [personaje, setPersonaje] = useState([])
  const [loading, setLoading] = useState(true)
  const [id, setId] = useState(1)

  useEffect(() => {
    (async () => {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${id}`)
      const data = await response.json();
      setPersonaje(data.results);
      setLoading(false);
    })()
  },[id])

  return (
    <div className='container'>
      <Buttons setId={setId} id={id} />
      {
        loading ? 
          ( 
            <h1 className='alert alert-primary text-center'>Loading...</h1> 
          ) : (
            <div className="row">
              {
                personaje.map( ({id, name, image, origin}) => {
                    return (
                      <div className='col-md-4' key={id} >
                        <Personaje 
                          name={name}  
                          image={image} 
                          origin={origin} 
                        />
                      </div>
                    )
                  }
                )
              }
            </div>
          )
      }
      <Buttons setId={setId} id={id} />
    </div>
  )
}

export default ListaPersonaje