
function Buttons({setId, id}) {

  const handleNext = () =>{
    setId(id+1);
  }

  const handleBefore = () => {
    if(id==1){
      setId(id)
    } else {
      setId(id-1)
    }
  }

  return (
    <div className='d-flex justify-content-center'>  
        <button 
          className='btn btn-primary mx-auto mb-5'
          onClick={ handleBefore }
        >Anterior</button>
        <p> Pagina actual: {id} </p>
        <button 
          className='btn btn-primary mx-auto mb-5'
          onClick={ handleNext }
        >Siguiente</button>
    </div>
  )
}

export default Buttons